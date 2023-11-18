import Navbar from "./components/Navbar";
import DisplayCurrency from "./page/DisplayCurrency";
import CurrencyProvider from "./context/CurrencyContext";

const App = () => {
    return (
        <>
        <CurrencyProvider>
            <Navbar />
            {/* <CurrencyButton /> */}

            <DisplayCurrency />
        </CurrencyProvider>
        </>
    );
};

export default App;
