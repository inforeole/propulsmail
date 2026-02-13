const APP_VERSION = __APP_VERSION__;

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-zinc-900">PropulsMail</h1>
        <p className="mt-2 text-zinc-500">Auto-update works!</p>
        <p className="mt-4 text-sm text-zinc-400">v{APP_VERSION}</p>
      </div>
    </div>
  );
}
