import "./Userpage.scss";
import { useState, useEffect } from "react";
import { FormOutlined } from "@ant-design/icons";
import { Card, Form, Button, Input, Row, Col } from "antd";
import Goma from "../../assets/Goma.jpg";
import ProfileUpdateModal from "../../pages/userpage/modal/profileUpdateModal";
import userService from "../../common/api/userService";
import { toast } from "react-toastify";
import { formatDate, getUserId } from "../../common/helpers";

export interface User {
  userId: number;
  username: string;
  fullName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  driverLicense: string;
  createDate: string;
}

const Userpage = () => {
  const userId = getUserId();
  const [profileUpdateVisible, setProfileUpdateVisible] = useState(false);
  const [user, setUser] = useState<User>({} as User);

  const fetchUser = async () => {
    if (userId) {
      try {
        const { data } = await userService.getUserById(userId);
        setUser(data);
        console.log(data);
      } catch (err) {
        toast.error("Error fetching rentals:");
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="info-container">
      <div className="info-card">
        <Card style={{ width: 850, height: 350 }}>
          <div className="info-left">
            <h2>
              Thông tin tài khoản{" "}
              <span>
                <Button
                  type="primary"
                  onClick={() => setProfileUpdateVisible(true)}
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    marginLeft: "250px",
                    border: "1px solid black",
                  }}
                >
                  Chỉnh sửa
                  <FormOutlined />
                </Button>
                <ProfileUpdateModal
                  visible={profileUpdateVisible}
                  onClose={() => setProfileUpdateVisible(false)}
                  fetchUser={fetchUser}
                  user={user}
                />
              </span>
            </h2>
            <br />
            <img
              src={Goma}
              alt="Goma"
              style={{
                width: "100px",
                borderRadius: "50px",
                marginLeft: "50px",
              }}
            />
            <br />
            <br />
            <p style={{ fontSize: "25px", marginLeft: "60px" }}>
              {user.username}
            </p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Tham gia ngày: {formatDate(user.createDate)}
            </p>
          </div>

          <div className="info-right">
            <br />
            <Card
              key={user.userId}
              className="user-info"
              style={{
                backgroundColor: "#D9D9D9",
              }}
            >
              <Row>
                <Col span={8}>Họ và tên:</Col>
                <Col span={16}>{user.fullName}</Col>
                <Col span={8}>Ngày sinh:</Col>
                <Col span={16}>{formatDate(user.dob)}</Col>
                <Col span={8}>Giới tính:</Col>
                <Col span={16}>{user.gender}</Col>
                <Col span={8}>Số điện thoại:</Col>
                <Col span={16}>{user.phone}</Col>
                <Col span={8}>Email:</Col>
                <Col span={16}>{user.email}</Col>
                <Col span={8}>Số GPLX:</Col>
                <Col span={16}>{user.driverLicense}</Col>
              </Row>
            </Card>
          </div>
        </Card>
      </div>

      <div className="change-pass-card">
        <Card style={{ width: 850, height: 380 }}>
          <div className="change-pass-card-info">
            <div className="change-pass-title">
              <h2 className="change-pass-title">Đổi mật khẩu</h2>
            </div>

            <div className="change-pass-input">
              <Form className="change-pass-form" onFinish={onFinish}>
                <p>Mật khẩu hiện tại</p>
                <Form.Item
                  name="now-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy điền vào mật khẩu hiện tại!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <p>Mật khẩu mới</p>
                <Form.Item
                  name="new-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy điền mật khẩu mới vào!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <p>Xác nhận mật khẩu mới</p>
                <Form.Item
                  name="reinput-pass"
                  rules={[
                    {
                      required: true,
                      message: "Xin hãy nhập lại mật khẩu mới!",
                    },
                  ]}
                >
                  <Input className="input-passChange" />
                </Form.Item>

                <Form.Item>
                  <div className="subbmit-button-container">
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="submit-button"
                    >
                      Xác nhận
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Userpage;
