// import React from 'react';
// import {  CTA } from "./components";

// const Features = () => {
//   return (
//     <section className="w-full h-auto relative py-16 bg-[#00000097] lg:py-20">
//             <video autoPlay muted loop playsInline className="w-full object-cover absolute top-0 left-0 h-full -z-10">
//                 <source src="https://videos.pexels.com/video-files/6130551/6130551-hd_1280_720_30fps.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//     <div className=" text-white min-h-screen p-20 sm:p-20">
//       <div className="max-w-7xl mx-auto">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">FEATURES</h1>
//           <p className="text-lg">Discover what makes our product unique and effective</p>
//         </header>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
//             <div className="flex items-center mb-6">
//               <div className="p-4 bg-primary text-secondary rounded-full">
//                 {/* Replace with an appropriate icon */}
//                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
//                   <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
//                 </svg>
//               </div>
//               <h2 className="text-2xl font-bold ml-1">realtime monitoring</h2>
//             </div>
//             <p className="text-lg">This is a brief description of feature one. It highlights the key benefits and advantages.</p>
//           </div>
//           <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
//             <div className="flex items-center mb-4">
//               <div className="p-4 bg-primary text-secondary rounded-full">
//                 {/* Replace with an appropriate icon */}
//                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
//                   <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
//                 </svg>
//               </div>
//               <h2 className="text-2xl font-bold ml-4">Emergency Alerts</h2>
//             </div>
//             <p className="text-lg">This is a brief description of feature two. It highlights the key benefits and advantages.</p>
//           </div>
//           <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
//             <div className="flex items-center mb-4">
//               <div className="p-4 bg-primary text-secondary rounded-full">
//                 {/* Replace with an appropriate icon */}
//                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
//                   <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
//                 </svg>
//               </div>
//               <h2 className="text-2xl font-bold ml-4">Data Sharing</h2>
//             </div>
//             <p className="text-lg">This is a brief description of feature three. It highlights the key benefits and advantages.</p>
//           </div>
//           {/* Add more feature sections as needed */}
//         </div>
//           <CTA />
//       </div>
//     </div>
//  </section>

//   )
// }

// export default Features




import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import { CTA } from "./components";

const Features = () => {
  return (
    <section className="w-full h-auto relative py-16 bg-[#00000097] lg:py-20">
//   <video autoPlay muted loop playsInline className="w-full object-cover absolute top-0 left-0 h-full -z-10">
//        <source src="https://videos.pexels.com/video-files/6130551/6130551-hd_1280_720_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
//    </video>
      <div className="text-white min-h-screen p-6 sm:p-8 lg:p-20">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">FEATURES</h1>
            <p className="text-lg">Discover what makes our product unique and effective</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  {/* Replace with an appropriate icon */}
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Product Information</h2>
              </div>
              <p className="text-lg">Content about the products, their features, and how to use them.</p>
              <Link to="/product-info" className="text-secondary hover:underline">Learn more</Link>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">About Us</h2>
              </div>
              <p className="text-lg">Information about the team and the project.</p>
              <Link to="/about-us" className="text-primary hover:underline">Learn more</Link>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Account Management</h2>
              </div>
              <p className="text-lg">Users can sign in, register, and manage their profiles.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Plan Management</h2>
              </div>
              <p className="text-lg">Users can select and change plans.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Test Results</h2>
              </div>
              <p className="text-lg">Users can view their test results and health data.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Shared Data</h2>
              </div>
              <p className="text-lg">Shared health data can be viewed on a separate page without needing to log in.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">App Download Links</h2>
              </div>
              <p className="text-lg">Links to download the mobile app.</p>
            </div>

            <div className="p-6 rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30">
              <div className="flex items-center mb-6">
              <div className="p-4 bg-primary text-secondary rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 1116 0A8 8 0 012 10z" />
                    <path d="M10 4a1 1 0 00-1 1v4a1 1 0 00.293.707l2.586 2.586a1 1 0 001.414-1.414L11 8.586V5a1 1 0 00-1-1z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold ml-4">Contact Information</h2>
              </div>
              <p className="text-lg">Contact details for support and inquiries.</p>
            </div>
            <div className="mt-12">
          <CTA />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
