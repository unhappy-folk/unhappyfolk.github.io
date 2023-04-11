type Translated = {
  ar?: string;
  en?: string;
};

type Classification = {
  class1: Label[];
  class2: Label[];
  class3: Label[];
  ignored: Label[];
};

type ClassifiedIssues = {
  class1: Issue[];
  class2: Issue[];
  class3: Issue[];
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
    github: {
      org: string;
      repo: string;
    };
    classification: Classification;
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
  // in case of an org that have a dedicated repo for all contributions (e.g. Nuqayah)
  contribution?: {
    authorGuide?: string;
    github: {
      org: string;
      repo: string;
    };
    classification: Classification;
  };
  projects: Project[];
};

type Label = { name: string };
type Issue = { title: string; body: string; html_url: string; labels: Label[] };

export {
  Translated,
  Project,
  Organisation,
  Label,
  Issue,
  Classification,
  ClassifiedIssues,
};
