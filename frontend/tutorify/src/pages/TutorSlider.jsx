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
    <div className="px-17"> {/* Adds space from screen edges */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={0} // No gap between slides
        slidesPerView={1.9} // Makes sure each slide takes full space with slight overlap
        centeredSlides={true} // Centers active slide
        navigation={true} // Show navigation arrows
        loop={tutorInfo.length > 1} // Enable loop if more than 1 tutor
      >
        {tutorInfo.map((tutor, index) => (
          <SwiperSlide key={tutor.id || index} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg py-6 px-4 text-center border border-gray-200 hover:shadow-xl transition w-[90%]">
              <img
                src="https://i.ibb.co/BV83kmpx/tutor-UP-1.jpg"
                alt={tutor.name}
                className="w-full h-[400px] rounded-3xl object-cover"
              />
              <div className="text-3xl font-semibold text-yellow-400 mt-4" style={{fontFamily:"'Rubik',sans-serif"}}>{tutor.name}</div>
              
              <div className="flex items-center justify-between mt-4 px-4">
                <span className="text-xl font-bold text-green-600">Experience: {tutor.yoe}</span>
                <span className="text-xl font-bold text-green-600">
                  Teaches: <b className="bg-blue-600 py-2 px-4 rounded-xl text-white">{tutor.subject}</b>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};

export default TutorSlider;

