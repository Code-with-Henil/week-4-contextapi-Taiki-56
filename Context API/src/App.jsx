import Navbar from "./components/Navbar";
import Home from "./page/Home";
import CurrencyProvider from "./context/CurrencyContext";

const App = () => {
    return (
        <>
        <CurrencyProvider>
            <Navbar />
            {/* <CurrencyButton /> */}

            <Home />
        </CurrencyProvider>
        </>
    );
};

export default App;
