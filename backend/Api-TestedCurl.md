===============================
VULNERABILITY API TEST COMMANDS
===============================

BASE URL:
http://localhost:5000/api/vulnerabilities


--------------------------------
1. PAGINATION APIs
--------------------------------

Get first page (10 records)
curl --location "http://localhost:5000/api/vulnerabilities?page=1&limit=10"

Get second page
curl --location "http://localhost:5000/api/vulnerabilities?page=2&limit=10"

Get 5 records per page
curl --location "http://localhost:5000/api/vulnerabilities?page=1&limit=5"

Get 100 records
curl --location "http://localhost:5000/api/vulnerabilities?limit=100"

Get last page
curl --location "http://localhost:5000/api/vulnerabilities?page=156&limit=10"


--------------------------------
2. FILTER APIs
--------------------------------

Filter by Vendor
curl --location "http://localhost:5000/api/vulnerabilities/filter?vendor=Google"

Filter by Product
curl --location "http://localhost:5000/api/vulnerabilities/filter?product=Dawn"

Filter by Ransomware (Known)
curl --location "http://localhost:5000/api/vulnerabilities/filter?ransomware=Known"

Filter by Ransomware (Unknown)
curl --location "http://localhost:5000/api/vulnerabilities/filter?ransomware=Unknown"

Filter by Date Range
curl --location "http://localhost:5000/api/vulnerabilities/filter?startDate=2026-04-01&endDate=2026-04-08"

Combined Filter (Vendor + Product)
curl --location "http://localhost:5000/api/vulnerabilities/filter?vendor=Google&product=Dawn"

Combined Filter (Vendor + Ransomware)
curl --location "http://localhost:5000/api/vulnerabilities/filter?vendor=Zoho&ransomware=Known"


--------------------------------
3. AGGREGATION APIs
--------------------------------

Top Vendors
curl --location "http://localhost:5000/api/vulnerabilities/top-vendors"

Ransomware Stats
curl --location "http://localhost:5000/api/vulnerabilities/ransomware-stats"


--------------------------------
4. POSTMAN TEST INSTRUCTIONS
--------------------------------

Method: GET

Headers:
None required

Body:
None required

Steps:
1. Open Postman
2. Select GET method
3. Paste any API URL above
4. Click Send
5. Verify response

--------------------------------
5. EXPECTED RESULTS
--------------------------------

Pagination:
- Returns limited records
- Includes total count

Filter:
- Returns filtered data based on query

Aggregation:
- Returns grouped results (counts)

--------------------------------
STATUS
--------------------------------

✔ Pagination API tested
✔ Filter API tested
✔ Aggregation API tested
✔ MongoDB data verified (1559 records)
✔ All endpoints working successfully

================================
END OF FILE
================================