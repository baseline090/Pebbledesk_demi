import React from "react";
import logo from "../../assets/desk.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import Banner from "../Banner/banner";
import { LuUserRound } from "react-icons/lu";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#e9eefa]">
      <section className="max-w-screen-xl mx-auto p-5">
        <div className="flex justify-between items-center">
          <section className="w-[50%] xl:w-[68%]">
            <div className="max-w-full h-auto xl:max-w-[24%]">
              <img src={logo} alt="Logo" />
            </div>

            <nav className="mt-[7px] hidden xl:block">
              <ul className="flex list-none">
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Home
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    About
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Opportunity
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Employers
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Candidates
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mr-[22px]">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px] py-[12px] hover:text-[#0c720d]"
                  >
                    Blog
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    className="text-[#202124] text-[15px]  flex items-center gap-2 hover:text-[#0c720d]"
                  >
                    Contact
                    <RiArrowDropDownLine size={20} />
                  </a>
                  <ul className="absolute left-0 hidden group-hover:block bg-white p-2 rounded-md shadow-lg list-none mt-2">
                    <li className="py-2 px-3">
                      <a
                        href="#"
                        className="text-[#333] block hover:bg-[#f1f1f1]"
                      >
                        Important Contacts
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </section>

          <section className="items-center gap-5  xl:flex hidden">
            <button className="w-[165px] h-[50px] text-[#0c720d] bg-[#0c720d12] font-bold text-[15px] hover:text-white hover:bg-[#127512] rounded-[6px] py-2 px-[30px]">
              Login/Register
            </button>
            <button className="h-[50px] text-white bg-[#0c720d] font-bold text-[15px] rounded-[8px] py-2 px-[40px]">
              Job Post
            </button>
            <IoMdNotificationsOutline size={20} className="mb-[7px]" />
          </section>

          <section className="flex items-center gap-5 xl:hidden ">
            <LuUserRound className="inline-block leading-[1] text-[24px] cursor-pointer" />
            <IoMdNotificationsOutline className="inline-block leading-[1] text-[24px] cursor-pointer" />
            <HiBars3BottomRight className="inline-block leading-[1] text-[24px] cursor-pointer" />
          </section>
        </div>

        <Banner />
      </section>
      </div>
    </>
  );
};

export default Navbar;

// import React from "react";
// import styles from "./Navbar.module.css";
// import logo from "../../assets/desk.jpg";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Banner from "../Banner/banner";

// const Navbar = () => {
//   return (
//     <>
//     <section className={styles.mainContainer}>
//       <div className={styles.navbarContainer}>
//         <section className={styles.leftContainer}>
//           <div className={styles.logoContainer}>
//             <img src={logo} alt="Logo" />
//           </div>

//           <nav className={styles.mainMenu}>
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Opportunity</a>
//               </li>
//               <li>
//                 <a href="#">Employers</a>
//               </li>
//               <li>
//                 <a href="#">Candidates</a>
//               </li>
//               <li>
//                 <a href="#">Pricing</a>
//               </li>
//               <li>
//                 <a href="#">Blog</a>
//               </li>
//               <li className={styles.dropdown}>
//                 <a href="#" className={styles.dropdownToggle}>
//                   Contact
//                   <RiArrowDropDownLine size={20} />
//                 </a>
//                 {/* <ul className={styles.dropdownMenu}>
//                   <li className={styles.menuItem}>
//                     <a href="#">Important Contacts</a>
//                   </li>
//                 </ul> */}
//               </li>
//             </ul>
//           </nav>
//         </section>
//         <section className={styles.rightContainer}>
//           <div className={styles.loginRegisterBtn}>
//             <button className={styles.loginBtn}>Login/Register</button>
//           </div>
//             <button className={styles.jobpostBtn}>Job Post</button>
//             <IoMdNotificationsOutline
//               size={20}
//               className={styles.notificationIcon}
//             />
//         </section>
//       </div>
//     </section>

//     <Banner/>

//     </>
//   );
// };

// export default Navbar;
