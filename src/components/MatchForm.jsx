import React, { useContext } from "react";
import { RightFitContext } from "../context/RightFitContext.jsx";

const MatchForm = () => {
  const { inputs, handleInputChange, fetchMatchResults, loading } =
    useContext(RightFitContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMatchResults();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Find Your Right Fit 🎯
      </h2>

      <input
        type="number"
        name="gmat_score"
        value={inputs.gmat_score}
        onChange={handleInputChange}
        placeholder="Enter GMAT Score"
        className="w-full mb-3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="number"
        step="0.01"
        name="gpa"
        value={inputs.gpa}
        onChange={handleInputChange}
        placeholder="Enter GPA"
        className="w-full mb-3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="number"
        name="work_exp"
        value={inputs.work_exp}
        onChange={handleInputChange}
        placeholder="Work Experience (in years)"
        className="w-full mb-3 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        required
      />

      <select
        name="program_type"
        value={inputs.program_type}
        onChange={handleInputChange}
        className="w-full mb-4 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
        required
      >
        <option value="">Select Program Type</option>
        <option value="MBA">MBA</option>
        <option value="MS">MS</option>
        <option value="PhD">PhD</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-lg text-white font-semibold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Finding Matches..." : "Find My Fit"}
      </button>
    </form>
  );
};

export default MatchForm;
