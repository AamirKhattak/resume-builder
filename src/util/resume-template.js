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
    firstName,
    lastName,
    contactNo,
    email,
    linkedIn,
    Github,
    about
  ) => {
    this._resume.personal = {
      thumbnail,
      picture,
      firstName,
      lastName,
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

  addEducation = (degree,institute, gpa, from, to, shortDesc, longDesc) => {
    this._resume.education.push({
      degree,
      institute,
      gpa,
      from,
      to,
      shortDesc,
      longDesc,
    });
  };

  addExperienceByObj = (obj) => {
    this._resume.experiences.push({ ...obj });
  };

  addCertificatesByObj = (certObj) => {
    this._resume.certificates.push({ ...certObj });
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

