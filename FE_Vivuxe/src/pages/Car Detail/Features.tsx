import "./Features.scss";
import { Car } from "../carRegister";

interface Feature {
  icon: string;
  title: string;
  id: keyof Car;
}

const features: Feature[] = [
  { icon: "/images/map-icon.png", title: "Bản đồ", id: "map" },
  { icon: "/images/bluetooth-icon.png", title: "Bluetooth", id: "bluetooth" },

  { icon: "/images/camera360.png", title: "Camera 360", id: "camera360" },
  {
    icon: "/images/sidecamera.png",
    title: "Camera cập lề",
    id: "sideCamera",
  },
  {
    icon: "/images/dashcam-icon.png",
    title: "Camera hành trình",
    id: "dashCamera",
  },
  { icon: "/images/video-camera.png", title: "Camera lùi", id: "rearCamera" },
  {
    icon: "/images/tire-pressure.png",
    title: "Cảm biến lốp",
    id: "tireSensor",
  },
  {
    icon: "/images/sensor.png",
    title: "Cảm biến va chạm",
    id: "collisionSensor",
  },
  {
    icon: "/images/high-speed.png",
    title: "Cảnh báo tốc độ",
    id: "speedWarning",
  },
  { icon: "/images/gps-icon.png", title: "Định vị GPS", id: "gps" },
  { icon: "/images/baby.png", title: "Ghế trẻ em", id: "childSeat" },
  { icon: "/images/usb-icon.png", title: "Khe cắm USB", id: "usb" },
  {
    icon: "/images/spare-tire.png",
    title: "Lốp dự phòng",
    id: "spareTire",
  },
  { icon: "/images/dvd-player.png", title: "Màn hình DVD", id: "dvdScreen" },
  {
    icon: "/images/pickup-truck.png",
    title: "Lắp thùng xe bán tải",
    id: "truckCover",
  },
  { icon: "/images/etc-icon.png", title: "ETC", id: "etc" },
  { icon: "/images/airbag-icon.png", title: "Túi khí an toàn", id: "airbags" },
];

const Features = ({ car }: { car: Car }) => {
  return (
    <div className="features">
      {features.map(
        (feature, index) =>
          car[feature.id] && (
            <div className="feature" key={index}>
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon"
              />
              <p className="feature-title">{feature.title}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Features;
