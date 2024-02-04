//UserInfoProvider.js
import {useState,useEffect,createContext} from "react";
import p from "@/app/util/consoleHelper";

export const UserInfoContext = createContext();


const SOURCE = "UserInfoProvider";
const srcColor = 25;

export function UserInfoProvider({children}){
    const [userName,setUserName] = useState("Siegfried");


    useEffect(() => {
        p(SOURCE,userName,srcColor)
      },[userName]);

    const contextValue = {userName};
    console.log('Context Value:', contextValue);

    return (<>
        <UserInfoContext.Provider value={{userName}}>
            {children}
        </UserInfoContext.Provider>
    </>)
}





