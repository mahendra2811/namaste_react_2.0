import { createContext } from "react"
import React  from 'react'

const userContext = createContext({
    loggedInUser: "Default User",
     
});

export default userContext;
