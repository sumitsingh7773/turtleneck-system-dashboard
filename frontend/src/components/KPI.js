function KPI({ title, value }) {
  return (
    <div className="card" style={{ flex: 1 }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default KPI;