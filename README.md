# Production Dashboard

A React + Redux dashboard for monitoring resin drying processes.  
This project demonstrates a modern front-end stack including **ReactJS**, **Redux Toolkit**, **Material-UI**, **Recharts**, **Formik**, and **Axios**.

---

## 🛠 Features

- **Dynamic data fetching** from a fake API (`mocki.io`)  
- **Interactive KPI dashboard** with bar charts and tables  
- **Filter and search** by product name  
- **Add new production records** via a form with validation  
- **State management** using Redux Toolkit  
- **Responsive design** with Material-UI  

---

## 📂 Project Structure

production-dashboard/
├── package.json
├── public/
├── src/
│ ├── app/
│ │ └── store.js
│ ├── components/
│ │ ├── DataTable.js
│ │ ├── FilterBar.js
│ │ └── ProductionForm.js
│ ├── features/
│ │ └── kpis/
│ │ ├── kpiSlice.js
│ │ └── KpiDashboard.js
│ ├── App.js
│ └── index.js


---

## ⚡ Technologies Used

- **ReactJS** – Front-end library for building UI components  
- **Redux Toolkit** – State management  
- **Material-UI (MUI)** – UI components and styling  
- **Recharts** – Charting library for visual KPI representation  
- **Formik & Yup** – Form handling and validation  
- **Axios** – HTTP client for API requests  

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone git@github.com:rodAlm08/production_dashboard.git
cd production_dashboard

2. Install dependencies:

npm install


3. Start the development server:

npm start


The app will run on http://localhost:3000


🔗 API

This project uses a fake API for demonstration purposes:
https://mocki.io/v1/07f9a4df-c652-4c54-a0c1-d520eb8f7423