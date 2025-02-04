import React from "react"
import { Briefcase, MapPin, DollarSign } from "lucide-react"


const jobs = [
  {
    id: "1",
    company: {
      logo: "Q",
      bgColor: "#3B82F6", // blue-500
    },
    title: "Junior Graphic Designer (Web)",
    department: "Design, Development",
    location: "New York",
    salary: "$150 - $180",
    period: "week",
    categories: ["Jobs", "Urgent"],
    isFeatured: true,
  },
  {
    id: "2",
    company: {
      logo: "M",
      bgColor: "#000000",
    },
    title: "Finance Manager & Health",
    department: "Design",
    location: "New York",
    salary: "$450 - $500",
    period: "month",
    categories: ["Jobs", "Urgent"],
    isFeatured: true,
  },
  {
    id: "3",
    company: {
      logo: "up",
      bgColor: "#22C55E", // green-500
    },
    title: "General Ledger Accountant",
    department: "Design, Marketing",
    location: "New York",
    salary: "$50 - $68",
    period: "day",
    categories: ["Jobs"],
    isFeatured: true,
  },
  {
    id: "4",
    company: {
      logo: "N",
      bgColor: "#DC2626", // red-600
    },
    title: "Assistant / Store Keeper",
    department: "Automotive Jobs, Marketing",
    location: "New York",
    salary: "$250 - $280",
    period: "week",
    categories: ["Tenders"],
    isFeatured: true,
  },
  {
    id: "5",
    company: {
      logo: "A",
      bgColor: "#111827", // gray-900
    },
    title: "Group Marketing Manager",
    department: "Customer, Marketing",
    location: "Miami",
    salary: "$800 - $850",
    period: "month",
    categories: ["Tenders"],
    isFeatured: false,
  },
  {
    id: "6",
    company: {
      logo: "A",
      bgColor: "#111827", // gray-900
    },
    title: "Product Sales Specialist",
    department: "Project Management",
    location: "New York",
    salary: "$520 - $650",
    period: "month",
    categories: ["Internships"],
    isFeatured: true,
  },
]

const JobCard = ({ job }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-8 bg-white">
    <div className="flex items-start justify-between">
      <div className="flex gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-semibold"
          style={{ backgroundColor: job.company.bgColor }}
        >
          {job.company.logo}
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold">{job.title}</h3>
            {job.isFeatured && (
              <span className="text-xs font-medium  py-1 text-green-500 rounded-full">Featured</span>
            )}
          </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {job.salary} / {job.period}
              </span>
            </div>
            <div className="flex gap-2 mt-4">
        {job.categories.map((category) => (
          <span
            key={category}
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              category === "Jobs"
                ? "bg-green-100 text-green-700"
                : category === "Urgent"
                  ? "bg-orange-100 text-yellow-500"
                  : category === "Tenders"
                    ? "bg-green-100 text-green-700"
                    : "bg-green-100 text-green-700"
            }`}
          >
            {category}
          </span>
        ))}
      </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
   
    </div>
  )
}

const FeaturedJobs = () => {
  return (
    <section className="max-w-screen-xl mx-auto p-5">
    <div className="container mx-auto py-12 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
        <p className="text-gray-600">Know your worth and find the job that qualify your life</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="text-center mt-10 pb-[85px]">
        <button className="hover:bg-white px-8 py-3 rounded-md bg-green-700 transition-colors  hover:border-1 hover:border-green-700 hover:text-green-700 text-white">
          Load More Listing
        </button>
      </div>
    </div>
    </section>
  )
}

export default FeaturedJobs




