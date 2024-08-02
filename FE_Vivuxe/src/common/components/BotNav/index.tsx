import "./style.css";
import VivuxeLogo from "../../../assets/VivuxeLogo.png";

const BotNav: React.FC = () => {
  return (
    <div className="vivu_layout">
      <div className="footer">
        <div className="m-container">
          <div className="logo">
            <img loading="lazy" alt="Vivuxe" src={VivuxeLogo} />
          </div>
          <p>
            Địa chỉ: Văn phòng VTI Lê Thanh Nghị, Quận Hai Bà Trưng, Hà Nội,
            Việt Nam.
          </p>
          <p>
            Tổng đài hỗ trợ: 1900 1234 (7AM - 10PM)
            <br />
            Mail: contact@vivuxe.vn
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotNav;
