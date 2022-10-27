import React from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPdf = ({ elementId, downloadFile }) => {
  const downloadFullPage = () => {
    const input = document.getElementById(elementId);
    html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "pt", "a2");
      pdf.addImage(imageData, "JPEG", 0, 50);
      pdf.save(`${downloadFile}`);
    });
  };
  return (
    <div>
      <button
        onClick={downloadFullPage}
        className="py-1 px-3 bg-indigo-400 text-white hover:bg-indigo-500 font-semibold text-md mt-2"
      >
        Download PDF
      </button>
    </div>
  );
};

export default DownloadPdf;
