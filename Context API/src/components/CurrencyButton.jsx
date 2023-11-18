import { useContext } from "react";
import React from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const CurrencyButton = () => {
    const currency = useContext(CurrencyContext);

    const handleToJPY = () => {
        currency.setCurrency("JPY")
    }

    const handleToCAD = () => {
        currency.setCurrency("CAD")
    }



    return (
        <>
            {currency.currency === "CAD" ? (
                <button onClick={handleToJPY} className="hover:cursor">JPY</button>
            ) : (
                <button onClick={handleToCAD} className="hover:cursor">CAD</button>
            )}
        </>
    );
};

export default CurrencyButton;
