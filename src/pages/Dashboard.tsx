import { useMemo } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/kpi/KPICard";
import RevenueChart from "../components/charts/RevenueChart";
import OrdersChart from "../components/charts/OrdersChart";
import UsersChart from "../components/charts/UsersChart";
import FilterBar from "../components/filters/FilterBar";
import type { RootState } from "../redux/store";
import {
  revenueData,
  ordersData,
  usersData,
  statsData,
} from "../data/dashboardData";

const Dashboard = () => {
  const { dateRange, userType } = useSelector(
    (state: RootState) => state.filter,
  );

  const filteredUsers = useMemo(() => {
    if (userType === "all") return usersData;
    return usersData.filter((u) => u.type === userType);
  }, [userType]);

  const totalFilteredUsers = filteredUsers.reduce((acc, u) => acc + u.value, 0);

  const filteredRevenue = useMemo(() => {
    const now = new Date();
    let startDate: Date;

    if (dateRange === "last7days") {
      startDate = new Date();
      startDate.setDate(now.getDate() - 6);
    } else if (dateRange === "last30days") {
      startDate = new Date();
      startDate.setDate(now.getDate() - 29);
    } else {
      startDate = new Date();
      startDate.setFullYear(now.getFullYear() - 1);
    }

    return revenueData
      .filter((r) => new Date(r.date) >= startDate && new Date(r.date) <= now)
      .map((r) => ({
        month: r.date,
        revenue: Math.round(
          r.revenue * (totalFilteredUsers / statsData.totalUsers),
        ),
      }));
  }, [dateRange, totalFilteredUsers]);

  const filteredOrders = useMemo(() => {
    const now = new Date();
    let startDate: Date;

    if (dateRange === "last7days") {
      startDate = new Date();
      startDate.setDate(now.getDate() - 6);
    } else if (dateRange === "last30days") {
      startDate = new Date();
      startDate.setDate(now.getDate() - 29);
    } else {
      startDate = new Date();
      startDate.setFullYear(now.getFullYear() - 1);
    }

    return ordersData
      .filter((o) => new Date(o.date) >= startDate && new Date(o.date) <= now)
      .map((o) => ({
        month: o.date,
        orders: Math.round(
          o.orders * (totalFilteredUsers / statsData.totalUsers),
        ),
      }));
  }, [dateRange, totalFilteredUsers]);

  const filteredStats = useMemo(() => {
    const totalRevenue = filteredRevenue.reduce((acc, r) => acc + r.revenue, 0);
    const totalOrders = filteredOrders.reduce((acc, o) => acc + o.orders, 0);

    return {
      totalRevenue,
      totalUsers: totalFilteredUsers,
      orders: totalOrders,
      conversionRate: statsData.conversionRate,
      growth: statsData.growth,
    };
  }, [filteredRevenue, filteredOrders, totalFilteredUsers]);

  return (
    <DashboardLayout>
      <FilterBar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <KPICard
          title="Revenue"
          value={filteredStats.totalRevenue}
          growth={filteredStats.growth.revenue}
        />
        <KPICard
          title="Users"
          value={filteredStats.totalUsers}
          growth={filteredStats.growth.users}
        />
        <KPICard
          title="Orders"
          value={filteredStats.orders}
          growth={filteredStats.growth.orders}
        />
        <KPICard
          title="Conversion"
          value={filteredStats.conversionRate}
          growth={filteredStats.growth.conversion}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <RevenueChart data={filteredRevenue} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <OrdersChart data={filteredOrders} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <UsersChart data={filteredUsers} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
