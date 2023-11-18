import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const DisplayCurrency = () => {
    const currency = useContext(CurrencyContext);

    const product1 = 10;
    const product2 = 15;
    const product3 = 40;

    return (
        <>
            <p>Now selected Currency is {currency.currency}</p>
            {currency.currency === "CAD" ? (
                <>
                    <p>Product1: C${product1}</p>
                    <p>Product2: C${product2}</p>
                    <p>Product3: C${product3}</p>
                </>
            ) : (
                <>
                    <p>Product1: ¥{product1*10}</p>
                    <p>Product2: ¥{product2*10}</p>
                    <p>Product3: ¥{product3*10}</p>
                </>
            )}
        </>
    );
};

export default DisplayCurrency;
