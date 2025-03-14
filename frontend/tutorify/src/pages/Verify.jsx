import { useState } from "react" 
import { useNavigate } from "react-router-dom";

const Verify = ({isOpen,onClose,email}) => {

  const [otp,setOtp] = useState("")
  const navigate = useNavigate()

  const verifyotp = async () => {

    try{
      const response = await fetch("http://127.0.0.1:8000/auth/verify-otp/",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify({
          "email" : email,
          "otp" : otp
        })
      })

      const data = await response.json()
      
      if(response.ok){
        
        navigate("/home")
        
      }
      else{
        alert("Error :" + data.message)
      }
    }
    
    catch(error){
      alert("Error " + error)
    
    }
    
    
    
    }
    

  
  
  
  
  if(!isOpen){
    return null
  }

  return(
    <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-md">
      <div className="bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Enter OTP</h2>
          <button onClick={onClose} className="text-[#F9429E] hover:cursor-pointer">✖</button>
        </div>

        <input
          type="password"
          placeholder="Enter OTP"
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white bg-opacity-80 backdrop-blur-sm"
          onChange={(e) => {setOtp(e.target.value)}}
        />
        <div className="text-sm ml-2 mt-[6px] text-[#959595]">OTP stays valid for 5 minutes, you should request for new one after that.</div>

        

        

        <div className="flex items-center justify-center">
          <button className="mt-8 bg-blue-500 text-amber-50 px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:cursor-pointer" onClick={verifyotp}>Verify</button>
        </div>
      </div>
    </div>
  )




}

export default Verify