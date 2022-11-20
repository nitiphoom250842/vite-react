import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageHome } from "./pages/home/page/home.page";
import { PageLogin } from "./pages/login/page/login.page";
import { PageContent } from "./pages/content/page/content.page";
import { Page404 } from "./pages/page404/page/page404.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/content" element={<PageContent />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
