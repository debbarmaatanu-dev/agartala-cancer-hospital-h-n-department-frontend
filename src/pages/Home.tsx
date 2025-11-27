import React, {useEffect, useState} from 'react';
import landingImage from '@/assets/2.png';
import searchImage from '@/assets/1.png';
import addPatientImage from '@/assets/3.png';
import {formatDate, formatTime} from '@/utils/homeUtils';

export const Home = (): React.JSX.Element => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleAddPatient = () => {
    console.log('Navigate to add patient');
    // Add your navigation logic here
  };

  const handleSearchPatient = () => {
    console.log('Navigate to search patient');
    // Add your navigation logic here
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main
        className="flex grow items-center justify-center px-4 py-6 md:py-12 lg:px-8"
        role="main">
        <div className="w-full max-w-6xl">
          <article className="overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* Header Section - Split Design */}
            <header className="grid grid-cols-1 bg-linear-to-br from-blue-100 via-purple-50 to-blue-100 md:grid-cols-2">
              {/* Left Box - Image */}
              <div className="flex items-center justify-center p-8 md:p-12 lg:p-16">
                <div className="h-full w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={landingImage}
                    alt="Medical Team"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Right Box - Text Content */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                <h1 className="mb-3 cursor-text text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
                  Atal Bihari Vajpayee Regional Cancer Centre
                </h1>
                <p className="mb-3 cursor-text text-xl font-semibold text-blue-600 md:text-2xl">
                  Head & Neck Department
                </p>
                <p className="mb-6 cursor-text text-base text-gray-600 md:text-lg">
                  Patient Record Management System
                </p>
                <div className="inline-flex w-70 cursor-text rounded-full bg-blue-600 px-6 py-2.5 text-white shadow-md">
                  <time className="text-sm font-medium md:text-base">
                    {formatDate(currentDateTime)}
                    {' - '} {formatTime(currentDateTime)}
                  </time>
                </div>
              </div>
            </header>

            {/* Key Features Section */}
            <section className="mt-10 px-6 pt-12 pb-8 md:px-10 md:pb-12 lg:px-12 lg:pb-16">
              <h2 className="mb-8 text-center text-2xl font-bold text-gray-700 md:mb-10 md:text-3xl lg:text-4xl">
                KEY FEATURES
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
                {/* Add New Patient Card */}
                <button
                  onClick={handleAddPatient}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
                  aria-label="Add new patient record">
                  <div className="h-48 w-full overflow-hidden md:h-56 lg:h-64">
                    <img
                      src={addPatientImage}
                      alt="Healthcare professional with tablet"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col items-start p-5 text-left text-white md:p-6">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Add New Patient Record
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90 md:text-base">
                      Register new patients with comprehensive demographic and
                      medical information in the system.
                    </p>
                  </div>
                </button>

                {/* Search Patient Card */}
                <button
                  onClick={handleSearchPatient}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-linear-to-br from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-teal-300 focus:outline-none"
                  aria-label="Search for existing patient">
                  <div className="h-48 w-full overflow-hidden md:h-56 lg:h-64">
                    <img
                      src={searchImage}
                      alt="Medical records and data"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col items-start p-5 text-left text-white md:p-6">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      Search Patient Records
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90 md:text-base">
                      Quickly find and access existing patient records with
                      streamlined digital search capabilities.
                    </p>
                  </div>
                </button>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};
