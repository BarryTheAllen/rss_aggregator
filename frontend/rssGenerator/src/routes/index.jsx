import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import Registration from "@/pages/Authorization/Registration";
import Login from "@/pages/Authorization/Login";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import Feed from "@/pages/Feed";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Profiile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Routing;
