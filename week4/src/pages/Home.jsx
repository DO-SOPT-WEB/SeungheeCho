import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();

  const btnInfo = [
    {
      name: "로그인하러 가기",
      clickAction: function () {
        navigate("/login");
      },
    },
  ];

  return (
    <div>
      <Layout title="33th SOPT" buttons={Buttons(btnInfo)} />
    </div>
  );
};

export default Home;
