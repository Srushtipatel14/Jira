const express=require("express");
const router=express.Router();
const createproject=require("../controllers/admin/projects/createproject");
const updateproject=require("../controllers/admin/projects/updateproject");
const getSingleProject =require("../controllers/admin/projects/getsingleproject");
const getAllProject=require("../controllers/admin/projects/getallproject");
const getAllUser=require("../controllers/admin/users/getalluser")
const {getAccessToAdmin}=require("../middlewares/authorization/authAdmin");


router.post("/createproject",getAccessToAdmin,createproject);
router.put("/updateproject",getAccessToAdmin,updateproject);
router.get("/getsingleproject/:id",getAccessToAdmin,getSingleProject)
router.get("/getallproject",getAccessToAdmin,getAllProject)
router.get("/getalluser",getAccessToAdmin,getAllUser)

module.exports=router;