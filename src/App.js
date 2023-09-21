import React, { useState, useEffect } from "react";

export default function App() {

  const [name, setName] = useState(0);
  const [mobile, setMobile] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  let dependency = { name, mobile };

  useEffect(() => {
    console.log("UseEffect is called");
  }, [dependency.name , dependency.mobile]);
  /*
    since 'dependency' is an object you have to call the specific attributes
    you want so that the useEffect can read them, otherwise it cant read 'dependency' as an object
    it will be considered just empty like this => []
    a second solustion is to make 'dependency' an array then it can read what is inside it without
    calling them like the oject
  */ 


  return (
    <div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
      <input
      type="text"
      id="name"
      placeholder="Name"
      onChange={(e) => setName(e.target.value)}
      />
      <input
      type="text"
      id="mobile"
      placeholder="Mobile"
      onChange={(e) => setMobile(e.target.value)}
      />
      <div className="darkmode">
        <input
        type="checkbox"
        id="darkMode"
        onChange={() => setDarkMode(!darkMode)}
      />
      Enable dark mode
      </div>
    </div>
);
}