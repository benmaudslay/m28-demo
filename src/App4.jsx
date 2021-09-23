import { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
      if (darkMode) {
          setDarkMode(false)
      } else {
          setDarkMode(true)
      }
  }

  return (
    <div className={`container ${darkMode && "darkMode"}`}>
      <h1>Welcome to the bat cave</h1>
      <p>Have a nice visit</p>

      {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle mode</button> */}
      <button onClick={handleToggle}>Toggle mode</button>
    </div>
  );

  //   let page;

  //   if (darkMode) {
  //     page = (
  //   <div className="darkMode">
  //     <h1>Welcome to the bat cave</h1>
  //     <p>Have a nice visit</p>
  //   </div>
  //     );
  //   } else {
  //     page = (
  //   <div>
  //     <h1>Welcome to Heaven</h1>
  //     <p>Have a fun visit</p>
  //   </div>
  //     );
  //   }
  //   return <div className="container">{page}</div>;

  // if (darkMode) {
  //     return (
  //         <div className="darkMode">
  //             <h1>Welcome to the bat cave</h1>
  //             <p>Have a nice visit</p>
  //         </div>
  //     )
  // } else {
  //   return (
  //       <div>
  //           <h1>Welcome to Heaven</h1>
  //           <p>Have a fun visit</p>
  //       </div>
  //   )
  // }
};

export default App;
