type NavigationProps = {
  showCreateAScene: boolean;
  showDrawingLines: boolean;
  onShowCreateASceneChange: (isSelected: boolean) => void;
  onShowDrawingLinesChange: (isSelected: boolean) => void;
};

const Navigation = ({
  showCreateAScene,
  showDrawingLines,
  onShowCreateASceneChange,
  onShowDrawingLinesChange,
}: NavigationProps) => {
  return (
    <nav className="fixed left-0 top-0 z-10 h-screen w-64 border-r-4 border-fuchsia-500 bg-black px-4 py-5 text-zinc-100 shadow-[8px_0_0_#bef264]">
      <h1 className="border-b-4 border-lime-300 px-2 pb-3 text-xl font-black uppercase tracking-wide text-white">
        Three.js Manual
      </h1>

      <label className="mt-6 flex cursor-pointer items-center gap-3 border-2 border-white bg-zinc-950 px-3 py-3 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-fuchsia-500 hover:text-black">
        <input
          checked={showCreateAScene}
          className="h-5 w-5 accent-lime-300"
          type="checkbox"
          onChange={(event) =>
            onShowCreateASceneChange(event.currentTarget.checked)
          }
        />
        <span>Create A Scene</span>
      </label>

      <label className="mt-3 flex cursor-pointer items-center gap-3 border-2 border-white bg-zinc-950 px-3 py-3 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-fuchsia-500 hover:text-black">
        <input
          checked={showDrawingLines}
          className="h-5 w-5 accent-lime-300"
          type="checkbox"
          onChange={(event) =>
            onShowDrawingLinesChange(event.currentTarget.checked)
          }
        />
        <span>Drawing Lines</span>
      </label>
    </nav>
  );
};

export default Navigation;
