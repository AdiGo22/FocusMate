import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function FocusSites() {
  
  
  const [sites, setSites] = useState([]); // list of sites
  const [site, setSite] = useState(""); // site URL input
  const [siteName, setSiteName] = useState(""); // site name input

 

  const addSite = () => {
    if (site.trim() === "" || siteName.trim() === "") return;

    const faviconUrl = `https://www.google.com/s2/favicons?domain=${site}&sz=64`;
    setSites([...sites, { name: siteName, url: site, favicon: faviconUrl }]);
    setSite("");
    setSiteName("");
  };

  const deleteSite = (index) => {
    const updatedSites = sites.filter((_, i) => i !== index);
    setSites(updatedSites);
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
                "url('https://images.unsplash.com/photo-1686161238563-71781eae1a58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
                  <h1 className="text-white font-semibold text-5xl">FocusSites</h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    <br/>
                   Dive into focused learning with just a click!
                   Cut mindless distractions  access all the resources you need without losing your rhythm
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
                <h2 className="text-4xl font-semibold text-white"> Bookmark and earn rewards!</h2>
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
                     Paste the Url of the resource
                    </p>
                   


                  

                    {/* FocusSites Section */}
                    <div className="mt-10">
                      <h3 className="text-lg font-semibold text-blueGray-700 mb-4">Favorite Sites</h3>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="SiteName"
                        >
                          Site Name
                        </label>
                        <input
                          type="text"
                          value={siteName}
                          onChange={(e) => setSiteName(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter site name (e.g., YouTube)"
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="SiteURL"
                        >
                          Site URL
                        </label>
                        <input
                          type="text"
                          value={site}
                          onChange={(e) => setSite(e.target.value)}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Enter site URL"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          onClick={addSite}
                          type="button"
                        >
                          Add Site
                        </button>
                      </div>

                      <div className="mt-6">
                        {sites.length > 0 && (
                          <div className="bg-white rounded-lg p-4 shadow">
                            <h3 className="text-lg font-semibold text-blueGray-700 mb-4">Saved Sites</h3>
                            <ul>
                              {sites.map((siteItem, index) => (
                                <li
                                  key={index}
                                  className="flex justify-between items-center px-4 py-2 mb-2 rounded-lg border bg-white"
                                >
                                  <div className="flex items-center">
                                    <img
                                      src={siteItem.favicon}
                                      alt={siteItem.name}
                                      className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <a href={siteItem.url} target="_blank" rel="noopener noreferrer" className="text-blueGray-600">
                                      {siteItem.name}
                                    </a>
                                  </div>
                                  <button
                                    onClick={() => deleteSite(index)}
                                    className="bg-red-500 text-white text-xs font-bold px-4 py-1 rounded"
                                  >
                                    ✖
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* End of FocusSites Section */}
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
                Earn rewards for saving 5 or more sites.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

