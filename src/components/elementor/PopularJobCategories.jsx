import React from "react";

const popularJobs = [
  { id: "1", title: "Accounting / Finance", des: "(1 open position)", icon: "fas fa-money-bill-wave" },
  { id: "2", title: "Marketing", des: "(5 open positions)", icon: "fas fa-bullhorn" },
  { id: "3", title: "Design", des: "(7 open positions)", icon: "fas fa-paint-brush" },
  { id: "4", title: "Development", des: "(6 open positions)", icon: "fas fa-laptop-code" },
  { id: "5", title: "Human Resource", des: "(0 open positions)", icon: "fas fa-users" },
  { id: "6", title: "Project Management", des: "(1 open position)", icon: "fas fa-clipboard-list" },
  { id: "7", title: "Customer Service", des: "(4 open positions)", icon: "fas fa-headset" },
  { id: "8", title: "Health and Care", des: "(3 open positions)", icon: "fas fa-medkit" },
  { id: "9", title: "Automotive Jobs", des: "(1 open position)", icon: "fas fa-car" },
];

const PopularJobCategories = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-5 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Popular Job Categories</h2>
        <p className="text-gray-600">2020 jobs live – 293 added today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {popularJobs.map((job) => (
          <div
            key={job.id}
            className="group bg-white p-6 shadow-md  flex items-center hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center justify-center bg-gray-100 w-16 h-16 text-green-600 text-3xl  group-hover:bg-green-600 group-hover:text-white transition">
              <i className={job.icon}></i>
            </div>

            <div className="ml-6">
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition">
                {job.title}
              </h4>
              <p className="text-sm text-gray-600">{job.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularJobCategories;
