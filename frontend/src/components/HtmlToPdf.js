import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const [html, setHtml] = useState();
  const downloadPdfDocument = () => {
    const input = document.getElementById(rootElementId);

    html2canvas(input, { background: null, removeContainer: true }).then(
      (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.setFillColor(33);
        pdf.setFillColor(135, 124, 45, 0);
        setHtml(pdf);

        pdf.addImage(imgData, "JPEG", 0, 0);

        window.open(pdf.output("bloburl"));

        // pdf.save(`${downloadFileName}.pdf`);
      }
    );
  };

  return (
    // <button onClick={downloadPdfDocument}>Download Pdf</button>;
    <span className="menu-items" onClick={downloadPdfDocument}>
      DOWNLOAD
    </span>
  );
};

export default GenericPdfDownloader;
