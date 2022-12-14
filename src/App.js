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
      <div id="pageA4" className="mx-auto my-auto" style={{ width: "210mm", height: "297mm" }}>
        <div className="flex w-full justify-center flex-col">
          <Personal personal={aamirResume.resume.personal} />
          <hr class="my-1 h-px bg-gray-200 h-1 rounded  border-0 dark:bg-gray-700"/>
          <Skill skills={aamirResume.resume.skills} />
          <Experience experiences={aamirResume.resume.experiences} />
          <Certificate certificates={aamirResume.resume.certificates} />
        </div>
      </div>
    </div>
  );
}

export default App;
