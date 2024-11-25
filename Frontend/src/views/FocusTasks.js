
import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function FocusTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };


  const cancelTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1678846851706-abb02d1574aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">FocusTasks</h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    <br/>
                    <br/>
                  Ever made a to-do list just to ignore it? Yeah, we’ve all been there. FocusTasks is here to change that, helping you tackle tasks with ease.
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
                <h2 className="text-4xl font-semibold text-white"> Finish tasks and earn rewards!</h2>
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
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="Task"
                      >
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
                                    ? " line-through"
                                    : ""
                                }`}
                              >
                                <span>{task.text}</span>
                                <div className="flex gap-2">
                                  <button
                                    
                                    className={`text-xs font-bold px-4 py-1 rounded ${
                                      task.completed
                                        ? "bg-green-600 text-white"
                                        : "bg-blue-600 text-white"
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
                Earn rewards for staying focused and striking off your tasks.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
