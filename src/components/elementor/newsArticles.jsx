import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const articlesData = [
  {
    date: "June 29, 2024",
    category: "Blog",
    comments: 1,
    title: "Hello world!",
    description:
      "Welcome to WordPress. This is your first post. Edit or delete it, then ...",
    link: "https://dianeo.sparktechwp.com/hello-world/",
    image: null,
  },
  {
    date: "April 26, 2021",
    category: "Education",
    comments: 1,
    title: "Attract Sales And Profits",
    description:
      "A job ravenously while Far much that one rank beheld after outside....",
    link: "https://dianeo.sparktechwp.com/hello-world/",
    image:
      "https://dianeo.sparktechwp.com/wp-content/uploads/elementor/thumbs/blog1-qqqtgtvejio4vljekyrtz0n49hf6huz7a20ycp681w.jpg",
  },
  {
    date: "April 26, 2021",
    category: "Education",
    comments: 3,
    title: "5 Tips For Your Job Interviews",
    description:
      "A job ravenously while Far much that one rank beheld after outside....",
    link: "https://dianeo.sparktechwp.com/hello-world/",
    image:
      "https://dianeo.sparktechwp.com/wp-content/uploads/elementor/thumbs/blog1-qqqtb32wryt1xdvs4hdwqgtpkpqfgg695mi4rtou2s.jpg",
  },
];

const NewsArticles = () => {
  return (
    // pt-[75px] pb-[60px]
    <>
      <section className="w-full bg-[#ecedf2]">
        <div className="container mx-auto max-w-screen-xl pt-[75px] pb-[60px]">
          <div className="text-center py-[50px]">
            <h2 className="text-3xl font-semibold text-gray-800">
              Recent News Articles
            </h2>
            <p className="text-gray-600 mt-2">
              Fresh job-related news content posted each day.
            </p>
          </div>

          <div className="slick-carousel flex justify-center flex-wrap">
            {articlesData.map((article, index) => (
              <div className="w-full sm:w-1/3 p-4" key={index}>
                <article className="bg-white rounded-lg shadow-md overflow-hidden group">
                  {article.image && (
                    <div className="top-image p-4 overflow-hidden">
                      <figure className="relative">
                        <a
                          href={article.link}
                          aria-hidden="true"
                          className="block"
                        >
                          <img
                            loading="lazy"
                            decoding="async"
                            className="w-full h-60 object-cover rounded-[8px] transition-transform duration-500 ease-in-out group-hover:scale-105"
                            src={article.image}
                            alt={article.title}
                          />
                        </a>
                      </figure>
                    </div>
                  )}

                  <div className="top-info p-5 flex items-center gap-3 text-center text-sm text-[#696969]">
                    <div>{article.date}</div>
                    <div className="flex items-center gap-1">
                      <span className="text-black text-2xl">•</span>
                      <a href="https://dianeo.sparktechwp.com/category/blog/">
                        {article.category}
                      </a>
                      <span className="text-black text-2xl">•</span>
                      <div>
                        {article.comments} Comment
                        {article.comments > 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <h4 className="text-xl font-semibold text-[#202124]">
                      <a href={article.link}>{article.title}</a>
                    </h4>
                    <p className="text-[#77838F] mt-2 text-[15px]">
                      {article.description}
                    </p>
                    <div className="mt-4">
                      <a
                        href={article.link}
                        className="text-[#0c720d] flex items-center text-sm font-medium group relative focus:outline-none focus:ring-2 focus:ring-[#0c720d] rounded-md transition-all"
                      >
                        <span className="relative">
                          Read More
                          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0a5b0b] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <MdOutlineKeyboardArrowRight className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/*-------- Download Section -----------*/}
<section className="w-full flex items-center justify-center pt-[70px] pb-[60px] px-0">
  <div className="flex justify-evenly max-w-screen-xl mx-auto">
    <div className="w-full md:w-1/3 p-4 hidden md:block animate-slide-right">
      <div className="w-full h-auto">
        <img
          src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/app.jpg.webp"
          alt="App Image"
          className="w-[616px] h-[651px] object-cover"
        />
      </div>
    </div>

    {/* Content Column */}
    <div className="w-full md:w-1/3 p-4 animate-slide-left">
      <div className="mt-[50%]">
        <h2 className="text-[18px] font-[500] text-[#1967d2] mb-4 font-jost">
          DOWNLOAD & ENJOY
        </h2>

        <h3 className="text-[40px] leading-[1.3em] font-[500] font-jost text-gray-800 mb-4">
          Get the Superio Job Search App
        </h3>

        <p className="text-[15px] font-Helvetica text-[#696969] mb-[20px]">
          Search through millions of jobs and find the right fit. Simply swipe right to apply.
        </p>

        {/* App Store Buttons */}
        <div className="flex gap-4 mt-4">
          {/* Apple Store Button */}
          <a
            href="#"
            className="flex items-center bg-[#202124] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#127512] w-[191px] h-[60px] transition"
          >
            <div className="mr-2">
              <i className="fab fa-apple text-2xl"></i>
            </div>
            <div>
              <div className="text-sm">Download on the</div>
              <div className="text-lg font-semibold">Apple Store</div>
            </div>
          </a>

          {/* Google Play Store Button */}
          <a
            href="#"
            className="flex items-center bg-[#202124] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#127512]  w-[177px] h-[60px] transition"
          >
            <div className="mr-2">
              <i className="fab fa-google-play text-2xl"></i>
            </div>
            <div>
              <div className="text-sm">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Recruiting Section */}
      <section
        className="container max-w-screen-xl mx-auto bg-cover bg-center rounded-[8px] "
        style={{
          backgroundImage:
            "url('https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/group8.jpg.webp')",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div class="container mx-auto ">
            <div class="p-[45px_60px_50px]">
              <h2 class="text-[30px] font-[500] text-[#202124] mb-4">
                Recruiting?
              </h2>

              <p class="text-[#696969] mb-6 font-sans text-[15px] font-normal leading-[1.75]">
                Advertise your jobs to millions of monthly users and search 15.8
                million CVs in our database.
              </p>

              <a
                href="#"
                class="inline-block text-white bg-[#127512] border border-[#127512] rounded-lg px-10 py-4 text-center shadow-md hover:bg-white hover:text-[#127512] hover:border-[#127512] focus:bg-white focus:text-[#127512] focus:border-[#127512] transition"
              >
                Start Recruiting Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsArticles;
