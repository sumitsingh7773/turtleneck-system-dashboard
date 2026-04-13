function Header() {
  return (
    <div className="header-card">
      <div className="header-left">
        <img src="/logo.png" alt="logo" className="logo" />

        <div>
          <h2 style={{ margin: 0 }}>TurtleNeck Dashboard</h2>
          <p style={{ margin: 0, fontSize: "13px", color: "#64748b" }}>
            Cybersecurity Vulnerability Insights
          </p>
        </div>
      </div>
      <div className="header-right">
        <div style={{
          background: "#e2e8f0",
          padding: "6px 12px",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "500"
        }}>
          👤 Admin
        </div>
      </div>

    </div>
  );
}

export default Header;