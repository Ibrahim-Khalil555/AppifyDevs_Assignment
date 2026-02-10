import { FaHome, FaChartBar, FaCog } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:shadow-none
        `}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
          <nav className="flex flex-col gap-4">
            <button className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors">
              <FaHome /> Home
            </button>

            <button className="cursor-pointer flex items-center gap-2 text-blue-600 font-semibold">
              <FaChartBar /> Analytics
            </button>

            <button className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors">
              <FaCog /> Settings
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
