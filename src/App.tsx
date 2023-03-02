import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Chats from "./pages/Chats";
import Navbar from "./components/Navbar";
import Calendar from "./pages/CalendarPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <main>
        <Routes>
          <Route path="/" element={<Chats />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <Navbar />
      </main>
    </BrowserRouter>
  );
}

export default App;
