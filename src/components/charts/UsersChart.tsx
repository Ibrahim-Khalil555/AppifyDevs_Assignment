import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface Props {
  data: { type: string; value: number }[];
}

const UsersChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.type),
    datasets: [
      {
        label: "Users",
        data: data.map((d) => d.value),
        backgroundColor: ["#10B981", "#3B82F6", "#F59E0B"],
      },
    ],
  };
  return <Pie data={chartData} />;
};

export default UsersChart;
