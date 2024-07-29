import { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const useStContext = () => useContext(StateContext);


export default function ContextProvider({children}) {

    const [todayCnt, setTodayCnt] = useState(0);

    function todayCntUp() {
        setTodayCnt(todayCnt+1);
    }

    return (
        <StateContext.Provider value={{todayCnt,todayCntUp}}>
            {children}
        </StateContext.Provider>
    )
}