import { Check } from "lucide-react";
import React from "react";
import CountUp from "react-countup";

const counterData = [
  { value: "4M", label: "million daily active users" },
  { value: "12k", label: "Over 12k open job positions" },
  { value: "20M", label: "Over 20 million stories shared" },
];

const JobListing = () => {
  return (
    <section className="max-w-screen-xl mx-auto pt-[85px] pb-[120px]">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 bg-white p-4 md:p-8">
        <div className="w-full md:w-[70%] relative p-6">
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/work.jpg.webp"
            alt="Woman working on laptop"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/employers.png"
            alt="Employers"
            className="absolute top-[80%] left-[72%] hidden md:block"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 text-start">
          <h1 className="text-4xl font-medium text-gray-900">
            Millions of Jobs. Find the one that suits you.
          </h1>
          <p className="mt-4 text-gray-600 text-sm leading-8 md:pr-24">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 600,000 companies worldwide.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <Check />
              <span>Bring to the table win-win survival</span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span>Capitalize on low-hanging fruit to identify</span>
            </li>
            <li className="flex items-center gap-2">
              <Check />
              <span>But I must explain to you how all this</span>
            </li>
          </ul>
          <button className="mt-6 w-[179px] px-6 py-3 rounded-lg shadow-md bg-[#127512] text-white border border-[#127512] hover:bg-white hover:text-[#127512] hover:border-[#127512] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Counter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-[60px] text-center">
        {counterData.map((counter, index) => (
          <div
            key={index}
            className="elementor-widget-wrap elementor-element-populated w-full"
          >
            <div className="elementor-widget-container">
              <div className="flex flex-col justify-center items-center">
                <div className="text-5xl font-bold leading-none mb-2">
                  <CountUp
                    start={0} // Starting number
                    end={parseInt(counter.value.replace(/[^\d]/g, ""))} // Parse the number from the string (like '4M' -> 4)
                    duration={1} // Duration in seconds
                    separator="," // Separator for thousands
                    suffix={counter.value.replace(/[0-9]/g, "")} // Add the suffix (M, k)
                  />
                </div>
                <div className="text-sm text-gray-600">{counter.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobListing;
