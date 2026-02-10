import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Props {
  title: string;
  value: number;
  growth: number;
}

const KPICard = ({ title, value, growth }: Props) => {
  const isPositive = growth >= 0;
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-start">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span
        className={
          isPositive
            ? "text-green-500 flex items-center gap-1"
            : "text-red-500 flex items-center gap-1"
        }
      >
        {isPositive ? <FaArrowUp /> : <FaArrowDown />} {Math.abs(growth)}%
      </span>
    </div>
  );
};

export default KPICard;
