import { useEffect, useRef, useState } from "react"
import CreateAScene from "./assets/threejs-manual/creating-a-scene"
import Navigation from "./components/Navigation"

function App() {
  const [showCreateAScene, setShowCreateAScene] = useState(true);
  const [showDrawingLines, setShowDrawingLines] = useState(true);
  const drawingLinesCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(()=>{
    if (!showCreateAScene) {
      return;
    }

    return CreateAScene();
  },[showCreateAScene])

  useEffect(() => {
    if (!showDrawingLines) {
      return;
    }

    if (drawingLinesCanvasRef.current) {
      document.body.appendChild(drawingLinesCanvasRef.current);

      return () => {
        drawingLinesCanvasRef.current?.remove();
      };
    }

    const existingCanvases = new Set(document.body.querySelectorAll("canvas"));

    const loadDrawingLines = async () => {
      await import("./assets/threejs-manual/drawing-lines");

      drawingLinesCanvasRef.current = Array.from(
        document.body.querySelectorAll("canvas"),
      ).find((canvas) => !existingCanvases.has(canvas)) ?? null;
    };

    void loadDrawingLines();

    return () => {
      drawingLinesCanvasRef.current?.remove();
    };
  }, [showDrawingLines]);

  return (
    <main className="min-h-screen bg-black pl-64">
      <Navigation
        showCreateAScene={showCreateAScene}
        showDrawingLines={showDrawingLines}
        onShowCreateASceneChange={setShowCreateAScene}
        onShowDrawingLinesChange={setShowDrawingLines}
      />
    </main>
  )
}

export default App
