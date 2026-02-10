# Analytics Dashboard

A **responsive, production-ready Admin Analytics Dashboard** built with **React.js, TypeScript, Tailwind CSS, and Chart.js**.  
The dashboard visualizes business data using **KPI cards, charts, and filters**, demonstrating **modern UI/UX practices**.

---

## Setup Instructions

1. **Clone the repository**
   git clone <your-repo-url>
   cd analytics-dashboard
   npm install
   npm run dev

---

## Tech Stack

- **Framework:** React.js + TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Chart.js
- **State Management:** Redux Toolkit
- **Data:** Static JSON file (Option A - Basic)
- **API Calls:** Axios (for future extensibility)

**Additional Libraries:**

- `react-icons` for icons

---

## Architecture Decisions

- **Functional Components:** Easy to read, simple and beginner-friendly.

- **Redux for State:**

Filter values (dateRange, userType).

Dynamic dashboard data (KPICards & charts).

- **Tailwind CSS:** Utility-first styling for clean layout & responsiveness.

- **Chart.js:** Flexible charts with dynamic data.

- **Static JSON:** Option A used for simplicity.

- **Responsive Layout:**

Sidebar collapses on mobile.

Charts stack vertically on small screens

---

## Assumptions

Dashboard consumes static JSON instead of real backend API.

No authentication here.

Data filters update both charts and KPI cards.

---

## Deployed Link

- **Live Link:** []

---
