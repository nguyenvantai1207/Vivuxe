/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState, useEffect } from "react";
import {
  UserOutlined,
  CarOutlined,
  LockOutlined,
  LogoutOutlined,
  RestOutlined,
  ScheduleOutlined,
  FormOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "/user", icon: <UserOutlined />, label: "Tài khoản của tôi" },
  {
    key: "sub1",
    label: "Xe của tôi",
    icon: <CarOutlined />,
    children: [
      { key: "2", icon: <CarOutlined />, label: "Danh sách xe" },
      { key: "3", icon: <MoneyCollectOutlined />, label: "Ví của tôi" },
      { key: "/car/register", icon: <FormOutlined />, label: "Đăng ký xe" },
    ],
  },
  { key: "/user/rental", icon: <ScheduleOutlined />, label: "Chuyến của tôi" },
  { key: "6", icon: <LockOutlined />, label: "Đổi mật khẩu" },
  { key: "7", icon: <RestOutlined />, label: "Yêu cầu xoá tài khoản" },
  { key: "8", icon: <LogoutOutlined />, label: "Đăng xuất" },
];

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleMenuClick = (info: any) => {
    navigate(info.key);
  };
  return (
    <div className="main-container">
      <div className="menu-container">
        <div className="menu-content">
          <Menu
            style={{ backgroundColor: "#e0f4ff" }}
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
