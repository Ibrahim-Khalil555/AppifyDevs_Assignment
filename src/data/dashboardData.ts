export interface RevenueItem {
  date: string; 
  revenue: number;
}

export interface OrdersItem {
  date: string;
  orders: number;
}

export interface UserItem {
  type: "free" | "premium" | "enterprise";
  value: number;
}

const today = new Date();

function formatDate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export const revenueData: RevenueItem[] = [];
export const ordersData: OrdersItem[] = [];

for (let i = 0; i < 365; i++) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);

  revenueData.push({
    date: formatDate(date),
    revenue: Math.floor(Math.random() * 500 + 100), 
  });

  ordersData.push({
    date: formatDate(date),
    orders: Math.floor(Math.random() * 10 + 1), 
  });
}

export const usersData: UserItem[] = [
  { type: "free", value: 700 },
  { type: "premium", value: 400 },
  { type: "enterprise", value: 145 },
];

export const statsData = {
  totalRevenue: revenueData.reduce((acc, r) => acc + r.revenue, 0),
  totalUsers: usersData.reduce((acc, u) => acc + u.value, 0),
  orders: ordersData.reduce((acc, o) => acc + o.orders, 0),
  conversionRate: 4.3,
  growth: {
    revenue: 12,
    users: -5,
    orders: 8,
    conversion: -2,
  },
};
