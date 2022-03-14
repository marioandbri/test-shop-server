import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/api/category", async (req, res) => {
	const category = await prisma.category.findMany();
	res.json(category);
});

router.get("/api/category/:query", async (req, res) => {
	const query = req.params.query;
	const results = await prisma.category.findFirst({
		where: {
			name: query,
		},
		include: {
			products: true,
		},
	});
	res.json(results);
});
export default router;
