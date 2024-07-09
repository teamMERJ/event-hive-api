import { Router } from "express";
import { getEvent, getEvents,patchEvent,deleteEvent,postEvent,} from "../controllers/event.js";
import { remoteUpload } from "../middlewares/uploads.js";

// create event router
export const eventRouter = Router();

// define routes
eventRouter.post("/events", remoteUpload.single("banner"), postEvent);
eventRouter.get("/events/:id", getEvent);
eventRouter.get("/events", getEvents);
eventRouter.patch("/events/:id", remoteUpload("banner"), patchEvent);
eventRouter.delete("/events/id", deleteEvent);
