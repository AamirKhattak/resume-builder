import { RESUME_DATA } from "./aamir";
import "./App.css";
import Certificate from "./components/Certificate";
import Experience from "./components/Experience";
import Personal from "./components/Personal";
import Skill from "./components/Skill";
import { Resume } from "./util/resume-template";

function App() {
  const aamirResume = new Resume();
  const {
    thumbnail,
    picture,
    firstName,
    lastName,
    contactNo,
    email,
    linkedIn,
    Github,
    about,
  } = RESUME_DATA.personal;

  aamirResume.addPersonalInfo(
    thumbnail,
    picture,
    firstName,
    lastName,
    contactNo,
    email,
    linkedIn,
    Github,
    about
  );
  RESUME_DATA.skills.forEach((skill) =>
    aamirResume.addSkills(skill.name, skill.proficiency)
  );

  RESUME_DATA.experiences.forEach((experience) => {
    aamirResume.addExperienceByObj({ ...experience });
  });
  RESUME_DATA.certificates.forEach((certificate) => {
    aamirResume.addCertificatesByObj({ ...certificate });
  });

  console.log(aamirResume.resume);

  return (
    <div className="App">
      <div className="flex w-full justify-center flex-col">
        <Personal personal={aamirResume.resume.personal} />
        <Skill skills={aamirResume.resume.skills} />
        <Experience experiences={aamirResume.resume.experiences} />
        <Certificate certificates={aamirResume.resume.certificates} />
      </div>
    </div>
  );
}

export default App;
