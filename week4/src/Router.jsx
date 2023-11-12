import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import MyPageInfo from "./components/MyPageInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />}>
          <Route path=":userId" element={<MyPageInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
