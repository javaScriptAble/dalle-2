import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import { Navbar } from "./components";

//Pages
import { Home, CreateImage, ErrorPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-image" element={<CreateImage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
