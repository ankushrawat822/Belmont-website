import { useState } from "react";


import Hero from './Hero'
import NavBar from './NavBar'
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
