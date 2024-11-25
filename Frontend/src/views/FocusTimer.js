import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function FocusTimer() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Timer states
  const [task, setTask] = useState(""); // for particular task
  const [timeLeft, setTimeLeft] = useState(30 * 60); // default to 30 min
  const [isRunning, setIsRunning] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30); // minutes

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const cancelTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Timer useEffect
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert("Take some rest");//reward++
      setIsRunning(false); // mark the setIsRunning flag to false.
    }
    // clear the interval memory to unmount the component
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Effect to update timeLeft when timerDuration changes
  useEffect(() => {
    setTimeLeft(timerDuration * 60); // set timeLeft based on selected duration
    resetTimer(); // reset the timer whenever the duration changes
  }, [timerDuration]);

  // Convert time into minutes and seconds
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Start/stop timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(timerDuration * 60); // reset to selected duration
  };


  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://plus.unsplash.com/premium_photo-1725075086634-0037c3040c54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">FocusTimer</h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    <br />
                    <br />
                     Get ready to study like a champ and see just how long you can sit without distractions. It’s time to turn those hours into victory laps!
                  </p>
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
            </div>
          </div>
        </section>
        

        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Enter the tasks to focus on for today :)
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="Task">
                        Task
                      </label>
                      <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="What to-do today??"
                      />
                    </div>
                    <div className="container mx-auto px-4 mt-12">
            
            <div className="flex justify-center items-center mb-4">
              <select
                className="border-2 border-gray-300 rounded-lg p-2 text-blueGray-600"
                onChange={(e) => setTimerDuration(Number(e.target.value))} // Update timerDuration
              >
                <option value={30}>30 Minutes</option>
                <option value={60}>60 Minutes</option>
                <option value={90}>90 Minutes</option>
                <option value={120}>120 Minutes</option>
                <option value={180}>180 Minutes</option>
              </select>
              <button
                className="bg-blueGray-800 text-white ml-2 active:bg-blueGray-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={resetTimer}
              >
                Reset Timer
              </button>
              <button
                className="bg-blueGray-800 text-white ml-2 active:bg-blueGray-600 text-sm font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={toggleTimer}
              >
                {isRunning ? "Pause" : "Start"}
              </button>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold text-blueGray-800">{formatTime(timeLeft)}</p>
            </div>
          </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={addTask}
                        type="button"
                      >
                        Add Task
                      </button>
                    </div>

                    <div className="mt-6">
                      {tasks.length > 0 && (
                        <div className="bg-white rounded-lg p-4 shadow">
                          <h3 className="text-lg font-semibold text-blueGray-700 mb-4">Today's Tasks</h3>
                          <ul>
                            {tasks.map((task, index) => (
                              <li
                                key={index}
                                className={`flex justify-between items-center px-4 py-2 mb-2 rounded-lg border ${
                                  task.completed
                                    ? "bg-green-200 text-green-800 line-through"
                                    : "bg-white"
                                }`}
                              >
                                <span>{task.text}</span>
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => completeTask(index)}
                                    className={`text-xs font-bold px-4 py-1 rounded ${
                                      task.completed
                                        ? "bg-green-600 text-white"
                                        : "bg-green-600 text-white"
                                    }`}
                                  >
                                    ✔
                                  </button>
                                  <button
                                    onClick={() => cancelTask(index)}
                                    className="bg-red-500 text-white text-xs font-bold px-4 py-1 rounded"
                                  >
                                    ✖
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">Get Rewards</h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Earn rewards for completing your focused study.
              </p>
            </div>
          </div>
        
        </section>
      </main>
      <Footer />
    </>
  );
}
