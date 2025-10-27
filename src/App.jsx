import React from "react";
import MatchForm from "./components/MatchForm";
import MatchResults from "./components/MatchResults";
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen bg from-blue-50 via-white to-blue-100 flex flex-col items-center justify-start py-16 px-6">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-10 border border-blue-100 transition-all duration-500 hover:shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center mb-12 from-blue-700 to-indigo-500 bg-clip-text tracking-tight">
          Right Fit Matcher <span className="text-blue-700">2.0</span>
        </h1>

        <div className="space-y-12">
          <MatchForm />
          <div className="border-t border-gray-200"></div>
          <MatchResults />
        </div>
      </div>

      <footer className="mt-16 text-gray-600 text-sm">
        <p>
          Crafted by <span className="font-semibold text-blue-600">Aazad Tiwari</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
