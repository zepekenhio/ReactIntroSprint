import React, { useState } from "react";

import "./index.css"
const App: React.FC = () => {
  const [view, setView] = useState("pokedex");
 

  const handleInterface = (view) => {
    setView(view);
  };



  return (
    <div>

      {view === "pokedex" }
      {view === "details" }
    </div>
  );
};

export default App