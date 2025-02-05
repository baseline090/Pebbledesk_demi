import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  // State to track cursor position
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLeftContentVisible, setIsLeftContentVisible] = useState(false); // Track visibility of left content
  const [isImage1Visible, setIsImage1Visible] = useState(false); // Track visibility of first image
  const [isImage2Visible, setIsImage2Visible] = useState(false); // Track visibility of second image
  const [isImage3Visible, setIsImage3Visible] = useState(false); // Track visibility of third image
  const [isImage4Visible, setIsImage4Visible] = useState(false); // Track visibility of fourth image
  const [isImage5Visible, setIsImage5Visible] = useState(false); // Track visibility of fifth image
  const [isImagesSectionVisible, setIsImagesSectionVisible] = useState(false); // Track visibility of images section

  useEffect(() => {
    // Function to update cursor position
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    };

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    // IntersectionObserver to track visibility of left content, images, and images section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add classes to animate elements when they enter the viewport
            if (entry.target.id === "left-content") setIsLeftContentVisible(true);
            if (entry.target.id === "image-1") setIsImage1Visible(true);
            if (entry.target.id === "image-2") setIsImage2Visible(true);
            if (entry.target.id === "image-3") setIsImage3Visible(true);
            if (entry.target.id === "image-4") setIsImage4Visible(true);
            if (entry.target.id === "image-5") setIsImage5Visible(true);
            if (entry.target.id === "images-section") setIsImagesSectionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe elements
    observer.observe(document.getElementById("left-content"));
    observer.observe(document.getElementById("image-1"));
    observer.observe(document.getElementById("image-2"));
    observer.observe(document.getElementById("image-3"));
    observer.observe(document.getElementById("image-4"));
    observer.observe(document.getElementById("image-5"));
    observer.observe(document.getElementById("images-section"));

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-[#e9eefa] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-[85px]">
        {/* Left Content */}
        <div
          id="left-content"
          className={`w-full lg:w-1/2 space-y-6 text-left mt-5 transform transition-all duration-1000 ease-out ${
            isLeftContentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100px]"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            There Are <span className="text-green-700">93,178</span> Postings Here For You!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-7">
            Find Jobs, Employment & Career Opportunities
          </p>

          {/* Search Form */}
          <div className="flex flex-col justify-between sm:flex-row items-start gap-4 mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="relative w-full sm:w-auto">
              <IoIosSearch className="absolute left-3 top-3 text-gray-500" size={22} />
              <input
                type="text"
                placeholder="Job title, keywords..."
                className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
              Find Job
            </button>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Popular Searches: <span className="font-medium">Designer, Developer, Web, iOS, PHP, Senior, Engineer</span>
          </p>
        </div>

        {/* Image Section - Only visible on large screens and above */}
        <div
          id="images-section"
          className={`w-full lg:w-1/2 relative flex justify-center hidden lg:block transform transition-all duration-1000 ease-out ${
            isImagesSectionVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {/* First Image */}
          <img
            id="image-1"
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2024/07/female-botanist-typing-on-laptop-in-her-workshop-l-2023-11-27-05-22-49-utc-768x512.jpg.webp"
            alt="Woman working on laptop"

            className={`max-w-full transform transition-all duration-1000 ease-out ${
              isImage1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          />
          {/* Second Image */}
          <img
            id="image-2"
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/work.png"
            alt="Woman working on laptop"
              style={{
              transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 50}px, ${(cursorPosition.y - window.innerHeight / 2) / 50}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className={`w-[323px] h-[160px] block absolute lg:top-[-25px] lg:right-[49%] transform transition-all duration-1000 ease-out ${
              isImage2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          />
          {/* Third Image */}
          <img
            id="image-3"
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/jobholder.png.webp"
            alt="Woman working on laptop"
                        style={{
              transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 50}px, ${(cursorPosition.y - window.innerHeight / 2) / 50}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className={`w-[336px] h-[216px] block absolute lg:top-[-60px] lg:right-[-10%] transform transition-all duration-1000 ease-out ${
              isImage3Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          />
          {/* Fourth Image */}
          <img
            id="image-4"
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/agency.png"
            alt="Woman working on laptop"
                        style={{
              transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 50}px, ${(cursorPosition.y - window.innerHeight / 2) / 50}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className={`w-[356px] h-[160px] block absolute lg:bottom-[21%] lg:left-[-13%] transform transition-all duration-1000 ease-out ${
              isImage4Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          />
          {/* Fifth Image */}
          <img
            id="image-5"
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/upload.png"
            alt="Woman working on laptop"
                        style={{
              transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 50}px, ${(cursorPosition.y - window.innerHeight / 2) / 50}px)`,
              transition: "transform 0.1s ease-out",
            }}
            className={`w-[380px] h-[193px] block absolute lg:bottom-[-27%] lg:left-[-7%] transform transition-all duration-1000 ease-out ${
              isImage5Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;


// import React, { useEffect, useState } from "react";
// import { IoIosSearch } from "react-icons/io";

// const Banner = () => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     // Function to update cursor position
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       setCursorPosition({ x: clientX, y: clientY });
//     };

//     // Add mouse move listener
//     window.addEventListener("mousemove", handleMouseMove);

//     // Clean up event listener when the component unmounts
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   return (
//     <section className="py-[60px]">
//       <div className="flex md:flex-row justify-between p-6 md:p-4 gap-8 items-center">
//         <div className="w-full md:w-[44%] space-y-6 text-left mt-5">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             There Are <span className="text-green-700">93,178</span> Postings
//             Here For You!
//           </h1>
//           <p className="text-[#] text-base md:text-lg leading-7 ">
//             Find Jobs, Employment & Career Opportunities
//           </p>
//           <div
//             className="flex flex-col md:flex-row items-center gap-4 mt-4 p-[19px] px-[20px] bg-white rounded-[7px]"
//             style={{ border: "1px solid #ecedf2" }}
//           >
//             <div className="relative w-full md:w-auto flex-1">
//               <IoIosSearch className="absolute left-3 top-3 text-gray-500" size={22} />
//               <input
//                 type="text"
//                 placeholder="Job title, keywords..."
//                 className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>
//             <button className="w-full md:w-[163px] md:h-[60px] px-6 py-3 rounded-lg shadow-md cursor-pointer bg-[#127512] border border-[#127512] text-white hover:bg-white hover:text-[#127512] hover:border-[#127512] focus:bg-white focus:text-[#127512] focus:border-[#127512] transition">
//               Find Job
//             </button>
//           </div>



//           <p className="text-[15px] text-gray-600 mt-2">
//             Popular Searches:{" "}
//             <span className="font-medium">
//               Designer, Developer, Web, iOS, PHP, Senior, Engineer
//             </span>
//           </p>
//         </div>
//         <div className="w-full lg:w-1/2 relative flex justify-center hidden lg:block">
//           <img
//             src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/work.png"
//             alt="Woman working on laptop"
//             className="w-[323px] h-[160px] block absolute lg:top-[-25px] lg:right-[49%]"
//             style={{
//               transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 50}px, ${(cursorPosition.y - window.innerHeight / 2) / 50}px)`,
//               transition: "transform 0.1s ease-out",
//             }}
//           />
//           <img
//             src="https://dianeo.sparktechwp.com/wp-content/uploads/2024/07/female-botanist-typing-on-laptop-in-her-workshop-l-2023-11-27-05-22-49-utc-768x512.jpg.webp"
//             alt="Woman working on laptop"
//             className="max-w-full"
//           />
//           <img
//             src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/jobholder.png.webp"
//             alt="Woman working on laptop"
//             className="w-[336px] h-[216px] block absolute lg:top-[-60px] lg:right-[-10%]"
//             style={{
//               transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 60}px, ${(cursorPosition.y - window.innerHeight / 2) / 60}px)`,
//               transition: "transform 0.1s ease-out",
//             }}
//           />
//           <img
//             src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/agency.png"
//             alt="Woman working on laptop"
//             className="w-[356px] h-[160px] block absolute lg:bottom-[21%] lg:left-[-13%]"
//             style={{
//               transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 80}px, ${(cursorPosition.y - window.innerHeight / 2) / 80}px)`,
//               transition: "transform 0.1s ease-out",
//             }}
//           />
//           <img
//             src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/upload.png"
//             alt="Woman working on laptop"
//             className="w-[380px] h-[193px] block absolute lg:bottom-[-27%] lg:left-[-7%]"
//             style={{
//               transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / 90}px, ${(cursorPosition.y - window.innerHeight / 2) / 90}px)`,
//               transition: "transform 0.1s ease-out",
//             }}
//           />
//         </div>
//       </div>
//     </section>
    
 
//   );
// };

// export default Banner;
