import React from "react";
import { Link } from "react-router-dom";

const HomePage:React.FC = () => {
return (
    <>
    <h2>HomePage</h2>

    <button title="students">
        <Link to="/student/student-details">Student Details</Link>
    </button>

    <hr />
    </>
)
}

export default HomePage;

