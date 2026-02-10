import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
);

interface Props {
  data: { month: string; orders: number }[];
}

const OrdersChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: "Orders",
        data: data.map((d) => d.orders),
        backgroundColor: "rgb(59,130,246)",
      },
    ],
  };
  return <Bar data={chartData} />;
};

export default OrdersChart;
