export class Resume {
  _resume = {
    personal: {},
    experiences: [],
    certificates: [],
    education: [],
    skills: [],
    courses: [],
    languages: [],
  };

  addPersonalInfo = (
    thumbnail,
    picture,
    name,
    fatherName,
    contactNo,
    email,
    linkedIn,
    Github,
    about
  ) => {
    this._resume.personal = {
      thumbnail,
      picture,
      name,
      fatherName,
      contactNo,
      email,
      linkedIn,
      Github,
      about,
    };
  };

  addExperience = (
    title,
    employementType,
    companyName,
    location,
    isCurrent,
    startDate,
    endDate,
    industry,
    desc,
    skills
  ) => {
    this._resume.experiences.push({
      title,
      employementType,
      companyName,
      location,
      isCurrent,
      startDate,
      endDate,
      industry,
      desc,
      skills,
    });
  };

  addEducation = (institute, gpa, from, to, shortDesc, longDesc) => {
    this._resume.education.push({
      institute,
      gpa,
      from,
      to,
      shortDesc,
      longDesc,
    });
  };

  addCertificates = (
    certificateName,
    issuingOrg,
    issueDate,
    endDate,
    isExpire,
    credentialID,
    credentialURL
  ) => {
    this._resume.certificates.push({
      certificateName,
      issuingOrg,
      issueDate,
      endDate,
      isExpire,
      credentialID,
      credentialURL,
    });
  };

  addSkills = (name, proficiency) => {
    this._resume.skills.push({ name, proficiency });
  };

  addCourses = (name, number, institue) => {
    this._resume.certificates.push({ name, number, institue });
  };

  addLanguages = (name, proficiency) => {
    this._resume.certificates.push({ name, proficiency });
  };

  get resume() {
    return this._resume;
  }
}

export const resumeTemplate = {
  presonal: {
    id: "",
    thumnail: "",
    picture: "",
    name: "",
    fatherName: "",
    contactNo: "",
    email: "",
    linkedIn: "",
    Github: "",
    about: "",
  },
  experiences: [
    {
      title: "",
      employementType: "",
      companyName: "",
      location: "",
      isCurrent: true,
      startDate: {
        month: "",
        year: "",
      },
      endDate: {
        month: "",
        year: "",
      },
      industry: "",
      desc: "",
      skills: [],
    },
  ],
  education: [
    {
      institute: "",
      gpa: "",
      from: "",
      to: "",
      shortDesc: "",
      longDesc: "",
    },
  ],
  certificates: [
    {
      certificateName: "",
      issuingOrg: "",
      issueDate: "",
      endDate: "",
      isExpire: "",
      credentialID: "",
      credentialURL: "",
    },
  ],
  skills: ["", ""],
  courses: [
    {
      name: "",
      number: "",
      institue: "",
    },
  ],
  languages: [
    {
      name: "",
      proficiency: "",
    },
  ],
};
