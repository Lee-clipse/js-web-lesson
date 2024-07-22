import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./lesson/01_자료형/01_숫자.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
