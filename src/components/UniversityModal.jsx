import React from "react";

const UniversityModal = ({ university, onClose }) => {
  if (!university) return null;

  const { name, score, details, suggestion } = university;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-4">{name}</h2>
        <p className="text-gray-700 mb-4">
          <strong>Fit Score:</strong>{" "}
          <span
            className={`${
              score >= 80
                ? "text-green-600"
                : score >= 50
                ? "text-yellow-500"
                : "text-red-500"
            } font-semibold`}
          >
            {score}/100
          </span>
        </p>

        <div className="space-y-2 text-gray-700">
          <p>
            <strong>GMAT:</strong> {details.gmat.user} (Avg:{" "}
            {details.gmat.avg}) –{" "}
            <span
              className={`${
                details.gmat.status === "above avg"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {details.gmat.status}
            </span>
          </p>
          <p>
            <strong>GPA:</strong> {details.gpa.user} (Avg:{" "}
            {details.gpa.avg}) –{" "}
            <span
              className={`${
                details.gpa.status === "above avg"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {details.gpa.status}
            </span>
          </p>
          <p>
            <strong>Work Experience:</strong> {details.work_exp.user} yrs (Avg:{" "}
            {details.work_exp.avg} yrs) –{" "}
            <span
              className={`${
                details.work_exp.status === "above avg"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {details.work_exp.status}
            </span>
          </p>
        </div>

        <div className="mt-5 bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800">
          <strong>Suggestion:</strong> {suggestion}
        </div>
      </div>
    </div>
  );
};

export default UniversityModal;
