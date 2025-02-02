import express from "express";
import {
  getAvailableCountries,
  getCountryInfo,
} from "./controllers/countryController";

const router = express.Router();

router.get("/countries", getAvailableCountries);
router.get("/country/:countryCode", getCountryInfo);

export default router;
