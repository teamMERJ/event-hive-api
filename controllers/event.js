import { eventModel } from "../models/event.js";

// get one event

export const getEvent = async (req, res, next) => {
  try {
    // getting on event
    const oneEvent = await eventModel.findById(req.params.id);
    res.json(oneEvent);
  } catch (error) {
    next(error);
  }
};

// getting all events

export const getEvents = async (req, res, next) => {
  try {
    // get query params
    const {
      limit = 10,
      skip = 0,
      filter = "{}",
      sort = "{}",
      fields = "{}",
    } = req.query;

    // getting all colleges from database
    const event = eventModel
      .find(JSON.parse(filter))
      .select(JSON.parse(fields))
      .limit(JSON.parse(skip))
      .sort(JSON.parse(sort));

    // return response
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
  }
};

// adding an event

export const postEvent = async (req, res, next) => {
  try {
    const addEvent = await eventModel.create({
      ...req.body,
      banner: req.file.filename,
    });
    // return response
    res.status(201).json(addEvent);
  } catch (error) {
    console.log(error);
  }
};

// updating an event

export const patchEvent = async (req, res, next) => {
  try {
    const updateEvent = await eventModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body, banner: req?.file?.filename },
      { new: true }
    );
    // return response
    res.status(200).json(updateEvent);
  } catch (error) {
    next(error);
  }
};

// deleting an event

export const deleteEvent = async (req, res, next) => {
  try {
    const deletedEvent = await eventModel.findByIdAndDelete(req.params.id);
    // return response
    res.json(`Event with id ${req.params.id} has been deleted`);
  } catch (error) {
    next(error);
  }
};
