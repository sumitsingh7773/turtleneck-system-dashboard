require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Vulnerability = require("../models/Vulnerability");

mongoose.connect(process.env.MONGO_URI);
const importData = async () => {
  try {
    const filePath = path.join(__dirname, "../data.json");

    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const data = raw.vulnerabilities.map(v => ({
      cveID: v.cveID,
      vendorProject: v.vendorProject,
      product: v.product,
      vulnerabilityName: v.vulnerabilityName,
      dateAdded: v.dateAdded ? new Date(v.dateAdded) : null,
      dueDate: v.dueDate ? new Date(v.dueDate) : null,
      knownRansomwareCampaignUse: v.knownRansomwareCampaignUse,
      cwes: v.cwes || [],
    }));

    await Vulnerability.deleteMany();
    await Vulnerability.insertMany(data);

    console.log("Data Imported Successfully");
    process.exit();
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
};

importData();