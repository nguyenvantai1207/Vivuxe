import "./ProfileUpdateModal.scss";

import { Modal, Form, Input, Button, DatePicker, Select } from "antd";
import { toast } from "react-toastify";
import userService from "../../../../common/api/userService";
import { User } from "../..";
import { useEffect } from "react";
// import { formatDate } from "../../../../common/helpers";
import dayjs from "dayjs";
import { formatDate } from "../../../../common/helpers";

interface ProfileUpdateModalProps {
  visible: boolean;
  onClose: () => void;
  fetchUser: () => void;
  user: User;
}

const ProfileUpdateModal: React.FC<ProfileUpdateModalProps> = ({
  visible,
  onClose,
  fetchUser,
  user,
}) => {
  const [form] = Form.useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profileUpdate = async (values: any) => {
    try {
      values.dob = formatDate(values.dob, "YYYY-MM-DD");
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
        console.log(key);
        console.log(values[key]);
      }
      console.log(formData);

      await userService.updateUser(formData);

      fetchUser();
      toast.success("Update thanh cong");
      onClose();
    } catch (error) {
      toast.error("Update that bai");
    }
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((formData) => {
        profileUpdate(formData);
        form.resetFields();
      })
      .catch((error) => {
        console.error("Validation failed:", error);
      });
  };

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      form.setFieldsValue({
        ...user,
        dob: dayjs(user.dob),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Modal
      title="Cập nhật thông tin"
      open={visible}
      onCancel={onClose}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Cập nhật
        </Button>
      }
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="fullName"
          label="Họ và tên"
          rules={[
            {
              required: false,
              message: "Hãy nhập họ và tên!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dob"
          label="Ngày sinh"
          rules={[{ required: true, message: "Hãy nhập ngày sinh của bạn!" }]}
        >
          <DatePicker
            format={"DD/MM/YYYY"}
            placeholder="Hãy nhập ngày sinh của bạn!"
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Giới tính"
          rules={[{ required: true, message: "Hãy nhập giới tính của bạn!" }]}
        >
          <Select allowClear>
            <option value="Male">Nam</option>
            <option value="Female">Nữ</option>
            <option value="Other">Khác</option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[
            { required: true, message: "Hãy nhập số điện thoại của bạn!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
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

        <Form.Item
          name="driverLicense"
          label="Số GPLX"
          rules={[{ required: true, message: "Hãy nhập số GPLX của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="bankName"
          label="Ngân hàng"
          rules={[{ required: true, message: "Hãy nhập tên ngân hàng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="accountNumber"
          label="Số tài khoản"
          rules={[{ required: true, message: "Hãy nhập số tài khoản!" }]}
        >
          <Input />
        </Form.Item>

        <br />
      </Form>
    </Modal>
  );
};

export default ProfileUpdateModal;
