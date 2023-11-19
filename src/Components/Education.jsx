import { useState } from "react"

function Education({ educations, setEducations }) {

    const [school, setSchool] = useState("")
    const [study, setStudy] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    return (
        <div className="div-education">
            <h2>Education</h2>
            <div className="form-education">
                <label htmlFor="input-school">School Name:</label>
                <input id="input-school" type="text" value={school} onChange={(e) => setSchool(e.target.value)}/>
                <label htmlFor="input-study">Study Title:</label>
                <input type="text" id="input-study" value={} />
            </div>
        </div>
    )
}

export default Education