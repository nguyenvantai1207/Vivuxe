import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface AuthRenderProps {
  render: () => JSX.Element;
}

const AuthRender: React.FC<AuthRenderProps> = ({ render }) => {
  const nav = useNavigate();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem("token");
    if (!tokenFromLocalStorage) {
      nav("/");
    }
  }, []);

  return render();
};

export default AuthRender;
