import { Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./components/UI/filter/portfolio";
import Store from "./components/UI/layouts/store";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.filter} />}
        />
        <Route path={ROUTER_PATH.filter} element={<Portfolio />} />
        <Route path={ROUTER_PATH.layouts} element={<Store />} />
      </Route>
    </Routes>
  );
}

export default App;
