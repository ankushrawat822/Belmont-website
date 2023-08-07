import { useState } from "react";


import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
    </>
  );
}

export default App;
