type Translated = {
  ar?: string;
  en?: string;
};

type Project = {
  name: Translated;
  about?: Translated;
  links: {
    github: string;
    website?: string;
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
type Issue = { name: string; labels: Label[] };

export { Translated, Project, Organisation, Label, Issue };
