import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import CurrencySelector from "./CurrencySelector";

const Navbar = () => {
    // const currency = useContext(CurrencyContext)
    return ( 
        <div className="bg-green-600 flex justify-end gap-3 p-3">
            <CurrencySelector />
            {/* <h1>{currency.currency}</h1> */}
        </div>
     );
}
 
 
export default Navbar;