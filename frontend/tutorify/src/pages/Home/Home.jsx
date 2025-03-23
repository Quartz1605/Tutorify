import ClassyNavbar from "./Navbar"
import TutorSlider from "../TutorSlider"

const Home = () => {
  
  return(
    <div className="bg-white flex flex-col justify-center">
    <ClassyNavbar />

    <div className="mt-23 mb-15 flex items-center justify-center text-blue-400 text-3xl font-bold ">Hello 👋🏻 </div>

    <div className="flex items-center justify-start text-3xl text-blue-500 font-bold mb-8 px-17">Meet our expert Tutors !</div>

    <div><TutorSlider /></div>

    
    
    </div>
  )
}

export default Home