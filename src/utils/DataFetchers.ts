//Import from octo
import { Octokit } from "octokit";
import { Organisation } from "../Content/Projects/model";

//Import types

export async function getTopProjects(org: Organisation) {
  const octokit = new Octokit({
    auth: process.env.ACCESS_TOKEN,
  });

  const topProjects = await octokit
    .request("GET /orgs/{org}/repos?per_page=3", {
      org: org.name,
      //   headers: {
      //     'X-GitHub-Api-Version': '2022-11-28',
      //   }
    })
    .then((res) => {
      return res.data;
    });

  return topProjects;
}