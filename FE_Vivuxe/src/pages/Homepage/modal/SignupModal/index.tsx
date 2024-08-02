import "./style.scss";

import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { toast } from "react-toastify";
import authService from "../../../../common/api/authService";

interface SignupModalProps {
  visible: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  const signUp = async (values: any) => {
    try {
      await authService.signUp(values);
      toast.success("Dang ky thanh cong");
      onClose();
    } catch (error) {
      toast.error("Dang ky that bai");
    }
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        signUp(values);
        console.log(values);
        form.resetFields();
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  return (
    <Modal
      title="Đăng ký"
      open={visible}
      onCancel={onClose}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Đăng ký
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit}>
        <p>Tên đăng nhập: </p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên đăng nhập!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p>Phone Number: </p>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Hãy nhập số điện thoại của bạn!" },
          ]}
        >
          <Input />
        </Form.Item>

        <p>E-mail:</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Không đúng định dạng email!",
            },
            {
              required: true,
              message: "Hãy nhập email của bạn!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <p>Mật khẩu: </p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Hãy nhập mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <p>Confirm Password:</p>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Hãy nhập lại mật khẩu của bạn!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Mật khẩu bạn nhập lại không khớp với mật khẩu trên!"
                  )
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <br />
      </Form>
    </Modal>
  );
};

export default SignupModal;
