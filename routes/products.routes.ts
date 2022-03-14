import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/api/products", async (req, res) => {
	const products = await prisma.product.findMany();
	res.json(products);
});
router.get("/api/products/search=:query", async (req, res) => {
	const query = req.params.query;
	const results = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
			},
		},
	});
	res.json(results);
});

export default router;
