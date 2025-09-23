const ErrorHandler = require("../../../helpers/errors/errorHandler");
const Project = require("../../../models/projectModel");

const updateProject = async (req, res, next) => {
    try {
        const data = req.body;
        const { id } = req.admin;
        data.ownerId = id;

        const newProject = new Project(data);
        await newProject.updateOne({_id:data._id});

        return res.status(201).json({
            success: true,
            message: "Project edited successfully",
            data: data
        });
    } catch (error) {
        return next(new ErrorHandler("Something went wrong", 500, error));
    }
};

module.exports = updateProject;
