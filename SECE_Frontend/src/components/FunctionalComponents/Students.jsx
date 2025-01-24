import { createContext } from "react";
import Invigilator from "../classComponents/Invigilator";

export const ThemeProvider = createContext ();
const Students = () => {
    return (
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5, cgpa:6.5}}>
            <h2>This is a example of Usecontext.which is the alternative for Props Drilling</h2>
            <h3>Students are writing their exams.</h3>
            <Invigilator />
            </ThemeProvider.Provider>
            
        </div>
    )
}
export default Students;