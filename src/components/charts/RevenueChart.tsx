import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

interface Props {
  data: { month: string; revenue: number }[];
}

const RevenueChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Revenue",
        data: data.map((d) => d.revenue),
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.2)",
      },
    ],
  };
  return <Line data={chartData} />;
};

export default RevenueChart;
