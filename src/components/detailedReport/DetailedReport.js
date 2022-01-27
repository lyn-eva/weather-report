import { useState, useEffect } from "react";

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

function DetailedReport(props) {
  const tmc = props.temp;
  const [temp, setTemp] = useState();

  useEffect(() => {
    setTemp(props.temp.toFixed() + '°C')
  }, [props.temp]);
  
  const date = new Date();
  let dayDate = date.getDate() % 10;
  dayDate =
    date.getDate() +
    (dayDate > 3 ? "th" : dayDate === 3 ? "rd" : dayDate === 2 ? "nd" : "st");

  const toCelsius = () => {
    setTemp(tmc+'°C');
  };
  const toFahrenheit = () => {
    setTemp(((tmc * 9) / 5 + 32).toFixed() + '°F');
  };
  const toKelvin = () => {
    setTemp((tmc + 273.15).toFixed() + 'K');
  };

  return (
    <div className="p-[0.02px] text-white sm:mt-12">
      <header className="flex flex-col w-11/12 mx-auto mt-7 text-center">
        <span>{`${day[date.getDay()]} ${dayDate}, ${
          month[date.getMonth()]
        }`}</span>
        <span className="text-3xl mt-2 sm:text-5xl sm:mt-4 sm:mb-2">{`${date.getHours()}:${date.getMinutes()}`}</span>
        <span className="font-light sm:text-2xl">{props.name}</span>
      </header>
      <div className="text-center my-12">
        <p className="text-6xl font-light mt-10 mb-6 sm:text-8xl">{temp}</p>
        <div className="text-2xl flex justify-between w-24 mx-auto sm:text-3xl sm:w-32">
          <button onClick={toKelvin}>K</button>
          <button onClick={toFahrenheit}>F</button>
          <button onClick={toCelsius}>C</button>
        </div>
      </div>
    </div>
  );
}

export default DetailedReport;
