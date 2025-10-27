import React, { createContext, useState } from "react";

export const RightFitContext = createContext();

export const RightFitProvider = ({ children }) => {
  const [inputs, setInputs] = useState({
    gmat_score: "",
    gpa: "",
    work_exp: "",
    program_type: "",
  });

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const fetchMatchResults = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://right-fit-backend.onrender.com/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      if (!response.ok) throw new Error("Failed to fetch match results");

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RightFitContext.Provider
      value={{
        inputs,
        results,
        loading,
        error,
        handleInputChange,
        fetchMatchResults,
      }}
    >
      {children}
    </RightFitContext.Provider>
  );
};
