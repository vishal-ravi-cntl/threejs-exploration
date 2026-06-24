import { useEffect, useState } from "react"
import CreateAScene from "./assets/threejs-manual/creating-a-scene"
import Navigation from "./components/Navigation"

function App() {
  const [showCreateAScene, setShowCreateAScene] = useState(true);

  useEffect(()=>{
    if (!showCreateAScene) {
      return;
    }

    return CreateAScene();
  },[showCreateAScene])

  return (
    <main className="min-h-screen bg-black pl-64">
      <Navigation
        showCreateAScene={showCreateAScene}
        onShowCreateASceneChange={setShowCreateAScene}
      />
    </main>
  )
}

export default App
