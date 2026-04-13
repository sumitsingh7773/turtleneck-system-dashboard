function Charts({ vendors, ransomware }) {
  if (!vendors?.length && !ransomware?.length) {
    return (
      <div className="card">
        <p>No chart data available</p>
      </div>
    );
  }

  return (
    <div className="charts">

      <div className="card" style={{ flex: 2 }}>
        <h3>📊 Top Vendors</h3>
        {vendors?.length ? (
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Showing vendor distribution
          </p>
        ) : (
          <p>No vendor data</p>
        )}
      </div>

      <div className="card" style={{ flex: 1 }}>
        <h3>Ransomware</h3>
        {ransomware?.length ? (
          <p style={{ fontSize: "14px", color: "#64748b" }}>
            Ransomware usage insights
          </p>
        ) : (
          <p>No ransomware data</p>
        )}
      </div>

    </div>
  );
}

export default Charts;