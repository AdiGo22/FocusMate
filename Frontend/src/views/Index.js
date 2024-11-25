import React from "react";
//import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { useUser } from "UserContext";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Welcome() {
    const location = useLocation();
   // const {userName} = useUser();//access user from context
    const name = location.state?.name||"";


  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Welcome {name|| ""} </h2>
              
             
             
            
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              <h3 className="font-semibold text-lg text-blueGray-500">FocusMate - Your Best Mate for focused studying!</h3> <br/>
               Sign yourself in or Click on the button below to get started. <br/>
             
              </p>
              <div className="mt-12">
                <a
                  href="/auth/register"
                  target=""
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get Started
                </a>
                
              </div>
              <div>
               
               {/*<img 
               className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-6/12 max-h-860px ml-auto"
               src ="/assets/img/pattern_react.png">

               </img>*/}
              <div
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-6/12 max-h-860px ml-auto "
            style={{
              backgroundImage:
                "url('https://i.pinimg.com/enabled_lo/564x/23/4e/63/234e63b87ec9f8320a756bdaf5d9c498.jpg')",
              height:'900px',
              width: '500px',
              top: '70px',
              
             
              backgroundRepeat:"no-repeat"
            }}
          >
           
          </div>
         


              </div>
            </div>
          </div>
        </div>

        
      </section>
      <Footer/>
      </>
  )
}