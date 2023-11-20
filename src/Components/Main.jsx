import '../styles/Main.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';

function Main({ name, email, phone, address, educations }) {
    console.log(educations);

    return (
        <>
            <div className="cv-header">
                <h1>{name}</h1>
                <EmailIcon /> {email}
                <PhoneAndroidIcon /> {phone}
                <HomeIcon /> {address}
            </div>
            <div className="cv-education-header">
                Education
            </div>
            <div className="cv-education">
                {educations.map(education => <div>{education}</div>)}
            </div>
        </>
    )
}

export default Main