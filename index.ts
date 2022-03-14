import express from "express";
import { PrismaClient } from "@prisma/client";
import Products from "./routes/products.routes";
import Category from "./routes/category.routes";
import cors from "cors";
import morgan from "morgan";

const prisma = new PrismaClient();

(async function main() {
	const app = express();
	app.use(
		cors({
			origin: "http://localhost:8080",
		})
	);
	app.use(morgan("dev"));
	app.use(Products);
	app.use(Category);
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
