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
exports.get_all_locations = exports.create_location = void 0;
const db_1 = __importDefault(require("../../db"));
const rebike_common_1 = require("@martinjohnm/rebike-common");
const create_location = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const response = rebike_common_1.locationAddInput.safeParse(body);
        if (!response.success) {
            res.status(400).json({
                error: response.error,
                success: false,
                message: "location adding failed"
            });
            return;
        }
        const existingLocation = yield db_1.default.location.findFirst({
            where: {
                title: body.title
            }
        });
        if (existingLocation) {
            return res.status(400).json({
                success: false,
                message: "Location already exists!"
            });
        }
        const location = yield db_1.default.location.create({
            data: Object.assign({}, body)
        });
        return res.status(200).json({
            data: location,
            success: true,
            message: "Location created successfully!"
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
exports.create_location = create_location;
const get_all_locations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield db_1.default.location.findMany();
        return res.status(200).json({
            data: location,
            success: true,
            message: "Location fetched successfully!"
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
exports.get_all_locations = get_all_locations;
