import { useLoaderData } from "react-router-dom";
import orgs from "../../Content/Projects/store";
import { REPOS_URL, repos } from "../../data";
import Card from "../Card";
import useSWRImmutable from "swr/immutable";
import { styles } from "../../styles";
import { LanguageContext } from "../../Context";
import { memo, useContext, useMemo } from "react";
import { classify } from "../../classifier";
import Blockquote from "../Blockquote";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Level = memo(({ title, issues }) => (
  <div>
    <p>{title}</p>
    <div className="py-4 w-full bg-stone-800 bg-opacity-10 rounded-md">
      {issues.map((issue) => (
        <div className="w-full flex flex-col justify-center items-center my-4">
          <Blockquote title={issue.title}>
            <ReactMarkdown className="subpixel-antialiased text-stone-700 max-h-[20vh] overflow-y-scroll">
              {issue.body}
            </ReactMarkdown>
          </Blockquote>
        </div>
      ))}
    </div>
  </div>
));

const Levels = memo(({ org, repo, languages, issues }) => {
  const [t, , direction] = useContext(LanguageContext);

  const classes = classify(issues, repo.contribution.classification);

  return (
    <Card>
      <div className="w-full" dir={direction}>
        <div className="w-full mx-auto flex flex-col justify-center items-center">
          <div className="mx-auto flex justify-center  items-center w-32 h-32 mx-4 flex-grow-0 flex-shrink-0">
            <img className="mb-6" src={org.logo} alt={`${t(org.name)} logo`} />
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-2 mb-8">
            <div className={`${styles.typography.title}`}>
              <a target="_blank" href={repo.links.website || repo.links.github}>
                <p className={`${styles.typography.shadowed}`}>
                  {t(repo.name)}
                  <span className={styles.typography.glyph}>&#x2197;</span>
                </p>
              </a>
            </div>
            <div className="p-2 bg-stone-800 bg-opacity-5 rounded-md ">
              <code className="text-sm subpixel-antialiased">
                {languages.join(" · ")}
              </code>
            </div>
            {classes.class1.length > 0 && (
              <Level title="Level 1 Issues" issues={classes.class1} />
            )}
            {classes.class2.length > 0 && (
              <Level title="Level 2 Issues" issues={classes.class2} />
            )}
            {classes.class3.length > 0 && (
              <Level title="Level 3 Issues" issues={classes.class3} />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
});

export const loader = async ({ params }) => {
  const [orgName, repoName] = params.fullRepoName.split(";");
  const org = orgs.find((it) => it.id == orgName);
  const repo = org.projects.find(
    (it) => it.contribution.github.repo == repoName
  );

  return {
    org: {
      ...org,
      id: orgName,
    },
    repo: {
      ...repo,
      id: repoName,
    },
  };
};

const Contribute = () => {
  const { org, repo } = useLoaderData();

  const { data, error, isLoading } = useSWRImmutable(REPOS_URL, repos);
  console.log(error);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const { languages, issues } = data[`${org.id}/${repo.id}`];
  return <Levels org={org} repo={repo} languages={languages} issues={issues} />;
};

export default Contribute;
