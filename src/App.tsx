import { useEffect } from "react"
import CreateAScene from "./assets/threejs-manual/creating-a-scene"

function App() {

  useEffect(()=>{
    CreateAScene();
  },[])
  return null
}

export default App
