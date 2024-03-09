import express from "express";
import * as defaultController from "../controllers/default-controller.js"

const default_router = express.Router()

default_router.get("/", defaultController.index)

export default default_router