import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

// Testimonials Data
const testimonialsData = [
  {
    title: "Awesome Design",
    description:
      "Without JobHunt I’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality.",
    name: "Ashley Jenkins",
    job: "Designer",
    imgSrc:
      "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/t3.jpg.webp",
  },
  {
    title: "Perfect Design",
    description:
      "Without JobHunt I’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    name: "Nicole Wells",
    job: "Web Developer",
    imgSrc:
      "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/t2.jpg.webp",
  },
  {
    title: "Good Jobs",
    description:
      "Without JobHunt I’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    name: "Brooklyn Simmons",
    job: "Consultant",
    imgSrc:
      "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/t3.jpg.webp",
  },
  {
    title: "Awesome Design",
    description:
      "Without JobHunt I’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality",
    name: "Ronald Richards",
    job: "Designer",
    imgSrc:
      "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/t4.jpg.webp",
  },
];

const imageLinks = [
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b7.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b6.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b4.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b3.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b5.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b7.jpg.webp",
  "https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/b1.jpg.webp",
];

const TestimonialsOurCustomers = () => {


  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    beforeChange: (_, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024, // for tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // for mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-out",
      once: true, // Run animation only once
    });
    // Re-initialize AOS on component updates
    AOS.refresh();
  }, []);


  const settingslinks = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  
  return (
    <>
 <section
      className="bg-[#f0f5f7] pt-[85px] pr-0 pb-[90px] pl-0 overflow-hidden"
      data-aos="slide-up" // Add slide-up animation on scroll
    >
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-[#202124] mb-5 text-[30px] font-medium">
            Testimonials From Our Customers
          </h2>
          <div className="font-sans text-[15px] font-normal leading-[1.75] text-[#77838f]">
            Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[580px] h-[315px] pt-[35px] pr-[40px] pb-[40px] pl-[40px] bg-white rounded-lg shadow-lg transform transition-opacity duration-300 ${
                index === activeIndex
                  ? "opacity-100 scale-100"
                  : "opacity-50 scale-90"
              }`}
            >
              {/* Title */}
              <h3 className="text-[#0c720d] text-[18px] font-medium text-start mb-5 ">
                {testimonial.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[#696969] mb-8 text-start text-[16px] font-medium">
                {testimonial.description}
              </p>

              <div className="flex items-center mt-4">
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.job}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bullet Icons */}
        <ul className="flex justify-center mt-6 space-x-4">
          {testimonialsData.map((_, index) => (
            <li key={index} role="presentation">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-3.5 h-3.5 rounded-full border-2 ${
                  index === activeIndex
                    ? "bg-[#0c720d] border-[#0c720d]"
                    : "bg-gray-300 border-gray-300"
                }`}
              ></button>
            </li>
          ))}
        </ul>
      </div>
    </section>

      

      <section className="bg-white border-b border-[#ecedf2] pt-[40px] pb-[40px]">
        <div className="max-w-screen-xl mx-auto p-4">
          <Slider {...settingslinks}>
            {imageLinks.map((imgSrc, index) => (
              <div key={index} className="image-container">
              <img src={imgSrc} alt={`Image ${index + 1}`} className="slider-image" />
            </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TestimonialsOurCustomers;

{
  /* <div className="relative overflow-hidden w-full px-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 600}px)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-[580px] h-[350px] mx-2 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-opacity duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <h3 className="text-blue-500 text-xl font-semibold">
              {testimonial.title}
            </h3>
            <p className="text-gray-600">{testimonial.description}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.imgSrc}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> */
}
