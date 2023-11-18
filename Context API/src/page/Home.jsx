import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const Home = () => {
const currency = useContext(CurrencyContext)

    return ( 
        <h1>Now selected Currency is {currency.currency}</h1>
     );
}
 
export default Home;