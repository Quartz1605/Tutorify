import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import image from "../assets/image.jpg"



const TutorSlider = () => {
  const [tutorInfo, setTutorInfo] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/tutors/");
        const data = await response.json();
        setTutorInfo(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="px-17"> 
      <Swiper
        modules={[Navigation]}
        spaceBetween={0} 
        slidesPerView={1.9} 
        centeredSlides={true} 
        navigation={true} 
        loop={tutorInfo.length > 1} 
      >
        {tutorInfo.map((tutor, index) => (
          <SwiperSlide key={tutor.id || index} className="flex justify-center">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-blue-100 hover:shadow-xl transition duration-300 w-[90%] relative">
            {/* Enhanced image container with curved bottom edge */}
            <div className="relative h-72">
              <div className="absolute inset-0 z-10">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent z-20"></div>
              
              {/* Curved bottom shape */}
              <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white rounded-t-3xl z-30"></div>
              
              {/* Name overlay on image */}
              <div className="absolute bottom-8 left-0 right-0 text-center z-40">
                <h3 className="text-2xl font-bold text-white px-4 py-2 inline-block rounded-lg shadow-lg bg-blue-800/80 backdrop-blur-sm" style={{fontFamily:"'Rubik',sans-serif"}}>
                  {tutor.name}
                </h3>
              </div>
            </div>
            
            {/* Content area with offset to account for curve */}
            <div className="p-6 pt-8 bg-white">
              {/* Info cards */}
              <div className="flex flex-col space-y-3">
                {/* Experience */}
                <div className="flex items-center bg-blue-50 p-3 rounded-lg shadow-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">
                    <span className="text-blue-800">Experience:</span> {tutor.yoe}
                  </span>
                </div>
                
                {/* Subject */}
                <div className="flex items-center bg-blue-50 p-3 rounded-lg shadow-sm">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span className="font-medium">
                    <span className="text-blue-800">Teaches:</span> {tutor.subject}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Blue accent at bottom */}
            <div className="h-2 bg-blue-600 w-full"></div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default TutorSlider;

