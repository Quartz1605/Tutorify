import React from "react";
import students from "./assets/students.svg"


const LandingPage = () => {

  return (
    <>
      <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-amber text-md py-3 dark:bg-neutral-800 h-[75px] border-1">
        <nav class="max-w-[85rem] w-full mx-auto px-2 sm:flex sm:items-center sm:justify-between">
          <div class="flex items-center justify-between">
            <img src="https://cdn-icons-png.flaticon.com/512/5402/5402751.png" className="w-15 h-15 mr-2"></img>
            <a class="flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">
              Tutorify
            </a>
            <div class="sm:hidden">
              <button type="button" class="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                <span class="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div id="hs-navbar-example" class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
            <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <button class="font-medium text-blue-500 focus:outline-hidden bg-white px-6 py-3 rounded-lg border-1 border-black hover:cursor-pointer hover:text-white hover:bg-blue-500 hover:border-blue-500" href="#" aria-current="page">Log in</button>


              <button class="bg-blue-500 font-medium px-6 py-3 rounded-lg hover:text-white focus:outline-hidden text-white focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500 hover:cursor-pointer hover:bg-blue-700" href="#">Join Us !</button>

            </div>
          </div>
        </nav>
      </header>

      <div className="flex items-center justify-center px-25">
        <div className="flex-col items-center justify-center">
          <div className="text-[45px] font-bold mt-10" style={{ fontFamily: 'sans-serif' }}>Smart Learning Starts with the Right <b className="text-blue-500">Tutor</b>.</div>
          <div className="text-lg">Trusted by more than <b className="text-blue-500">Lakhs</b> of Parents.</div>
          <div className="mt-10">
            <div className="absolute mt-3 pl-2 ">
              +91
            </div>
            <input type="text" className="border-2  px-12 py-2.5 w-[645px] rounded-lg outline-none" placeholder="Enter your mobile number"></input>
            <div className="text-sm ml-2 mt-[6px] text-[#959595]">
              You'll receive an OTP for verification.
            </div>
            
              <button className="bg-blue-500 justify-center text-center mt-9 py-4 px-8 rounded-xl text-white font-bold ml-60 hover:cursor-pointer hover:bg-blue-700">
              Welcome Learner !
              </button>
            

          </div>

        </div>
        <div className="mt-10">
          <img src={students} className="h-[400px] w-[800px]"></img>
        </div>
      </div>


    </>
  )




}

export default LandingPage
