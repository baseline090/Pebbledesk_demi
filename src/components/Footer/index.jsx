import React from 'react';

const FooterSection = () => {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* {/ Logo and Contact Info Column /} */}
          <div className="lg:col-span-1">
            <img
              src="https://dianeo.sparktechwp.com/wp-content/uploads/2021/03/primary-logo-2-01-01.png.webp"
              alt="Pebbledesk Logo"
              width={2960}
              height={726}
              className="mb-4"
            />
            <div className="space-y-2">
              <h3 className="text-[18px] text-[#202124] font-medium">Call us</h3>
              <p className="text-[#127512] text-[18px] font-medium">123 456 7890</p>
              <p className="text-[#696969]">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
              <p classname="text-[#696969]">support@superio.com</p>
            </div>
          </div>

          {/* {/ For Candidates Column /} */}
          <div className="lg:col-span-1">
            <h3 className="text-[18px] text-[#202124] font-medium mb-6">For Candidates</h3>
            <ul className="space-y-3 text-[14px] text-[#696969]">
              <li>
                <a href="#" className="footer-item">Browse Jobs</a>
              </li>
              <li>
                <a href="#" className="footer-item">Candidate Dashboard</a>
              </li>
              <li>
                <a href="#" className="footer-item">Job Alerts</a>
              </li>
              <li>
                <a href="#" className="footer-item">My Bookmarks</a>
              </li>
            </ul>
          </div>

          {/* {/ For Employers Column /} */}
          <div className="lg:col-span-1">
            <h3 className="text-[18px] text-[#202124] font-medium mb-6">For Employers</h3>
            <ul className="space-y-3 text-[14px] text-[#696969]">
              <li>
                <a href="#" className="footer-item">All Employers</a>
              </li>
              <li>
                <a href="#" className="footer-item">Employer Dashboard</a>
              </li>
              <li>
                <a href="#" className="footer-item">Browse Candidates</a>
              </li>
              <li>
                <a href="#" className="footer-item">Submit Job</a>
              </li>
              <li>
                <a href="#" className="footer-item">Job Packages</a>
              </li>
            </ul>
          </div>

          {/* {/ About Us Column /} */}
          <div className="lg:col-span-1">
            <h3 className="text-[18px] text-[#202124] font-medium mb-6">About Us</h3>
            <ul className="space-y-3 text-[14px] text-[#696969]">
              <li>
                <a href="#" className="footer-item">Contact Us</a>
              </li>
              <li>
                <a href="#" className="footer-item">About Us</a>
              </li>
              <li>
                <a href="#" className="footer-item">Packages</a>
              </li>
              <li>
                <a href="#" className="footer-item">FAQ</a>
              </li>
            </ul>
          </div>

          {/* {/ Helpful Resources Column /} */}
          <div className="lg:col-span-1">
            <h3 className="text-[18px] mb-6 text-[#202124] font-medium">Helpful Resources</h3>
            <ul className="space-y-3 text-[14px] text-[#696969]">
              <li>
                <a href="#" className="footer-item">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="footer-item">Privacy Center</a>
              </li>
              <li>
                <a href="#" className="footer-item">Security Center</a>
              </li>
              <li>
                <a href="#" className="footer-item">Accessibility Center</a>
              </li>
            </ul>
          </div>
        </div>

        {/* {/ Copyright /} */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-[#696969] text-sm">© 2021 Superio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;