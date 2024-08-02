import "./style.scss";

import { CalendarOutlined, DollarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import rentalService from "../../common/api/rentalService";
import { useNavigate } from "react-router-dom";

const RentalPage: React.FC = () => {
  interface Rental {
    carResponse: CarResponse;
    rentalId: number;
    rentalDate: string;
    rentalReturn: string;
    rentalCost: number;
    image: string;
  }

  interface CarResponse {
    make: string;
    model: string;
    address: string;
    year: number;
    name: string;
    cost: number;
    imageDTOS: ImageDTOS[];
  }

  interface ImageDTOS {
    carImagePath: string;
  }

  const size = 8;
  const [page, setPage] = useState(1);
  const [allRentals, setAllRentals] = useState<Rental[]>([]);
  const nav = useNavigate();

  const fetchRental = async () => {
    try {
      const response = await rentalService.getRental(page, size);
      const { content } = response.data;
      console.log(content);
      setAllRentals(content);
    } catch (err) {
      console.error("Error fetching rentals:", err);
    }
  };

  useEffect(() => {
    fetchRental();
  }, [page]);

  return (
    <div className="trip-grid">
      <h1>Chuyến của tôi</h1>
      {allRentals.map((rental) => (
        <div
          key={rental.rentalId}
          className="rental-card"
          onClick={() => nav(`/rental/${rental.rentalId}`)}
        >
          <div className="rental-image">
            <img
              src={`${window.location.origin}/newImages/${rental.carResponse?.imageDTOS[0].carImagePath}`}
              alt=""
            />
          </div>
          <div className="rental-info">
            <h3>
              {rental.carResponse.make} {rental.carResponse.model}{" "}
              {rental.carResponse.year}
            </h3>
            <div className="row">
              <CalendarOutlined />
              <p className="info">Bắt đầu: {rental.rentalDate}</p>
            </div>
            <div className="row">
              <CalendarOutlined />
              <p className="info">Kết thúc: {rental.rentalReturn}</p>
            </div>
            <div className="row">
              <DollarOutlined />
              <p className="info">
                Tổng tiền: {rental.rentalCost.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalPage;
