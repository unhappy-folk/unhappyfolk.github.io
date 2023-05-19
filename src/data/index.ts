import { Issue } from "../Content/Projects/model";

interface GitHubRepo {
  [fullName: string]: {
    languages: string[];
    issues: Issue[];
  };
}

const REPOS_URL =
  "https://raw.githubusercontent.com/unhappyfolk/unhappy-repos/master/github_repositories.json";

const repos: () => Promise<GitHubRepo> = async () => {
  const data = await (await fetch(REPOS_URL)).json();
  return data;
};

export { GitHubRepo, repos, REPOS_URL };
