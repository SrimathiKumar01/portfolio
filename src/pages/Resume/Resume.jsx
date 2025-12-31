import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { Download, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import ResumePDF from "@/assets/SrimathiResume.pdf";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
      <div className="max-w-4xl mx-auto mb-6 flex justify-center gap-4 flex-wrap">
        <motion.a
          href={ResumePDF}
          download="SrimathiKumar_Resume.pdf"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download CV
        </motion.a>
        <motion.a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors shadow-lg border border-gray-600"
        >
          <ExternalLink className="w-5 h-5" />
          Open in New Tab
        </motion.a>
      </div>

      {/* PDF Controls */}
      <div className="max-w-4xl mx-auto mb-4 flex justify-center items-center gap-4 flex-wrap">
        {/* Page Navigation */}
        <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm px-2">
            Page {pageNumber} of {numPages || "..."}
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber >= (numPages || 1)}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-4 py-2">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ZoomOut className="w-5 h-5 text-white" />
          </button>
          <span className="text-white text-sm px-2">{Math.round(scale * 100)}%</span>
          <button
            onClick={zoomIn}
            disabled={scale >= 2.5}
            className="p-1 hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="max-w-4xl mx-auto flex justify-center"
      >
        <div className="bg-gray-900 rounded-lg shadow-2xl overflow-auto max-h-[80vh] p-4">
          <Document
            file={ResumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
              </div>
            }
            error={
              <div className="text-red-400 text-center p-8">
                <p>Failed to load PDF.</p>
                <a href={ResumePDF} className="text-blue-400 hover:underline">
                  Click here to download instead
                </a>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-lg"
            />
          </Document>
        </div>
      </motion.div>
    </div>
  );
}
