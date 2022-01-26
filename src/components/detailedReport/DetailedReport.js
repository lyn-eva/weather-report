import { useState } from "react";

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function DetailedReport() {
  const tmc = 15;
  const [temp, setTemp] = useState(tmc);

  const date = new Date();
  let dayDate = date.getDate() % 10;
  dayDate =
    date.getDate() +
    (dayDate > 3 ? "th" : dayDate === 3 ? "rd" : dayDate === 2 ? "nd" : "st");

  const toCelsius = () => {
    setTemp(tmc);
  };
  const toFahrenheit = () => {
    setTemp((tmc * 9) / 5 + 32);
  };
  const toKelvin = () => {
    setTemp(tmc + 273.15);
  };

  return (
    <div className="p-[0.02px] text-white">
      <header className="flex flex-col w-11/12 mx-auto mt-7 text-center">
        <span>{`${day[date.getDay()]} ${dayDate}, ${
          month[date.getMonth()]
        }`}</span>
        <span className="text-3xl mt-2">{`${date.getHours()}:${date.getMinutes()}`}</span>
        <span className="font-light">Monywa</span>
      </header>
      <div className="text-center my-12">
        <i className="fas fa-sun fa-10x"></i>
        <p className="text-6xl font-light mt-10 mb-6">{`${temp}°C`}</p>
        <div className="text-2xl flex justify-between w-24 mx-auto">
          <button onClick={toKelvin}>K</button>
          <button onClick={toFahrenheit}>F</button>
          <button onClick={toCelsius}>C</button>
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;
