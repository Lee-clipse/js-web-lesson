import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index0101 from "./lesson/01_자료형/01_숫자.jsx";
import Index0102 from "./lesson/01_자료형/02_문자.jsx";
import Index0103 from "./lesson/01_자료형/03_객체.jsx";
import Index0104 from "./lesson/01_자료형/04_배열.jsx";
import Index0201 from "./lesson/02_조건문/01_문법.jsx";
import Index0202 from "./lesson/02_조건문/02_예제1.jsx";
import Index0203 from "./lesson/02_조건문/03_예제2.jsx";
import Index0204 from "./lesson/02_조건문/04_예제3.jsx";
import Index0301 from "./lesson/03_반복문/01_문법.jsx";
import Index0302 from "./lesson/03_반복문/02_예제1.jsx";
import Index0303 from "./lesson/03_반복문/03_예제2.jsx";
import Index0304 from "./lesson/03_반복문/04_예제3.jsx";
import Index0305 from "./lesson/03_반복문/05_예제4.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/0101" element={<Index0101 />}></Route>
        <Route path="/0102" element={<Index0102 />}></Route>
        <Route path="/0103" element={<Index0103 />}></Route>
        <Route path="/0104" element={<Index0104 />}></Route>

        <Route path="/0201" element={<Index0201 />}></Route>
        <Route path="/0202" element={<Index0202 />}></Route>
        <Route path="/0203" element={<Index0203 />}></Route>
        <Route path="/0204" element={<Index0204 />}></Route>

        <Route path="/0301" element={<Index0301 />}></Route>
        <Route path="/0302" element={<Index0302 />}></Route>
        <Route path="/0303" element={<Index0303 />}></Route>
        <Route path="/0304" element={<Index0304 />}></Route>
        <Route path="/0305" element={<Index0305 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;