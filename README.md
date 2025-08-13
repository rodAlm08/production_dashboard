# Production Dashboard

A React + Redux dashboard for monitoring resin drying processes.  
This project demonstrates a modern front-end stack including ReactJS, Redux Toolkit, Material-UI, Recharts, Formik, and Axios.

## 🛠 Features

- Dynamic data fetching from a fake API (mocki.io)  
- Interactive KPI dashboard with bar charts and tables  
- Filter and search by product name  
- Add new production records via a form with validation  
- State management using Redux Toolkit  
- Responsive design with Material-UI  

## 📂 Project Structure

```text
production-dashboard/
├── package.json
├── public/
└── src/
    ├── app/
    │   └── store.js
    ├── components/
    │   ├── DataTable.js
    │   ├── FilterBar.js
    │   └── ProductionForm.js
    ├── features/
    │   └── kpis/
    │       ├── kpiSlice.js
    │       └── KpiDashboard.js
    ├── App.js
    └── index.js
```

## ⚡ Technologies Used

ReactJS – Front-end library for building UI components

Redux Toolkit – State management

Material-UI (MUI) – UI components and styling

Recharts – Charting library for visual KPI representation

Formik & Yup – Form handling and validation

Axios – HTTP client for API requests

## 🔗 API

This project uses a fake API for demonstration purposes:
https://mocki.io/v1/07f9a4df-c652-4c54-a0c1-d520eb8f7423

## Redux Toolkit:

createSlice was used to define the kpis slice with state, reducers, and async thunks.

createAsyncThunk fetches data from the API and automatically handles loading and error states.

Store configuration:

configureStore from Redux Toolkit sets up the global store.

The store is provided to the app using <Provider> from react-redux.

Component usage:

useSelector to read state (KPI data, filters).

useDispatch to trigger actions like fetching KPIs or setting filters.

“When the app loads, fetchKpis async thunk fetches KPI data from the API and stores it in the Redux slice. The KpiDashboard component uses useSelector to get the KPI data and render charts. When a user types in the filter input, setFilter is dispatched, updating Redux state, which automatically updates the filtered chart and table without manually passing props.”