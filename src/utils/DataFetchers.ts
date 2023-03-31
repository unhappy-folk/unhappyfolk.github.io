//Import from octo
import { Octokit } from "octokit";

//Import types
import { Organization } from "../types";

export async function getTopProjects (org: Organization) {
    
    const octokit = new Octokit({
        auth: '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'
    });
      
    const topProjects = await octokit.request('GET /orgs/{org}/repos?per_page=3', {
      org: org.name,
    //   headers: {
    //     'X-GitHub-Api-Version': '2022-11-28',
    //   }
    }).then((res) => {return res.data})

    return topProjects;
}