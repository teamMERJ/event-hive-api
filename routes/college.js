import { Router } from "express";
import { postCollege, getOneCollege, getAllColleges,updateCollege, deleteCollege} from "../controllers/college.js";

const collegeRouter = Router();

// post college
collegeRouter.post("/colleges", postCollege)

// get only one college
collegeRouter.get("/colleges/:id", getOneCollege)

// get all colleges
collegeRouter.get("/colleges", getAllColleges)

// uodate college
collegeRouter.patch("/colleges/:id", updateCollege)

// delete college
collegeRouter.delete("/colleges", deleteCollege)

export default collegeRouter;