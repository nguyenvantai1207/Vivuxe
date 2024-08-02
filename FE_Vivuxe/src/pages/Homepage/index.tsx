import React, { useEffect, useState } from "react";
import SearchBox from "../../common/components/ImageBox/seachBox";
import { Space } from "antd";
import "./Homepage.scss";
import { Card } from "antd";
import TPHCM from "../../assets/TPHCM.jpg";
import Hoguom from "../../assets/Hoguom.jpg";
import Bana from "../../assets/Bana.jpg";
import Cantho from "../../assets/Cantho.jpg";
import TanSonNhat from "../../assets/TanSonNhat.webp";
import NoiBai from "../../assets/NoiBai.jpg";
import SBDaNang from "../../assets/SBDaNang.jpg";

import carService from "../../common/api/carService";
import { useNavigate } from "react-router-dom";

interface Item {
  name: string;
  condition1: string;
  condition2: string;
}

const data: Item[] = [
  { name: "Item 1", condition1: "A", condition2: "X" },
  { name: "Item 2", condition1: "B", condition2: "Y" },
  { name: "Item 3", condition1: "A", condition2: "Y" },
  { name: "Item 4", condition1: "B", condition2: "X" },
];

const Homepage: React.FC = () => {
  const [results, setResults] = useState<Item[]>([]);

  const handleSearch = ({
    condition1,
    condition2,
  }: {
    condition1: string;
    condition2: string;
  }) => {
    const filteredResults = data.filter(
      (item) =>
        item.condition1.includes(condition1) &&
        item.condition2.includes(condition2)
    );
    setResults(filteredResults);
  };

  interface Car {
    carId: number;
    make: string;
    model: string;
    year: number;
    cost: number;
    transmission: string;
    mortgage: boolean;
    address: string;
    imageDTOS: ImageDTOS[];
  }

  interface ImageDTOS {
    carImagePath: string;
  }

  const size = 8;
  const [allCars, setAllCars] = useState<Car[]>([]);

  const fetchCar = async () => {
    try {
      const response = await carService.getAllCars(size);
      const { content } = response.data;
      console.log(content);
      setAllCars(content);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  };

  useEffect(() => {
    fetchCar();
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/cardetail/${id}`);
  };

  interface ImageWithAnnotation {
    id: number;
    name: string;
    image: string;
    annotation: string;
  }

  const imageWithAnnotations: ImageWithAnnotation[] = [
    {
      id: 1,
      name: "TPHCM",
      image: TPHCM,
      annotation: "TP Hồ Chí Minh 3200+ xe",
    },

    {
      id: 2,
      name: "Hanoi",
      image: Hoguom,
      annotation: "Hà Nội 2500+ xe",
    },

    {
      id: 3,
      name: "Danang",
      image: Bana,
      annotation: "Đà Nẵng 2000+ xe",
    },

    {
      id: 4,
      name: "Cantho",
      image: Cantho,
      annotation: "Cần Thơ 1000+ xe",
    },
  ];

  return (
    <div className="home-page">
      <div className="search-box">
        <SearchBox onSearch={handleSearch} />
      </div>

      <div className="car-list">
        <p className="title">Xe Phù Hợp Cho Bạn</p>
        <div className="car-grid">
          {allCars.map((car) => (
            <div
              key={car.carId}
              className="car-card"
              onClick={() => handleCardClick(car.carId)}
            >
              <div className="car-image">
                <img
                  src={`${window.location.origin}/newImages/${car.imageDTOS[0].carImagePath}`}
                />
              </div>
              <div className="car-info">
                <p className="automatic_number">Số tự động</p>
                <h2>
                  {car.make} {car.model} {car.year}
                </h2>
                <p className="location">{car.address}</p>
                <div className="bottom_card">
                  <p className="price">
                    {car.cost.toLocaleString()}đ
                    <span className="date"> /ngày</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />

      <div className="title-container">
        <p className="pr-content">Địa điểm nổi bật</p>
      </div>
      <div className="pr-container">
        <div className="location-container">
          {imageWithAnnotations.map((ImageWithAnnotation) => (
            <div key={ImageWithAnnotation.id} className="image-card">
              <div className="pr-image">
                <img
                  src={ImageWithAnnotation.image}
                  alt={ImageWithAnnotation.name}
                />
                <p className="pr-title">{ImageWithAnnotation.annotation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="car-deliver">
        <Space direction="horizontal" size="middle" style={{ display: "flex" }}>
          <div>
            <h2 className="deliver-title">Giao xe tại</h2>
            <h2 className="deliver-title">sân bay</h2>
          </div>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={TanSonNhat}
              alt="TanSonNhat"
              style={{ borderRadius: "50px" }}
              width={98}
            />
            <p className="airport-title">Tân Sơn Nhất</p>
            <p className="airport-title">2500 xe</p>
          </Card>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={NoiBai}
              alt="NoiBai"
              style={{ borderRadius: "50px" }}
              width={98}
            />
            <p className="airport-title">Nội Bài</p>
            <p className="airport-title">2500 xe</p>
          </Card>
          <Card
            style={{
              width: 312,
              height: 220,
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
            }}
          >
            <img
              src={SBDaNang}
              alt="SBDaNang"
              style={{ borderRadius: "50px" }}
              width={90}
            />
            <p className="airport-title">Đà Nẵng</p>
            <p className="airport-title">1500 xe</p>
          </Card>
        </Space>
      </div>
    </div>
  );
};

export default Homepage;
