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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
const prisma = new client_1.PrismaClient();
router.get("/api/category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma.category.findMany();
    res.json(category);
}));
router.get("/api/category/:query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.params.query;
    const results = yield prisma.category.findFirst({
        where: {
            name: query,
        },
        include: {
            products: true,
        },
    });
    res.json(results);
}));
exports.default = router;
//# sourceMappingURL=category.routes.js.map