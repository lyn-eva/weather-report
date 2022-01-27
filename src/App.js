import { Fragment, useState, useEffect } from "react";
import Input from "./components/input/Input";
import DetailedReport from "./components/detailedReport/DetailedReport";

const fetchData = async (Location) => {
  const url = 'from open weather api';
  const response = await fetch(url);
  const report = await response.json();
  return report;
};

function App() {
  const [inputVal, setInputVal] = useState("");
  const [report, setReport] = useState(JSON.parse(localStorage.getItem("weather_data")));

  useEffect(() => {
    fetchData(inputVal).then((response) => {
      setReport(response);
    });
  }, [inputVal]);

  return (
    <>
      <Input setInput={setInputVal} />
      <DetailedReport temp={report.main == undefined ? '34' : report.main.temp} 
      name={report.name == undefined ? 'tokyo' : report.name}/>
      {/* <div>{report.wind.speed}</div> */}
    </>
  );
}

export default App;
