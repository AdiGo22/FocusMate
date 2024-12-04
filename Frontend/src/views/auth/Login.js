/*
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import { useUser } from "UserContext";//imported the context hook

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[name,setName] = useState("");
  //const{setUserName} = useUser();
  const baseUrl = "http://localhost:4000"; // Adjust the base URL as needed

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      // Prepare the data to be sent in the request body
      const data = { name,email, password };
  
      // Send the login request
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      // Handle response
      if (response.ok) {
        const result = await response.json();
        alert("Login successful!");
  
        // Optionally store the token in cookies or local storage if needed
        document.cookie = `token=${result.token}; path=/;`;
  
        // Pass the name to the welcome page
        history.push("/Welcome", { name: result.name });  // Pass the 'name' in the route state
      } else {
        alert("Wrong Details or Signup first!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">Log in </h6>
              </div>
            
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Enter credentials</small>
              </div>
              <form onSubmit={handleLogin}>
              <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="name">Name</label>
                  <input type="text" id="name" value={name}
                   onChange={(e) => setName(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Name" required />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" required />
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="password">Password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" required />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">Remember me</span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
                   Log In
                  </button>
                </div>
              </form>
             
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a href="#pablo" onClick={(e) => e.preventDefault()} className="text-blueGray-200">
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to="/auth/register" className="text-blueGray-200">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

*/
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [name, setName] = useState(""); // Added name handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const baseUrl = "http://localhost:4000"; // Ensure this matches your backend's base URL
  const baseUrl = "https://focusmate-backend.onrender.com"; //for deployment on render (4/12)

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const data = { name, email, password };
    console.log("Sending data to server:", data);
  
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Assuming the server returns a JSON response on success
        //const result = await response.json();
        await response.text();
        console.log("Login successful:");
        alert("Login successful!");
  
        // Store token and navigate to the welcome page
        //document.cookie = `token=${result.token}; path=/;`;
         
         document.cookie = `token=sampleToken; path=/`;

        //history.push("/Welcome", { name: result.name });
        history.push("/Welcome",{name});
      } else {
        // Handle non-OK responses
        const contentType = response.headers.get("Content-Type");
        let errorMessage;
  
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.message || "Something went wrong!";
        } else {
          errorMessage = await response.text(); // Handle plain text response
        }
  
        alert(errorMessage || "Wrong Details or Signup first!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">Log in</h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Enter your credentials</small>
              </div>
              <form onSubmit={handleLogin}>
                {/* Name Field */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>

                {/* Email Field */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    required
                  />
                </div>

                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#forgot-password"
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200"
              >
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to="/auth/register" className="text-blueGray-200">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
