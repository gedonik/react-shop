import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About.js";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
