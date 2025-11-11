import { Navigate, Route, Routes } from "react-router";
import Layout from "./Layout";
import RegistrationForm from "@/entities/Auth/ui/RegistrationForm";
import LoginForm from "@/entities/Auth/ui/LoginForm";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import Feed from "@/pages/Feed";
import RedirectIfAuthenticated from "@/shared/lib/RedirectIfAuthenticated";
import ProtectedRoute from "@/shared/lib/ProtectedRoute";
import ArticleList from "@/entities/Article/ui/ArticleList";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/Home" replace />} />
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/Registration" element={<RegistrationForm />} />
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
