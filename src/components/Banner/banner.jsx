import React from "react";
import { IoIosSearch } from "react-icons/io";

const Banner = () => {
  return (
    <section className="py-[60px]">
      <div className="flex md:flex-row justify-between p-6 md:p-4 gap-8 items-center">
        <div className="w-full md:w-[44%] space-y-6 text-left mt-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            There Are <span className="text-green-700">93,178</span> Postings
            Here For You!
          </h1>
          <p className="text-[#] text-base md:text-lg leading-7 ">
            Find Jobs, Employment & Career Opportunities
          </p>
          {/* 19px 20px */}
          <div
            className="flex flex-col md:flex-row items-start gap-4 mt-4 p-[19px] px-[20px] bg-white rounded-[7px]"
            style={{ border: "1px solid #ecedf2" }}
          >
            <div className="relative w-full md:w-auto flex-1">
              <IoIosSearch
                className="absolute left-3 top-3 text-gray-500"
                size={22}
              />
              <input
                type="text"
                placeholder="Job title, keywords..."
                className="w-full pl-10 pr-4 py-3 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* <button className="w-full md:w-auto bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
              Find Job
            </button> */}
            <button className=" hover:bg-white text-white w-[192px] px-6 py-3 rounded-lg shadow-md cursor-pointer bg-[#127512] border border-[#127512]  hover:text-[#127512] hover:border-[#127512] focus:bg-white focus:text-[#127512] focus:border-[#127512] transition">
            Find Job
          </button>
          </div>

          <p className="text-[15px] text-gray-600 mt-2">
            Popular Searches:{" "}
            <span className="font-medium">
              Designer, Developer, Web, iOS, PHP, Senior, Engineer
            </span>
          </p>
        </div>

        <div className="w-full md:w-[50%] xl:flex justify-center relative hidden">
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/work.png"
            alt="Woman working on laptop"
            className="w-[323px] h-[160px] block absolute right-[49%] top-[-25px]"
          />
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2024/07/female-botanist-typing-on-laptop-in-her-workshop-l-2023-11-27-05-22-49-utc-768x512.jpg.webp"
            alt="Woman working on laptop"
          />
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/jobholder.png.webp"
            alt="Woman working on laptop"
            className="w-[336px] h-[216px] block absolute right-[-10%] top-[-60px]"
          />
          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/agency.png"
            alt="Woman working on laptop"
            className="w-[356px] h-[160px] block absolute bottom-[21%] left-[-13%]"
          />

          <img
            src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/04/upload.png"
            alt="Woman working on laptop"
            className="w-[380px] h-[193px] block absolute bottom-[-27%] left-[-7%] "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

{
  /* <section className={styles.banner}>
<div className={styles.container}>
  <div className={styles.content}>
    <div className={styles.leftContent}>
      <h2 className={styles.title}>
        There Are <span className={{ color: "#0C720D" }}>93,178</span>{" "}
        Postings Here For You!
      </h2>
      <p className={styles.subtitle}>
        Find Jobs, Employment & Career Opportunities
      </p>

      <div className={styles.filterListingForm}>
        <div className={styles.searchForm}>
          <div>
            <IoIosSearch className={styles.searchIcon} size={22} />
            <input
              type="text"
              placeholder="job title, keywords...."
              className={styles.searchInput}
            />
          </div>

          <button className={styles.searchButton}>Find Job</button>
        </div>
      </div>

      <p className={styles.subtitleBottom}>
        Popular Searches :{" "}
        <span className="">
          Designer, Developer, Web, IOS, PHP, Senior, Engineer
        </span>
      </p>
    </div>

    <div className={styles.rightImage}>
      <img
        src="https://dianeo.sparktechwp.com/wp-content/uploads/2024/07/female-botanist-typing-on-laptop-in-her-workshop-l-2023-11-27-05-22-49-utc-768x512.jpg.webp"
        alt="Banner"
        className={styles.image}
      />
    </div>
  </div>
</div>
</section> */
}
