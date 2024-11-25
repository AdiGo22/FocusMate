import React, { useState, useEffect } from "react";
import Footer from "components/Footers/Footer.js";
import Navbar from "components/Navbars/AuthNavbar.js";
const FocusType = () => {
  const [text, setText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const startTypingTest = () => {
    setText("");
    setIsActive(true);
    setResult(null);
    setTimeLeft(30);
  };

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setResult(`Your typing speed is ${calculateSpeed()} WPM`);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const calculateSpeed = () => {
    const words = text.trim().split(/\s+/).length;
    return Math.round((words / 30) * 60); // Adjust for the 30-second test
  };

  return (
    <>
    <br/>
    <br/>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 p-5 lg:p-10">
      <h3 className="text-lg font-semibold text-blueGray-700 mb-4">FocusType: Typing Test</h3>
      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
        Test your typing skills and see how fast you can go in just 30 seconds!
      </p>
      <div className="flex flex-col">
        <button
          onClick={startTypingTest}
          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Start Typing Test
        </button>
        {isActive && <p className="text-xl mt-4">{timeLeft} seconds left!</p>}
        <textarea
          value={text}
          onChange={handleChange}
          disabled={!isActive}
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring mt-4"
          rows="5"
          placeholder={isActive ? "Start typing..." : "Test completed!"}
        />
        {result && <p className="mt-4 text-green-600">{result}</p>}
      </div>
    </div>
    </>
  );
};

export default function FocusTyping() {
  return (
    <>
    <Navbar />
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1516147697747-02adcafd3fda?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">FocusType</h1>

                
        
                <p className="mt-4 text-lg text-blueGray-200">Test your typing skills and improve your speed with our quick typing test!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pb-20 relative block bg-blueGray-800">
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white"> Focus longer and earn rewards!</h2>
              </div>
              <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
              
        <div className="container mx-auto px-4">
       
          <div className="flex flex-wrap justify-center">
        
            
            <div className="w-full lg:w-6/12 px-4">
              <FocusType />
            </div>
             
          </div>
        </div>
       
      </section> 

    
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Get Rewards</h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Take your speed to more than 40 WPM and earn rewards!
              </p>
            </div>
          </div>
          </div>

         
        </section>

      </main>
      <Footer/>
    </>
  );
}
