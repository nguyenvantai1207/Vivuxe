import "./style.scss";
import VivuxeLogo from "../../../assets/VivuxeLogo.png";
import { Button, Dropdown } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../helpers";
import LoginModal from "../../../pages/Homepage/modal/LoginModal";
import SignupModal from "../../../pages/Homepage/modal/SignupModal";

const TopNav: React.FC = () => {
  const nav = useNavigate();

  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const userInfo = localStorage.getItem("username");

  const handleLogoutClicked = () => {
    logOut();
    nav("/");
  };

  const items = [
    {
      key: "1",
      label: "My profile",
      onClick: () => nav("/user"),
    },
    {
      key: "2",
      label: "Đăng xuất",
      onClick: handleLogoutClicked,
    },
  ];

  return (
    <div className="vivu_layout">
      <div className="header">
        <div className="m_container">
          <a href="/" className="logo_container">
            <div className="full_logo">
              <img loading="lazy" alt="Vivuxe" src={VivuxeLogo} />
            </div>
          </a>
          <div className="menu_container">
            <a href="/#">Về VivuXe </a>
            <div className="vertical_line"></div>
            {userInfo ? (
              <div className="user-info" style={{ cursor: "pointer" }}>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <span>Xin chào {userInfo}</span>
                </Dropdown>
              </div>
            ) : (
              <>
                <div>
                  <Button type="primary" onClick={() => setSignupVisible(true)}>
                    Đăng ký
                  </Button>
                  <SignupModal
                    visible={signupVisible}
                    onClose={() => setSignupVisible(false)}
                  />
                </div>
                <div>
                  <Button type="primary" onClick={() => setLoginVisible(true)}>
                    Đăng nhập
                  </Button>
                  <LoginModal
                    visible={loginVisible}
                    onClose={() => setLoginVisible(false)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
