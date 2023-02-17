import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";

const Swicth = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" />
        <Route path="/exercises/add" />
      </Routes>
    </Router>
  );
};

export default Swicth;
