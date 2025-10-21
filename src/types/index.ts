export interface Skills {
  id: string;
  skillTitle: string;
  imageURL: string;
  createdAt: string;
}

export interface Projects {
  id: string;
  title: string;
  projectDescription: string;
  projectURL: string;
  techStack: string[];
  createdAt: string;
}

export interface Educations {
  id: string;
  instituteName: string;
  degreeName: string;
  instituteLocation: string;
  startDate: string;
  endDate: string;
}

export interface Certifications {
  id: string;
  name: string;
  issuer: string;
  certificationLink: string;
  dateIssued: string;
  createdAt: string;
}

export interface Experiences {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}
