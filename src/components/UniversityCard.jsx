import React from "react";

const UniversityCard = ({ university, onSelect }) => {
  const { name, score, details } = university;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-blue-700 mb-3">{name}</h3>
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Fit Score:</span>{" "}
          <span
            className={`${
              score >= 80
                ? "text-green-600"
                : score >= 50
                ? "text-yellow-500"
                : "text-red-500"
            } font-semibold`}
          >
            {score} / 100
          </span>
        </p>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            GMAT:{" "}
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
            GPA:{" "}
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
            Work Exp:{" "}
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
      </div>

      <button
        onClick={onSelect}
        className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
      >
        More Info
      </button>
    </div>
  );
};

export default UniversityCard;
