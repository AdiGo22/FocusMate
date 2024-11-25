/*eslint-disable*/
import React,{useState}from "react";
import { Link } from "react-router-dom";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

//import FocusTasks from "./FocusTasks";

export default function Index() {

    const [quote, setQuote] = useState({
      text: 'Taking a step back can often be the quickest way forward.',
      author: 'Tim Fargo'
    });
  
    const fetchQuote = async () => {
      const category = 'inspirational'||'happy';
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'nOS90qSI1YM4N+pIL1tQGg==W5ODRVGrxZLpg5tP',
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data && data.length > 0) {
          const newQuote = data[0];
          setQuote({ text: newQuote.quote, author: newQuote.author });
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote({
          text: 'Oops! Something went wrong. Please try again later.',
          author: ''
        });
      }
    };
  
    const location = useLocation();
    const name = location.state?.name||"";


  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Welcome {name || ""}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              <h3 className="font-semibold text-lg text-blueGray-500">Focusmate : Your Best Mate for focused studying!</h3> 
              <br/>
              Together, we’ll tackle distractions and help you reach your goals <br/>
              Because why let distractions win when you can level up your focus?
              </p>
              <div className="mt-12">
                <a
                  href="#tools-section"
                  target=""
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
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

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
       

        <div id="tools-section" className=" container mx-auto overflow-hidden pb-20">
         
             

          <div className=" flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="./FocusTasks"
                    target="_blank"
                  >
                    
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 ">
                    <img 
                    alt ="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                     src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fstFS44xt5Dh7rCSEu31-_nbZFNBL5cHqg&s"
                     />
                      <p className="text-lg text-white mt-4 font-semibold">
                       FocusTasks
                      </p>
                    </div>
                  </a>
                  <a
                    href="./FocusType"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_WneLEdW-g56sY74PgarK1GrCm0iFZu1xg&s"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        FocusType
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                  
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="./FocusTimer"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://media.istockphoto.com/id/1263647945/vector/sand-clock-icon-logo-on-white-background-flat-design-vector-illustration.jpg?s=170667a&w=0&k=20&c=lbrMxYzwAA28x-NfeBaCrA2LWmOyANzu8tG2Q7xE2Fg="
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                       FocusTimer
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    
                  </a>
                  <a
                    href="./FocusSites"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://cdn-icons-png.flaticon.com/512/5501/5501982.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        FocusSites
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                FocusTools
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"> 
                FocusTools equips you with everything you need to stay on track and boost your efficiency.
                Each tool is designed to help you cut distractions and sharpen your focus. <br/>
                
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Get organized, stay focussed, crush goals, and beat distractions all in one place!
              </p>
           
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12  px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i class="fas fa-quote-left text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Stay Motivated, Mate!
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                
                A little motivation to keep you going strong. Distractions are sneaky, but you're sneakier.<br/>
                 Let’s skip the fluff and get things done!
                </p>
             
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
            <div id="quotebox">

<div className="quote_symbol">
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 500 500"
    enableBackground="new 0 0 500 500"
    xmlSpace="preserve"
  >
    <g>
      <path d="M385.4,352.3c-2.4,0-4.2,0-6,0c-33.7,0-67.3,0-101,0c-6.5,0-6.6,0-6.6-6.6c0-26.7-0.6-53.3,0.3-80c0.5-15,2.4-30.3,5.7-44.9c8.4-36.9,32.4-59.1,68.8-67.9c11.3-2.7,22.9-3.8,34.4-5.7c3.6-0.6,4.8,1,4.7,4.3c-0.1,9,0,18,0,27c0,2.5-0.4,4.5-3.7,4.6c-23.7,1.2-35.9,15.6-41.6,36.6c-1.1,4.2-1.8,8.5-2.4,12.7c-0.9,6.3-0.8,6.3,5.8,6.3c11.7,0,23.3,0,35,0c7,0,7,0,7,7.3c0,33.2,0,66.3,0,99.5C385.8,347.5,385.6,349.4,385.4,352.3z"/>
      <path d="M117.1,351.9c-0.1-1.8-0.3-3.5-0.3-5.1c0-28-0.6-56,0.3-84c0.5-14.7,2.6-29.6,6.1-43.9c8.8-35.8,32.7-57.1,67.9-65.9c12.5-3.1,25.4-4.6,39.3-7.1c0,6.2,0,11,0,15.7c0,5.8,0.2,11.7-0.2,17.5c-0.1,1.4-1.8,3.6-3.1,3.8c-25.9,4.2-37.3,15-42.8,40.9c-0.6,2.8-1,5.6-1.4,8.4c-0.9,6.5-0.9,6.6,6,6.6c12.3,0,24.7,0.1,37,0c3.1,0,4.5,0.9,4.5,4.2c-0.1,35.5-0.1,71-0.1,106.5c0,0.7-0.2,1.3-0.4,2.4C192.4,351.9,154.9,351.9,117.1,351.9z"/>
    </g>
  </svg>
</div>

<div id="quote">
        <h1>"{quote.text}"</h1>
        <small>- {quote.author}</small>
      </div>

</div>
            </div>
            </div> 
            <div className="px-4 py-4">
                <button className ="px-6 py-4 text-white font-bold  rounded outline-none focus:outline-none
                  bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg  
                ease-linear transition-all duration-150"

                
                 onClick={fetchQuote}
                  
                  >
                 Motivate Me!
                </button>
                
             </div>
 
        </div>

        
      </section>

     

     

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                🥇
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
              Stay Focused, Mate, and Win Big!
              </h3>
              <br/>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Every task completed brings you closer to unlocking awesome rewards. <br/>
              Stay focussed mate, and watch the rewards roll in.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="#tools-section"
                  
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
