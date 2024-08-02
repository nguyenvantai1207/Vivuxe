/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from "react";
import "./CarDetail.scss";
import Features from "./Features";
import CarImage from "./CarImage";
import Modal from "./Modal";
import { DatePicker, GetProps } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import carService from "../../common/api/carService";
const transmission: any = { Automatic: "Số tự động", Manual: "Số sàn" };
const fuel: any = { Gasoline: "Xăng", Diesel: "Dầu Diesel" };

interface Car {
  carId: number;
  licensePlate: string;
  cost: number;
  createDate: string;
  address: string;
  make: string;
  model: string;
  seat: number;
  year: number;
  transmission: string;
  fuel: string;
  bluetooth: boolean;
  map: boolean;
  tireSensor: boolean;
  collisionSensor: boolean;
  speedWarning: boolean;
  truckCover: boolean;
  camera360: boolean;
  sideCamera: boolean;
  dashCamera: boolean;
  rearCamera: boolean;
  gps: boolean;
  childSeat: boolean;
  usb: boolean;
  spareTire: boolean;
  dvdScreen: boolean;
  etc: boolean;
  airbags: boolean;
  status: string;
  description: string;
  imageDTOS: ImageDTOS[];
}

interface ImageDTOS {
  carImagePath: string;
}

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState<Car>({} as Car);
  const [dates, setDates] = useState<any>();
  const [diff, setDiff] = useState<number>();

  // const [pickupDate, setPickupDate] = useState("2024-06-11T21:00");
  // const [returnDate, setReturnDate] = useState("2024-06-12T21:00");

  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;

  const disabledDate: RangePickerProps["disabledDate"] = (current: any) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  const onDatePicker = (dates: any, dateStrings: any) => {
    console.log("Selected Dates: ", dates);
    console.log("Formatted Selected Dates: ", dateStrings);
    setDates(dateStrings);
    const startDate = dayjs(dates[0]);
    const endDate = dayjs(dates[1]);
    const diff = endDate.diff(startDate, "day");
    setDiff(diff);
    console.log("diff:" + diff);
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getCarDetail = async () => {
    if (id) {
      try {
        const { data } = await carService.getCarById(Number(id));
        setCar(data);
      } catch (err) {
        toast.error("Error fetching rentals:");
      }
    }
  };

  useEffect(() => {
    getCarDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const imagesShow = car.imageDTOS?.slice(1, 4) ?? [];

  return (
    <div>
      <div className="car-gallery">
        <div className="car-gallery-main">
          <CarImage
            // src={`${window.location.origin}/newImages/${car?.imageDTOS[0].carImagePath}`}
            src={`${window.location.origin}/newImages/${
              car?.imageDTOS && car.imageDTOS.length > 0
                ? car.imageDTOS[0].carImagePath
                : ""
            }`}
            alt="Main car image"
          />
        </div>
        <div className="car-gallery-thumbnails">
          {imagesShow.map((item, index) => (
            <CarImage
              key={index}
              src={`${window.location.origin}/newImages/${item.carImagePath}`}
              alt={`Car thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="car-content">
        <div className="car-content-main">
          <p className="car-title">
            {car.make} {car.model}
          </p>
          <hr className="content_nav-hr" />
          <div className="content-section">
            <p className="content-section-title">Đặc điểm</p>
            <div className="list-characteristic">
              <div className="content-section-characteristic">
                <img src="/images/soghe.png" alt="" />
                <div className="characteristic-item">
                  <span>Số ghế</span>
                  <p>{car.seat}</p>
                </div>
              </div>
              <div className="content-section-characteristic">
                <img src="/images/manual-transmission.png" alt="" />
                <div className="characteristic-item">
                  <span>Truyền động</span>
                  <p>{transmission[car.transmission]}</p>
                </div>
              </div>
              <div className="content-section-characteristic">
                <img src="/images/car-oil.png" alt="" />
                <div className="characteristic-item">
                  <span>Nhiên liệu</span>
                  <p>{fuel[car.fuel]}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="content_nav-hr" />
          <div className="content-section">
            <p className="content-section-title">Mô tả</p>
            <p className="content-section-des">{car.description}</p>
          </div>
          <hr className="content_nav-hr" />
          <div className="content-section">
            <p className="content-section-title">Các tiện nghi khác</p>
            <Features car={car} />
          </div>
          <hr className="content_nav-hr" />
          <div className="content-section">
            <p className="content-section-title">Giấy tờ thuê xe</p>
            <div className="collateral-des">
              <span>Chọn 1 trong 2 hình thức</span>
              <p className="collateral-item first">
                1. GPLX (đối chiếu) & CCCD (đối chiếu VNeID)
              </p>
              <p className="collateral-item">
                2. GPLX (đối chiếu) & Passport (giữ lại){" "}
              </p>
            </div>
            <p className="content-section-title">Tài sản thế chấp</p>
            <div className="collateral-des">
              <p>
                15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe) hoặc Xe
                máy (kèm cà vẹt gốc) giá trị 15 triệu
              </p>
            </div>
          </div>
          <hr className="content_nav-hr" />
          <div className="content-section">
            <p className="content-section-title">Vị trí xe</p>
            <div className="address-detail">
              <img src="/images/address.png" alt="" />
              <p>{car.address}</p>
            </div>
            <p className="address-des">
              Địa chỉ cụ thể sẽ được hiển thị sau khi đặt cọc
            </p>
          </div>
        </div>
        <div className="car-content-right">
          <div className="item-info-right">
            <p className="price-detail">Thời gian thuê xe: </p>
            <form className="rental-form">
              <div className="date-section">
                <div className="date-box">
                  <RangePicker
                    disabledDate={disabledDate}
                    onChange={onDatePicker}
                  />
                </div>
              </div>
            </form>
            <hr className="info-right-hr" />
            <div className="total_money">
              <span>Đơn giá thuê</span>
              <span>{car.cost?.toLocaleString()} đ/ ngày</span>
            </div>
            <hr className="info-right-hr" />
            <div className="total_money">
              <p>Tổng cộng</p>
              <p>
                {diff
                  ? (car.cost * diff).toLocaleString()
                  : car.cost?.toLocaleString()}
                đ
              </p>
            </div>
            <div className="rent" onClick={handleOpenModal}>
              <p>CHỌN THUÊ</p>
            </div>
            {showModal ? (
              <Modal
                show={showModal}
                onClose={handleCloseModal}
                dates={dates}
                diff={diff}
              />
            ) : null}
          </div>
          <div className="item-info-right">
            <p className="surcharges">Phụ phí phát sinh</p>
            <div className="container-surcharges">
              <div className="item-surcharges">
                <img src="/images/information.png" alt="" />
                <div>
                  <p>Phí vượt giới hạn</p>
                  <span>
                    Phụ phí phát sinh nếu lộ trình di chuyển vượt quá 350km khi
                    thuê xe 1 ngày
                  </span>
                </div>
                <p className="price">5 000đ/km</p>
              </div>
              <div className="item-surcharges">
                <img src="/images/information.png" alt="" />
                <div>
                  <p>Phí quá giờ</p>
                  <span>
                    Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp trễ
                    quá 5 tiếng, phụ phí thêm 1 ngày thuê
                  </span>
                </div>
                <p className="price">100 000đ/h</p>
              </div>
              <div className="item-surcharges">
                <img src="/images/information.png" alt="" />
                <div>
                  <p>Phí vệ sinh</p>
                  <span>
                    Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh
                    (nhiều vết bẩn, bùn cát, sình lầy...)
                  </span>
                </div>
                <p className="price">100 000đ</p>
              </div>
              <div className="item-surcharges">
                <img src="/images/information.png" alt="" />
                <div>
                  <p>Phí khử mùi</p>
                  <span>
                    Phụ phí phát sinh khi xe hoàn trả bị ám mùi khó chịu (mùi
                    thuốc lá, thực phẩm nặng mùi...)
                  </span>
                </div>
                <p className="price">350 000đ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
