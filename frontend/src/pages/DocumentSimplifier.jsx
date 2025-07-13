import React, { useState } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const DocumentSimplifier = () => {
  const [pdfText, setPdfText] = useState("");
  const [simplifiedText, setSimplifiedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      try {
        const typedArray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str).join(" ");
          fullText += strings + "\n";
        }
        setPdfText(fullText);
      } catch (err) {
        alert("PDF parsing failed.");
      }
    };
    fileReader.readAsArrayBuffer(file);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file?.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }
    setFileName(file.name);
    await extractTextFromPDF(file);
  };

  const handleSimplify = async () => {
    if (!pdfText.trim()) {
      alert("No text found in PDF.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openrouter/auto",
          max_tokens: 200,
          messages: [
            {
              role: "system",
              content:
                "You are a legal simplification assistant for BharatSetu app. Your job is to take a complex legal document (like FIR or complaint) and explain it in simple Indian language in 2-3 lines. Use clear Hinglish. Avoid any legal jargon. Your tone should feel like a friendly person explaining to someone who doesn’t know English. Never use weird or made-up words.",
            },
            { role: "user", content: pdfText },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "BharatSetuPDFSimplifier",
          },
        }
      );
      setSimplifiedText(response.data.choices[0].message.content);
    } catch (err) {
      alert("Simplification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#43c5b7] flex justify-center px-4 py-20">
      <div
        className="h-full max-w-2xl bg-[#c8fdf7] bg-opacity-90 rounded-3xl p-10 shadow-2xl text-center relative"
        style={{
          backgroundImage: `url('/src/assets/simplify-background.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <h2 className="text-6xl font-extrabold text-gray-800 mb-10">
          Legal Document Simplifier
        </h2>

        <div className="mb-6">
          <div className="flex items-center justify-center">
            <label
              htmlFor="pdfUpload"
              className="cursor-pointer inline-flex items-center px-6 py-4 bg-teal-200 border-2 border-teal-700 text-teal-800 rounded-2xl text-4xl font-bold hover:bg-teal-500 transition"
            >
              <svg
                className="w-10 h-10 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 14a4 4 0 004 4h6a4 4 0 004-4v-2a1 1 0 10-2 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2a1 1 0 10-2 0v2zm6-8V3a1 1 0 112 0v3h1.586a1 1 0 01.707 1.707l-3.293 3.293a1 1 0 01-1.414 0L6.707 7.707A1 1 0 017.414 6H9z"
                  clipRule="evenodd"
                />
              </svg>
              Choose PDF to Upload
              <input
                id="pdfUpload"
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          </div>
          {fileName && (
            <p className="mt-8 text-gray-700 font-bold text-2xl">
              📄 {fileName}
            </p>
          )}
        </div>

        <button
          onClick={handleSimplify}
          disabled={!pdfText}
          className="bg-teal-800 hover:bg-teal-900 text-white w-full py-4 rounded-xl font-bold text-3xl shadow-lg transition"
        >
          {loading ? "Simplifying..." : "Simplify PDF"}
        </button>

        <div className="mt-10 text-left border p-6 rounded-xl shadow-xl backdrop-blur-md bg-white/30 min-h-[180px]">
          {simplifiedText ? (
            <>
              <h3 className="font-bold mb-3 text-gray-800 text-xl">
                Simplified Text :
              </h3>
              <p className="whitespace-pre-wrap text-gray-900 text-lg">
                {simplifiedText}
              </p>
            </>
          ) : (
            <div className="invisible text-sm">Placeholder</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DocumentSimplifier;