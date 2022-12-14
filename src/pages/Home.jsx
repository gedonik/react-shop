import Header from "../components/Header/Header.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import Filters from "../components/Filters/Filters.jsx";
import {useEffect} from "react";
import {fetchApi} from "../redux/slices/catalogSlice.js";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const {status, error} = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, [])

    return (
        <div>
            <Header/>
            <Filters/>
            {status === 'loading' && <h2 className="loading">Loading...</h2>}
            {error && <h2 className="loading">An error occurred: {error}</h2>}
            <ProductList/>
        </div>
    );
};

export default Home;