import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";

const navItems = [
  { title: "Home 1", href: "https://dianeo.sparktechwp.com/", active: true },
  { title: "Jobs", href: "https://dianeo.sparktechwp.com/job-type/full-time/" },
  { title: "Tenders", href: "https://dianeo.sparktechwp.com/job-type/tenders/" },
  { title: "Internships", href: "https://dianeo.sparktechwp.com/job-type/internships/" },
  { title: "About", href: "https://dianeo.sparktechwp.com/job-type/about/" },
  {
    title: "Opportunity",
    href: "https://dianeo.sparktechwp.com/job-type/opportunity/",
    hasChildren: true,
  },
  { title: "Employers", href: "https://dianeo.sparktechwp.com/employers-2/" },
  {
    title: "Candidates",
    href: "https://dianeo.sparktechwp.com/job-type/candidates/",
  },
  {
    title: "Pricing",
    href: "https://dianeo.sparktechwp.com/job-type/pricing/",
  },
  {
    title: "Contact",
    href: "https://dianeo.sparktechwp.com/job-type/contact/",
    hasChildren: true,
  },
];

export function Sidebar({ isOpen, onClose }) {
    const [activeLink, setActiveLink] = useState("Home 1"); 

    const handleNavClick = (title) => {
      setActiveLink(title);
    };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 transition-opacity lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-40 h-full w-[350px] transform overflow-y-auto bg-zinc-900 transition-transform duration-200 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="header-offcanvas bg-white shadow-md">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-4">
                <div className="logo">
                  <a href="https://dianeo.sparktechwp.com/">
                    <img
                      src="https://dianeo.sparktechwp.com/wp-content/uploads/2024/07/small-one-logo-01-01.png"
                      alt="PebbleDesk"
                      className="h-10"
                    />
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://dianeo.sparktechwp.com/login-register/"
                    className="btn-menu-account text-gray-600 hover:text-gray-900 transition"
                  >
                    <LiaUserSolid size={18} className="text-[#202124]" />
                  </a>

                  <button
                    className="btn-toggle-canvas text-gray-600 hover:text-gray-900 transition"
                    onClick={onClose}
                  >
                    <IoClose size={18} className="text-[#202124]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1  p-5">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => handleNavClick(item.title)}
              className={`group flex items-center justify-between rounded py-2 px-5 text-sm leading-7 ${
                activeLink === item.title ? "bg-zinc-700 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item.title}
              {item.hasChildren && <HiChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100" />}
            </a>
          ))}
          </nav>

          {/* Footer Section */}
          <div className="border-t border-zinc-800 p-4">
            <button className="w-full bg-green-600 font-medium hover:bg-green-700 text-white py-2 rounded">
              Post Job
            </button>

            <div className="mt-6 space-y-4 text-sm text-zinc-400">
              <div>
                <div className="font-medium">Call us</div>
                <div className="mt-1">123 456 7890</div>
              </div>

              <div>
                <div>
                  258 Queensbury Street, North Melbourne VIC 3051, Australia
                </div>
                <div className="mt-1">support@pebble.com</div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <FaFacebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <FaTwitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  <FaInstagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="w-[350px] bg-zinc-900">
        </div>
      </div>
    </>
  );
}



{/* Header with search and close button */}
          {/* <div className="flex items-center justify-between border-b border-zinc-800 p-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded bg-zinc-800 px-3 py-2 text-sm text-white placeholder:text-zinc-400"
            />
            <button
              onClick={onClose}
              className="ml-2 rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div> */}