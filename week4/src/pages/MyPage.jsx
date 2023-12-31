import Layout from "../components/Layout";
import { Outlet, useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";

// 마이페이지 컴포넌트 (페이지)
const MyPage = () => {
  const navigate = useNavigate();

  const btnInfo = [
    {
      name: "로그아웃",
      clickAction: function () {
        navigate("/login");
      },
    },
  ];

  return (
    <Layout title="MY PAGE" buttons={Buttons(btnInfo)}>
      <Outlet />
    </Layout>
  );
};

export default MyPage;
