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
exports.delete_company = exports.add_company = exports.delete_bike = exports.update_bike = exports.get_bike = exports.add_bike = void 0;
const db_1 = __importDefault(require("../../db"));
const rebike_common_1 = require("@martinjohnm/rebike-common");
const cloudinary_uploader_1 = require("../../utils/cloudinary/cloudinary_uploader");
// Bike CRUD Operation Indivudual
const add_bike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companyId = req.query.companyId;
        const locationId = req.query.locationId;
        const body = req.body;
        if (body.image) {
            const imagee = "/home/martin-john-m/Videos/aaaadevssprojeccts/two-wheeler-app-node/backend/src/media/r15.png";
            const test = yield (0, cloudinary_uploader_1.uploadImage)(body.image);
            body.image = test;
        }
        const bike = yield db_1.default.bike.create({
            data: {
                image: req.body.image,
                title: req.body.title,
                price: req.body.price,
                model: req.body.model,
                company: {
                    connect: { id: Number(req.body.companyId) }
                },
                location: {
                    connect: { id: Number(req.body.locationId) }
                }
            }
        });
        res.status(200).json({
            data: bike,
            success: true,
            message: "Bike added successfully!"
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
            message: "Internal server error"
        });
    }
});
exports.add_bike = add_bike;
const get_bike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const bike = yield db_1.default.bike.findFirst({
            where: {
                id
            },
            include: { company: true }
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
const update_bike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = Number(req.params.id);
        const companyId = Number(req.query.companyId);
        const locationId = Number(req.query.locationId);
        const body = req.body;
        const response = rebike_common_1.bikeUpdateInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error: response.error,
                success: false,
                message: "Bike Updataion failed"
            });
            return;
        }
        const bike = yield db_1.default.bike.update({
            where: {
                id: bikeId
            },
            data: Object.assign(Object.assign({}, body), { company: {
                    connect: { id: companyId }
                } })
        });
        if (!bike) {
            return res.status(400).json({
                success: false,
                error: "No such bike"
            });
        }
        res.status(200).json({
            success: true,
            message: "Bike updated successfully!"
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
exports.update_bike = update_bike;
const delete_bike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const bike = yield db_1.default.bike.delete({
            where: {
                id
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
            message: "Bike deleted successfully!"
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
exports.delete_bike = delete_bike;
// Company CRUD Operations
const add_company = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = rebike_common_1.companyAddInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error: response.error,
                success: false,
                message: "Company adding failed"
            });
            return;
        }
        const { title, country } = body;
        const existingCompany = yield db_1.default.company.findFirst({
            where: {
                title
            }
        });
        if (existingCompany) {
            return res.status(400).json({
                error: "Company already Exists",
                success: false
            });
        }
        const company = yield db_1.default.company.create({
            data: {
                title,
                country
            }
        });
        res.status(200).json({
            data: company,
            success: true,
            message: "Comapny added successfully!"
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
exports.add_company = add_company;
const delete_company = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        console.log(id);
        const company = yield db_1.default.company.delete({
            where: {
                id
            }
        });
        if (!company) {
            return res.status(400).json({
                success: false,
                error: "No such company"
            });
        }
        res.status(200).json({
            data: company,
            success: true,
            message: "Company and corresponding bikes deleted successfully!"
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
exports.delete_company = delete_company;
