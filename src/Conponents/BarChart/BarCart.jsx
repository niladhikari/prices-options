import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";
// Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
const BarCart = () => {
  const subjectMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 80 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 90 },
    { id: 5, name: "Emma", physics: 70, chemistry: 75, math: 68 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 97 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 85 },
    { id: 8, name: "Hannah", physics: 79, chemistry: 83, math: 77 },
    { id: 9, name: "Ian", physics: 87, chemistry: 89, math: 84 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 92 },
  ];
  return (
    <div className="m-6">
      <BarChart
        width={800}
        height={400}
        data={subjectMarksData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="physics" fill="#8884d8" minPointSize={5}>
        </Bar>
        <Bar dataKey="math" fill="#82ca9d" minPointSize={10} />
      </BarChart>
    </div>
  );
};

export default BarCart;
