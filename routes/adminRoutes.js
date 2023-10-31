const express = require("express");
const authMiddelware = require("../middlewares/authMiddelware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddelware = require("../middlewares/adminMiddelware");

//ROUTES
const router = express.Router();

// get || donar list
router.get(
  "/donar-list",
  authMiddelware,
  adminMiddelware,
  getDonarsListController
);

// get || hospital list
router.get(
  "/hospital-list",
  authMiddelware,
  adminMiddelware,
  getHospitalListController
);

// get || org list
router.get("/org-list", authMiddelware, adminMiddelware, getOrgListController);

// ==========================

// DELETE DONAR || GET
router.delete(
  "/delete-donar/:id",
  authMiddelware,
  adminMiddelware,
  deleteDonarController
);

//EXPORT
module.exports = router;
