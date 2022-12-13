import { RESUME_DATA } from "./aamir";
import "./App.css";
import { Resume } from "./util/resume-template";

function App() {
  const aamirResume = new Resume();
  const {
    thumbnail,
    picture,
    name,
    fatherName,
    contactNo,
    email,
    linkedIn,
    Github,
    about,
  } = RESUME_DATA.personal;

  aamirResume.addPersonalInfo(
    thumbnail,
    picture,
    name,
    fatherName,
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

  return <div className="App">
        <h1 className="text-5xl bg-indigo-400 font-bold underline">
      Hello world!
    </h1>
  </div>;
}

export default App;
