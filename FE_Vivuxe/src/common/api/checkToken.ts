import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckToken: React.FC = () => {
  const nav = useNavigate();

  const isTokenExpired = (): boolean => {
    const tokenExpiry = localStorage.getItem('tokenExpiry');
    if (!tokenExpiry) {
      return true;
    }
    const expiryTime = parseInt(tokenExpiry, 10);
    return Date.now() >= expiryTime;
  };

  const logout = () => {
    // Xóa token và thông tin liên quan khỏi localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiry');
    
    nav("/"); // Navigate to the home page
    toast.success("Đăng xuất thành công"); // Toast success message
  };

  // Effect to check token expiration on component mount
  useEffect(() => {
    if (isTokenExpired()) {
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on component mount

  return null; // or replace with your preferred component structure
};

export default CheckToken;