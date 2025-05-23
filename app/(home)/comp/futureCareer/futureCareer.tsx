

import Link from "next/link";

const EnrollmentSchedule = () => {
  return (
    <div className="mt-16 mb-24 md:mt-36 lg:mt-40 lg:mb-44 uws:mt-48  flex items-center justify-center p-4">
      <div className="bg-violet-50 rounded-2xl w-full max-w-3xl p-6 shadow-md">
        <h2 className="text-center text-xl md:text-2xl font-bold text-violet-700 mb-8 jaro">
          Batch Schedule
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Start Date */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50">
            <div className="bg-white p-2 rounded-xl shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days text-green-600 w-8 h-8"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Enrollment Start</p>
              <p className="text-md  text-gray-800 font-semibold">May 25, 2025</p>
            </div>
          </div>

          {/* End Date */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50">
            <div className="bg-white p-2 rounded-xl shadow">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days-icon lucide-calendar-days text-red-600 w-8 h-8"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">Enrollment End</p>
              <p className="text-md  text-gray-800 font-semibold">June 25, 2025</p>
            </div>
          </div>
        </div>

    <div className="p-4 rounded-xl hover:bg-magenta bg-violet text-center text-white mb-4">
         
            <div>
              <p className="text-xl font-semibold jaro">Class Start</p>
              <p className="text-lg   font-semibold ">July 01, 2025</p>
            </div>
          </div>
       

        {/* Button */}
        <div className="flex justify-center">
          <Link href='/courses'
          
            className="hover:bg-magenta bg-violet text-white text-lg jaro px-6 py-2 rounded-xl font-medium"
          >
           All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSchedule;