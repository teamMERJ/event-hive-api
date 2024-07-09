import { CollegeModel } from "../models/college.js";

// post a college
export const postCollege = async (req, res, next) =>{
    try {
        const newCollege = await CollegeModel.create({
            ...req.body,
            banner: req.file.filename
        });
        res.json(newCollege);
    } catch (error) {
        next(error)
    }
};


// get one college
export const getOneCollege = async (req, res, next) =>{
    try {
        // get one from the database
        const oneCollege = await CollegeModel.findById(req.params.id);
        res.json(oneCollege);
    } catch (error) {
        next(error)
    }
};


// get all colleges
export const getAllColleges = async (req, res, next) => {
    try {
        // get all from the database
        const {
            limit = 4,
            skip = 0,
            filter = "{}",
            sort = "{}",
            fields = "{}",
          } = req.query;
        const allColleges = await CollegeModel.find(JSON.parse(filter))
        .limit(JSON.parse(limit))
        .skip(JSON.parse(skip))
        .sort(JSON.parse(sort))
        .select(JSON.parse(fields))
        //   return response
        res.json(allColleges);
    } catch (error) {
        next(error)
    }
};

// update college by ID
export const updateCollege = async (req, res, next) => {
    try {
        const updateById = await CollegeModel.findByIdAndUpdate(req.params.id, 
            {...req.body, banner: req?.file?.filename},
            {new: true}
        );
        res.json(updateById);
    } catch (error) {
        next(error)
    }
};

// delete college by id
export const deleteCollege = async (req, res, next) =>{
    try {
        const deleteById = await CollegeModel.findByIdAndDelete(req.params.id);
        res.json(deleteById);
    } catch (error) {
        next(error)
    }
};

