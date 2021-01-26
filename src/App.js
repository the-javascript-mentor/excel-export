import { useState } from "react";
import "./App.css";
import useExcelExport from "./useExcelExport";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [fileName, setFileName] = useState("data.xlsx");

  const exportSpreadsheet = useExcelExport();

  const saveExcelFile = () => {
    const dataToExcelFile = [
      {
        number: a,
        letter: b,
      },
      {
        number: c,
        letter: d,
      },
    ];
    exportSpreadsheet({ data: dataToExcelFile, fileName });
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input value={a} onChange={(event) => setA(event.target.value)} />
            </td>
            <td>
              <input value={b} onChange={(event) => setB(event.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <input value={c} onChange={(event) => setC(event.target.value)} />
            </td>
            <td>
              <input value={d} onChange={(event) => setD(event.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <input
        value={fileName}
        onChange={(event) => setFileName(event.target.value)}
      />
      <button onClick={saveExcelFile}>Give me my Excel sheet</button>
    </div>
  );
}

export default App;
