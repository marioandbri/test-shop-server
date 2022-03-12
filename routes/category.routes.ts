import { Router } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/api/category", async (req, res) => {
	const category = await prisma.category.findMany({
		include: { products: true },
	});
	res.json(category);
});

export default router;
