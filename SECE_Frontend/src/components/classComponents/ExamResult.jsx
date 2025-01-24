import { useContext } from "react";
import { ThemeProvider } from "../FunctionalComponents/Students";

const ExamResult = () => {
    const res = useContext(ThemeProvider)
    return (
        <div className="">
            <h2>Result Published and you SGPA is {res.sgpa}, CGPA is {res.cgpa}</h2>
        </div>
    )
}
export default ExamResult;