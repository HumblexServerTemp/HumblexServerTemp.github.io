import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Main } from "./pages/main/main";
import { Contact } from "./pages/contact/contact";
import { Services } from "./pages/services/services";
import { Shop } from "./pages/shop/shop";
import { Book } from "./pages/book/book";
import { Review } from "./pages/review/review";
import { FAQ } from "./pages/faq/faq";
import { Benchmark } from "./pages/benchmark/benchmark";
import { Confirmation } from "./pages/confirmation/confirmation";
function App() {
  return (
    <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/review" element={<Review />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/benchmark" element={<Benchmark />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
