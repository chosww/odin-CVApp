import { useState } from "react"

function Education({ schoolName, studyTitle, experience }) {
    return (
        <div className="div-education">
            <h2>Education</h2>
            <div>
                <h3>School Name</h3>
                <p>{schoolName}</p>
            </div>
            <div>
                <h3>Study Title</h3>
                <p>{studyTitle}</p>
            </div>
            <div>
                <h3>Experience</h3>
                <p>{experience}</p>
            </div>
        </div>
    )
}

export default Education