import Home from "./pages/Home";
import WhatsApp from "./pages/WhatsApp";
import Download from "./pages/Download";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/whatsapp' element={<WhatsApp />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
