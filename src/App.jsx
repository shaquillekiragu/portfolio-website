import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Header />
        <Route path="" element="" />
        <Footer />
      </Routes>
    </>
  );
}

export default App;
