import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import authRoutes from "./authRoutes";
import profileRoutes from "./profileRoutes";
import homeRoutes from "./homeRoutes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/Home" replace />} />
        {homeRoutes}
        {authRoutes}
        {profileRoutes}
      </Route>
    </Routes>
  );
};

export default Routing;
