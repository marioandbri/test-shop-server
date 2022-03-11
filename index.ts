import express from "express";
import { PrismaClient } from "@prisma/client";
import Products from "./routes/products.routes";

const prisma = new PrismaClient();

(async function main() {
	const app = express();
	app.use(Products);
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
