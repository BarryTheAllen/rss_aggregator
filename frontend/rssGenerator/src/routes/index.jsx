import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import Registration from "@/pages/Authorization/Registration";
import Login from "@/pages/Authorization/Login";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import Feed from "@/pages/Feed";
import RedirectIfAuthenticated from "@/shared/lib/RedirectIfAuthenticated";
import ProtectedRoute from "@/shared/lib/ProtectedRoute";
import ArticleList from "@/features/ArticlesList/ui/ArticleList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/Home" replace />} />
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/Feed" element={<Feed />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default Routing;
