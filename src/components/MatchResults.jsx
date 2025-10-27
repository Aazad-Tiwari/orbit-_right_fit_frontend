import React, { useContext, useState } from "react";
import { RightFitContext } from "../context/RightFitContext";
import UniversityCard from "./UniversityCard";
import UniversityModal from "./UniversityModal";

const MatchResults = () => {
  const { results, loading, error } = useContext(RightFitContext);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  if (loading)
    return (
      <div className="text-center py-10 text-lg font-medium text-blue-600">
        Loading matches...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 font-medium py-10">
        {error}
      </div>
    );

  if (!results || results.length === 0)
    return (
      <div className="text-center text-gray-500 py-10">
        No results yet. Please search to find your right fit.
      </div>
    );

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Top Matching Universities
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {results.map((uni) => (
          <UniversityCard
            key={uni.id}
            university={uni}
            onSelect={() => setSelectedUniversity(uni)}
          />
        ))}
      </div>

      {selectedUniversity && (
        <UniversityModal
          university={selectedUniversity}
          onClose={() => setSelectedUniversity(null)}
        />
      )}
    </div>
  );
};

export default MatchResults;
