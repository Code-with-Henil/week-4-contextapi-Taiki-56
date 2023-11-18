import React, { Children, createContext, useState } from "react";


export const CurrencyContext = createContext(undefined)

const CurrencyProvider = ({children}) => {
const [currency, setCurrency] = useState("CAD")

    return (
        // this value is data which you want to share with other components
        // in this case, share the value and set function of useState
        <CurrencyContext.Provider value={{currency, setCurrency}}>
            {/* this children is components which you want to share data with */}
            {children}
        </CurrencyContext.Provider>
    )
}
 
export default CurrencyProvider;