import { useEffect, useState, useCallback } from "react";
import API from "../services/api";

function Table({ filters }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setPage(1);
  }, [filters]);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      let url = `/vulnerabilities/filter?page=${page}&limit=10`;

      if (filters?.vendor) url += `&vendor=${filters.vendor}`;
      if (filters?.product) url += `&product=${filters.product}`;
      if (filters?.ransomware) url += `&ransomware=${filters.ransomware}`;

      const res = await API.get(url);

      setData(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data");
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [page, filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const getBadgeClass = (value) => {
    if (!value) return "unknown";
    return value.toLowerCase().includes("known") ? "known" : "unknown";
  };

  return (
    <div className="card table-card">
      <h3>📋 Vulnerabilities</h3>
      {loading && <p className="status-text">Loading...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && data.length === 0 && !error && (
        <p className="status-text">No data found</p>
      )}
      {!loading && data.length > 0 && (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>CVE</th>
                  <th>Vendor</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Due</th>
                  <th>Ransomware</th>
                </tr>
              </thead>

              <tbody>
                {data.map((v) => (
                  <tr key={v._id}>
                    <td className="cve">{v.cveID}</td>
                    <td>{v.vendorProject}</td>
                    <td>{v.product}</td>
                    <td className="truncate">
                      {v.vulnerabilityName}
                    </td>

                    <td>
                      {v.dateAdded
                        ? new Date(v.dateAdded).toLocaleDateString()
                        : "-"}
                    </td>

                    <td>
                      {v.dueDate
                        ? new Date(v.dueDate).toLocaleDateString()
                        : "-"}
                    </td>
                    <td>
                      <span
                        className={`badge ${getBadgeClass(
                          v.knownRansomwareCampaignUse
                        )}`}
                      >
                        {v.knownRansomwareCampaignUse || "Unknown"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              ⬅ Prev
            </button>

            <span className="page-number">Page {page}</span>

            <button
              disabled={data.length < 10}
              onClick={() => setPage((p) => p + 1)}
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Table;