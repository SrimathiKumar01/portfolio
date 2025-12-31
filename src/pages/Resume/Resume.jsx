import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import ResumePDF from "@/assets/SrimathiResume.pdf";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [pageWidth, setPageWidth] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Calculate responsive width
  React.useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector(".pdf-container");
      if (container) {
        setPageWidth(container.offsetWidth - 32); // Subtract padding
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-12 px-4">
      {/* Action Buttons */}
      <div className="max-w-2xl mx-auto mb-6 flex justify-center gap-4 flex-wrap">
        <motion.a
          href={ResumePDF}
          download="SrimathiKumar_Resume.pdf"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          <Download className="w-5 h-5" />
          Download CV
        </motion.a>
      </div>

      {/* PDF Controls */}
      <div className="max-w-2xl mx-auto mb-6 flex justify-center items-center gap-4 flex-wrap">
        {/* Page Navigation */}
        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm px-2 font-medium">
            Page {pageNumber} of {numPages || "..."}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm px-2 font-medium">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ZoomIn className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto flex justify-center pdf-container px-4"
      >
        <div className="bg-white rounded-lg shadow-2xl w-full">
          <Document
            file={ResumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-96 bg-white rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              </div>
            }
            error={
              <div className="text-red-600 text-center p-8 bg-white rounded-lg">
                <p>Failed to load PDF.</p>
                <a href={ResumePDF} className="text-blue-600 hover:underline">
                  Click here to download instead
                </a>
              </div>
            }
            className="w-full"
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="w-full"
            />
          </Document>
        </div>
      </motion.div>

      {/* Bottom Download Button */}
      <div className="max-w-2xl mx-auto mt-6 flex justify-center">
        <motion.a
          href={ResumePDF}
          download="SrimathiKumar_Resume.pdf"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
        >
          <Download className="w-5 h-5" />
          Download CV
        </motion.a>
      </div>
    </div>
  );
}
