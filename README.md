========================================================
FULL STACK MERN ASSIGNMENT
========================================================

PROJECT OVERVIEW
--------------------------------------------------------
This is a MERN stack dashboard application built to analyze cybersecurity vulnerabilities from the CISA Known Exploited Vulnerabilities  dataset.

It includes:
- MongoDB database for storing vulnerabilities
- Node.js + Express backend APIs
- React frontend dashboard
- Filters, charts, and paginated table

The goal is to extract meaningful cybersecurity insights from real-world vulnerability data.

========================================================
DATASET
--------------------------------------------------------
Source:
https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json

Requirements:
- Download dataset locally
- Extract vulnerabilities array
- Store each record as a document in MongoDB
- Do NOT use JSON file directly in APIs

========================================================
DATABASE (MongoDB)
--------------------------------------------------------
Collection: vulnerabilities

Fields:
- cveID
- vendorProject
- product
- vulnerabilityName
- dateAdded
- dueDate
- knownRansomwareCampaignUse
- cwes

========================================================
BACKEND APIs (Node.js + Express)
========================================================

1. Pagination API
GET /api/vulnerabilities?page=&limit=

2. Filter API
GET /api/vulnerabilities/filter
Filters: vendor, product, ransomware, date range

3. Analytics APIs
GET /api/vulnerabilities/top-vendors
GET /api/vulnerabilities/ransomware-stats

Features:
- MongoDB aggregation for analytics
- Pagination support
- Clean MVC structure (controllers/routes/models)

========================================================
BACKEND QUALITY (IMPORTANT)
--------------------------------------------------------
- Proper error handling using try/catch in all controllers
- Input validation for query parameters
- Efficient MongoDB queries (no full dataset loading)
- Indexed fields for performance optimization:
  - cveID
  - vendorProject
- Aggregation pipelines used for analytics endpoints

========================================================
FRONTEND (REACT)
--------------------------------------------------------
UI Components:
- Sidebar navigation
- Header section
- KPI cards (Total CVEs, Top Vendor, Ransomware)
- Filters (Vendor, Product, Ransomware)
- Charts (Top Vendors, Ransomware stats)
- Paginated vulnerability table

Features:
- Responsive dashboard UI
- Real-time filtering
- Data visualization using charts
- API-driven dynamic updates

========================================================
DATA INSIGHTS (IMPORTANT)
--------------------------------------------------------
The dashboard provides meaningful cybersecurity insights:

- Top vendors with highest vulnerability counts
- Most affected products in real-world attacks
- Ransomware-related vulnerability trends
- Time-based vulnerability analysis (trend over time)

========================================================
PERFORMANCE OPTIMIZATION
--------------------------------------------------------
- MongoDB indexing for faster queries
- Aggregation pipelines for analytics
- Pagination to avoid loading large datasets
- Optimized filtering queries
- No direct JSON file usage in APIs

========================================================
ERROR HANDLING
--------------------------------------------------------
- All APIs wrapped in try/catch blocks
- Proper HTTP status codes:
  - 200: Success
  - 400: Client error
  - 500: Server error
- Input validation for safe API requests

========================================================
PROJECT STRUCTURE
--------------------------------------------------------
Backend:
- controllers/
- models/
- routes/
- server.js

Frontend:
- components/
- pages/
- services/
- styles/

========================================================
DATA IMPORT
--------------------------------------------------------
Option 1:
- Node.js script to insert JSON into MongoDB

Option 2:
- MongoDB Compass import

========================================================
HOW TO RUN
--------------------------------------------------------
Backend:
cd backend
npm install
npm run dev

Frontend:
cd frontend
npm install
npm start

========================================================
BONUS FEATURES
--------------------------------------------------------
- MongoDB indexing
- Aggregation-based analytics
- Clean and responsive UI
- Modular backend architecture

========================================================