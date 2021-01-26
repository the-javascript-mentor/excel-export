import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const useExcelExport = () => {
  const exportSpreadsheet = ({ data, sheetName = "Sheet1", fileName }) => {
    console.log(data);

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const spreadsheetData = XLSX.utils.json_to_sheet(data);
    const workbook = {
      Sheets: { [sheetName]: spreadsheetData },
      SheetNames: [sheetName],
    };
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelBlob = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(excelBlob, fileName);
  };

  return exportSpreadsheet;
};

export default useExcelExport;
