export interface WorkExperience {
  employer: string;
  location: string;
  duration: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  name: string;
  course: string;
  major: string;
  years: string;
  highlights: string[];
}

export interface SideProject {
  name: string;
  web_url?: string;
  description: string;
  stack: string[];
}

export interface CVData {
  work_experiences: WorkExperience[];
  education: Education[];
  skills: string[];
  tools: string[];
  side_projects: SideProject[];
}

export interface CurrentBook {
  title: string;
  link: string;
}

export interface ReadingData {
  current_book: CurrentBook;
}
