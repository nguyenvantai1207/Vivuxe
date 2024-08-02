import React from "react";
import { Modal, Form, Input, Button } from "antd";
import "./style.scss";
import { toast } from "react-toastify";
import authService from "../../../../common/api/authService";

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async ({ username, password }: any) => {
    try {
      const loginResponse = await authService.login(username, password);
      const data = loginResponse.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username);
      localStorage.setItem("userId", data.userId);
      toast.success("Dang nhap thanh cong");
      onClose();
    } catch (error) {
      toast.error("Dang nhap that bai, Hay thu lai");
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        login(values);
        form.resetFields();
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      form.submit();
    }
  };

  return (
    <Modal
      title="Đăng nhập"
      open={visible}
      onCancel={handleCancel}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Đăng nhập
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit}>
        <p>Tên đăng nhập</p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy điền tên đăng nhập vào!",
            },
          ]}
        >
          <Input onKeyPress={handleKeyPress} />
        </Form.Item>

        <p>Mật khẩu</p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy điền mật khẩu vào!",
            },
          ]}
        >
          <Input.Password onKeyPress={handleKeyPress} />
        </Form.Item>
        <br />
      </Form>
    </Modal>
  );
};

export default LoginModal;
