import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
function RansomwareChart({ data }) {
  const COLORS = ["#22c55e", "#facc15", "#ef4444", "#3b82f6", "#a855f7"];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="count"
          nameKey="_id"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default RansomwareChart;