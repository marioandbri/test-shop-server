import express, { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
	const app = express();
	const router = Router();
	const ruta = router.get("/", async (req, res) => {
		const allProducts = await prisma.product.findMany({
			include: { categoryName: true },
		});
		res.json({ message: "Ruta Funcionando", data: allProducts });
	});
	app.use(ruta);
	app.set("port", 4000);
	app.listen(app.get("port"), () => {
		console.log("server en: http://localhost:4000");
	});
})()
	.catch((e: Error) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
