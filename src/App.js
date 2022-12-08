import { certificates } from "./aamir";
import "./App.css";
import { Resume } from "./util/resume-template";

function App() {
  const aamirResume = new Resume();

  aamirResume.addPersonalInfo(
    "https://media-exp1.licdn.com/dms/image/D4D03AQE2Fs9NrOOMxA/profile-displayphoto-shrink_200_200/0/1669964820953?e=1675296000&v=beta&t=3m-NbxjySzFt1d-rDtCCn6SBQWcxjivohfaKdqt05W8",
    "https://media-exp1.licdn.com/dms/image/D4D03AQE2Fs9NrOOMxA/profile-displayphoto-shrink_200_200/0/1669964820953?e=1675296000&v=beta&t=3m-NbxjySzFt1d-rDtCCn6SBQWcxjivohfaKdqt05W8",
    "Muhammad Aamir Javid",
    "Muhammad Javid",
    "0333-1231236",
    "aamir.xyz.abc@gmail.com",
    "https://www.linkedin.com/in/abc",
    "https://github.com/AamirKhattak",
    "Software Engineer by Choice!"
  );

  aamirResume.addSkills("JavaScript", "Current");
  aamirResume.addSkills("MERN Stack", "Current");
  aamirResume.addSkills("MySQL", "Current");
  aamirResume.addSkills("PostgreSQL", "Current");
  aamirResume.addSkills("C/C++ ", "Past");
  aamirResume.addSkills("JAVA", "Past");
  aamirResume.addSkills("Android Native", "Past");
  aamirResume.addSkills("CUDA", "Past");
  aamirResume.addSkills("OpenCV", "Past");
  aamirResume.addSkills("Boost-C++", "Past");

  aamirResume.addExperience(
    "Assistant Engineer (Software)",
    "full-time",
    "OGDCL",
    "Islamabad",
    "true",
    { month: "10", year: "2017" },
    undefined,
    "Oil & Gas",
    `Here I am responsible for the design and development of the following web application 
  projects. 
  ▪  Helpdesk Management Software 
  ▪  Payroll Management Software 
  ▪  Land Management Software`
  );

  aamirResume.addExperience(
    "Assistant Manager - Software",
    "full-time",
    "NECSOM/NECOP",
    "ISLAMABAD",
    false,
    { month: "4", year: "2017" },
    { month: "10", year: "2017" },
    "DEFENCE"
  );

  certificates.forEach(certificate => {
    aamirResume.addCertificatesByObj({...certificate});
  });
  aamirResume.addCertificates(
    `Fullstack Web Dev (MERN, Jest, Cypress ...) Certification (Uni of Helsinki, Finland and Houston Inc.)`,
    "Uni of Helsinki, Finland",
    "May 2022",
    undefined,
    false,
    "0ed1405ee0d8bb4a7e16e4851a4480a5",
    "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/0ed1405ee0d8bb4a7e16e4851a4480a5"
  );
  console.log(aamirResume.resume);

  return <div className="App">{}</div>;
}

export default App;
