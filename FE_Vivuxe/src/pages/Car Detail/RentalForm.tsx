import React, { useState } from "react";
import "./RentalForm.scss";

const RentalForm: React.FC = () => {
  const [pickupDate, setPickupDate] = useState("2024-06-11T21:00");
  const [returnDate, setReturnDate] = useState("2024-06-12T21:00");
  //   const [location, setLocation] = useState("Quận 10, Tp. Hồ Chí Minh");

  return (
    <form className="rental-form">
      <div className="date-section">
        <div className="date-box">
          <label htmlFor="pickup-date">Nhận xe</label>
          <input
            type="datetime-local"
            className="custom-datetime"
            id="pickup-date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
        </div>
        <hr />
        <div className="date-box">
          <label htmlFor="return-date">Trả xe</label>
          <input
            className="custom-datetime"
            type="datetime-local"
            id="return-date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="location-section">
        <label htmlFor="location">Địa điểm nhận xe</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="Quận 10, Tp. Hồ Chí Minh">
            Quận 10, Tp. Hồ Chí Minh
          </option>
          <option value="Quận 1, Tp. Hồ Chí Minh">
            Quận 1, Tp. Hồ Chí Minh
          </option>
          <option value="Quận Bình Thạnh, Tp. Hồ Chí Minh">
            Quận Bình Thạnh, Tp. Hồ Chí Minh
          </option>
        </select>
        <img src="/images/down-arrow.png" alt="" />
      </div> */}
    </form>
  );
};

export default RentalForm;
