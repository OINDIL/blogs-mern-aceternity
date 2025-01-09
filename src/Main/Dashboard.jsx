const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white px-4 py-2 flex justify-between">
        <h1 className="text-2xl">Dashboard</h1>
        <button className="bg-gray-800 px-4 py-2 rounded-md">Logout</button>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <nav className="w-64 bg-gray-200 p-4 flex flex-col">
          <h2 className="text-xl">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a className="block px-4 py-2 hover:bg-gray-300" href="#">
                Dashboard
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-300" href="#">
                Settings
              </a>
            </li>
          </ul>
        </nav>
        <section className="flex-1 p-4">
          <h2 className="text-2xl">Welcome to your dashboard</h2>
          <p className="mt-4">
            This is a demo dashboard component built with React and Tailwind
            CSS.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
