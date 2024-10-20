"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_single_bike_by_date = exports.get_bikes_by_date_range_by_params = exports.get_bikes_by_date_range = exports.get_bikes_by_filter = exports.get_comapanies = exports.get_bike = exports.get_bikes = void 0;
const db_1 = __importDefault(require("../../db"));
const rebike_common_1 = require("@martinjohnm/rebike-common");
const get_bikes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikes = yield db_1.default.bike.findMany({
            include: { company: true, location: true },
        });
        if (!bikes) {
            return res.status(400).json({
                success: false,
                error: "No Bikes available"
            });
        }
        res.status(200).json({
            data: bikes,
            success: true,
            message: "Bikes fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during signup", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bikes = get_bikes;
const get_bike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const bike = yield db_1.default.bike.findFirst({
            where: {
                id
            },
            include: {
                company: true,
                location: true,
                bookings: true
            }
        });
        if (!bike) {
            return res.status(400).json({
                success: false,
                error: "No such bike"
            });
        }
        res.status(200).json({
            data: bike,
            success: true,
            message: "Bike fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during signup", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bike = get_bike;
const get_comapanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield db_1.default.company.findMany();
        if (!companies) {
            return res.status(400).json({
                success: false,
                error: "No Companies available"
            });
        }
        return res.status(200).json({
            data: companies,
            success: true,
            message: "Companies fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during companies fetching", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_comapanies = get_comapanies;
const get_bikes_by_filter = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const companies = yield db_1.default.bike.findMany({
            where: Object.assign({}, body),
            include: { company: true, location: true },
        });
        if (!companies) {
            return res.status(400).json({
                success: false,
                error: "No Companies available"
            });
        }
        return res.status(200).json({
            data: companies,
            success: true,
            message: "Companies fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during companies fetching", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bikes_by_filter = get_bikes_by_filter;
const get_bikes_by_date_range = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let body = req.body;
        body.startTime = new Date(body.startTime);
        body.endTime = new Date(body.endTime);
        const response = rebike_common_1.bookingDateBikeFilter.safeParse(body);
        if (!response.success) {
            console.log(response.error);
            res.status(400).json({
                error: response.error,
                success: false,
                message: "Invalid Inputs"
            });
            return;
        }
        const startTimeFromUser = new Date(body.startTime);
        const endTimeFromUser = new Date(body.endTime);
        //(startTimeFromUser >= booking.startTime && startTimeFromUser <= booking.endTime) || (endTimeFromUser >= booking.startTime && endTimeFromUser <= booking.endTime)
        delete body.startTime;
        delete body.endTime;
        const bikes = yield db_1.default.bike.findMany({
            where: Object.assign(Object.assign({}, body), { bookings: {
                    none: {
                        OR: [
                            {
                                AND: [
                                    {
                                        endTime: {
                                            gte: startTimeFromUser
                                        },
                                        startTime: {
                                            lte: startTimeFromUser
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            },
                            {
                                AND: [
                                    {
                                        startTime: {
                                            lte: endTimeFromUser
                                        },
                                        endTime: {
                                            gte: endTimeFromUser
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }, {
                                AND: [
                                    {
                                        startTime: {
                                            gte: startTimeFromUser
                                        },
                                        endTime: {
                                            lte: endTimeFromUser
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                } }),
            include: { company: true, location: true },
        });
        return res.status(200).json({
            data: bikes,
            success: true,
            message: "Bikes by slots fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during Bikes fetching", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bikes_by_date_range = get_bikes_by_date_range;
const get_bikes_by_date_range_by_params = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let startTimeFromUser = String(req.query.startTime);
        let endTimeFromUser = String(req.query.endTime);
        const locationId = req.query.locationId;
        const companyId = req.query.companyId;
        if (!startTimeFromUser || !endTimeFromUser) {
            return res.status(400).json({
                success: false,
                message: "Invalid Inputs"
            });
        }
        let startTimeFromUserTocheck = new Date(startTimeFromUser);
        let endTimeFromUserToCheck = new Date(endTimeFromUser);
        let body = {};
        if (locationId && companyId) {
            body = {
                locationId: Number(locationId),
                companyId: Number(companyId)
            };
        }
        if (!locationId && companyId) {
            body = {
                companyId: Number(companyId)
            };
        }
        if (locationId && !companyId) {
            body = {
                locationId: Number(locationId)
            };
        }
        const bikes = yield db_1.default.bike.findMany({
            where: Object.assign(Object.assign({}, body), { bookings: {
                    none: {
                        OR: [
                            {
                                AND: [
                                    {
                                        endTime: {
                                            gte: startTimeFromUserTocheck
                                        },
                                        startTime: {
                                            lte: startTimeFromUserTocheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            },
                            {
                                AND: [
                                    {
                                        startTime: {
                                            lte: endTimeFromUserToCheck
                                        },
                                        endTime: {
                                            gte: endTimeFromUserToCheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }, {
                                AND: [
                                    {
                                        startTime: {
                                            gte: startTimeFromUserTocheck
                                        },
                                        endTime: {
                                            lte: endTimeFromUserToCheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                } }),
            include: { company: true, location: true },
        });
        return res.status(200).json({
            data: bikes,
            success: true,
            message: "Bikes by slots fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during Bikes fetching", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_bikes_by_date_range_by_params = get_bikes_by_date_range_by_params;
const get_single_bike_by_date = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = Number(req.params.id);
        let startTimeFromUser = String(req.query.startTime);
        let endTimeFromUser = String(req.query.endTime);
        const locationId = req.query.locationId;
        const companyId = req.query.companyId;
        if (!startTimeFromUser || !endTimeFromUser) {
            return res.status(400).json({
                success: false,
                message: "Invalid Inputs"
            });
        }
        let startTimeFromUserTocheck = new Date(startTimeFromUser);
        let endTimeFromUserToCheck = new Date(endTimeFromUser);
        let body = {};
        if (locationId && companyId) {
            body = {
                locationId: Number(locationId),
                companyId: Number(companyId)
            };
        }
        if (!locationId && companyId) {
            body = {
                companyId: Number(companyId)
            };
        }
        if (locationId && !companyId) {
            body = {
                locationId: Number(locationId)
            };
        }
        const bikes = yield db_1.default.bike.findFirst({
            where: Object.assign(Object.assign({ id }, body), { bookings: {
                    none: {
                        OR: [
                            {
                                AND: [
                                    {
                                        endTime: {
                                            gte: startTimeFromUserTocheck
                                        },
                                        startTime: {
                                            lte: startTimeFromUserTocheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            },
                            {
                                AND: [
                                    {
                                        startTime: {
                                            lte: endTimeFromUserToCheck
                                        },
                                        endTime: {
                                            gte: endTimeFromUserToCheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }, {
                                AND: [
                                    {
                                        startTime: {
                                            gte: startTimeFromUserTocheck
                                        },
                                        endTime: {
                                            lte: endTimeFromUserToCheck
                                        },
                                        NOT: {
                                            status: "CANCELLED"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                } }),
            include: { company: true, location: true },
        });
        return res.status(200).json({
            data: bikes,
            success: true,
            message: "Bikes by slots fetched successfully!"
        });
    }
    catch (error) {
        let message;
        if (error instanceof Error)
            message = error.message;
        else
            message = String(error);
        console.log("Error during Bikes fetching", message);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
});
exports.get_single_bike_by_date = get_single_bike_by_date;
