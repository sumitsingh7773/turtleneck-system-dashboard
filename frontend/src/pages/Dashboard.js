import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import TopVendorsChart from "../components/TopVendorsChart";
import RansomwareChart from "../components/RansomwareChart";
import Filters from "../components/Filters";
import API from "../services/api";

import "../styles/dashboard.css";

function Dashboard() {
  const [vendors, setVendors] = useState([]);
  const [ransomware, setRansomware] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const [vendorRes, ransomwareRes] = await Promise.all([
          API.get("/vulnerabilities/top-vendors"),
          API.get("/vulnerabilities/ransomware-stats"),
        ]);

        setVendors(vendorRes.data || []);
        setRansomware(ransomwareRes.data || []);
      } catch (err) {
        console.error("Dashboard API Error:", err);
        setError("Failed to load dashboard data");
        setVendors([]);
        setRansomware([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="container">
        <Sidebar />
        <div className="main center">
          <div className="loader">Loading dashboard...</div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="container">
        <Sidebar />
        <div className="main center">
          <p className="error-text">{error}</p>
        </div>
      </div>
    );
  }
  const totalCVEs = 1559;
  const topVendor = vendors?.[0]?._id || "N/A";
  const ransomwareCount = ransomware?.length || 0;

  return (
    <div className="container">

      <Sidebar />

      <div className="main">
        <div className="header-card">
          <div className="header-left">
            <img src="/logo.png" alt="logo" className="logo" />
            <div>
              <p style={{ margin: 0, fontSize: "20px", color: "#64748b" }}>
                Cybersecurity Vulnerability Insights
              </p>
            </div>
          </div>

          <div className="header-right">
            👤 Admin
          </div>
        </div>
        <div className="cards">

          <div className="card kpi blue">
            <h4>Total CVEs</h4>
            <h2>{totalCVEs}</h2>
          </div>

          <div className="card kpi green">
            <h4>Top Vendor</h4>
            <h2>{topVendor}</h2>
          </div>

          <div className="card kpi red">
            <h4>Ransomware Signals</h4>
            <h2>{ransomwareCount}</h2>
          </div>

        </div>

        <div className="card filter-card">
          <Filters onApply={setFilters} />
        </div>
        <div className="charts">

          <div className="card">
            <h4>📊 Top Vendors</h4>
            {vendors.length === 0 ? (
              <p className="status-text">No vendor data available</p>
            ) : (
              <TopVendorsChart data={vendors} />
            )}
          </div>

          <div className="card">
            <h4>Ransomware Usage</h4>
            {ransomware.length === 0 ? (
              <p className="status-text">No ransomware data available</p>
            ) : (
              <RansomwareChart data={ransomware} />
            )}
          </div>

        </div>
        <div className="card">
          <Table filters={filters} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;