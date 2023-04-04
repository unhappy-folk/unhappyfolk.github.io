type Translated = {
  ar?: string;
  en?: string;
};

type Classification = {
  class1?: string[];
  class2?: string[];
  class3?: string[];
  ignored?: string[];
};

type Project = {
  name: Translated;
  about?: Translated;
  links: {
    github: string;
    website?: string;
  };
  contribution?: {
    authorGuide?: string;
    github?: {
      org: string;
      repo: string;
    };
    classification?: Classification;
  };
};

type Organisation = {
  name: Translated;
  logo: string;
  about?: Translated;
  links: {
    website: string;
    github: string;
    donation: string;
    twitter?: string;
    telegram?: string;
  };
  projects: Project[];
};

type Label = { name: string };
type Issue = { name: string; body: string; html_url: string; labels: Label[] };

export { Translated, Project, Organisation, Label, Issue };
