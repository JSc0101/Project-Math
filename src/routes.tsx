import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Exercises } from "./views/exercises";
import { Add } from "./views/add";
import { NotFoundFour } from "./views/notFound";

const Swicth = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/add" element={<Add />} />
        <Route path="*" element={<NotFoundFour />} />
      </Routes>
    </Router>
  );
};

export default Swicth;
