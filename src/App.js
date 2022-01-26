import { Fragment, useState, useEffect } from "react";
import Input from "./components/input/Input";
import DetailedReport from "./components/detailedReport/DetailedReport";

// const getReport = async () => {
//   const response = await fetch(
//     "api.openweathermap.org/data/2.5/weather?q=monywa&appid=657d2dc10848ac216191900bfeb4c0fa"
//   );

//   const report = await response.json();
//   return report;
// };

function App() {
  const [inputVal, setInputVal] = useState("");
  const [report, setReport] = useState({});

  useEffect(() => {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=monywa&appid=215d863f1517e0fdc264d59cbd6f4a90",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.text())
      .then((response) => {
        setReport(response);
        console.log(report);
      });
    // getReport(inputVal).then((response) => {
    // });
  }, [inputVal]);

  return (
    <>
      <Input setInput={setInputVal} />
      <DetailedReport />
    </>
  );
}

export default App;
