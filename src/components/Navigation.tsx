type NavigationProps = {
  showCreateAScene: boolean;
  onShowCreateASceneChange: (isSelected: boolean) => void;
};

const Navigation = ({
  showCreateAScene,
  onShowCreateASceneChange,
}: NavigationProps) => {
  return (
    <nav className="fixed left-0 top-0 z-10 h-screen w-64 border-r border-white/10 bg-neutral-950 px-5 py-6 text-white">
      <h1 className="text-lg font-semibold">Three.js Manual</h1>

      <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm text-neutral-200 hover:bg-white/10">
        <input
          checked={showCreateAScene}
          className="h-4 w-4 accent-green-500"
          type="checkbox"
          onChange={(event) =>
            onShowCreateASceneChange(event.currentTarget.checked)
          }
        />
        <span>Create A Scene</span>
      </label>
    </nav>
  );
};

export default Navigation;
