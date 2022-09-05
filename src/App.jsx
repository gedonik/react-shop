import {Routes, Route,} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

        </div>
    )
}

export default App
