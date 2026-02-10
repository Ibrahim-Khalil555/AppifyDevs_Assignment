import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

interface Props {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: Props) => {
  return (
    <header className="flex items-center justify-between bg-white shadow p-4">
      <button
        className="cursor-pointer text-xl md:hidden mr-2"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <h2 className="text-xl font-semibold">Analytics Dashboard</h2>

      <div className="flex items-center gap-4">
        <FaBell className="text-xl cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
