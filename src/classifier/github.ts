import { Issue } from "../Content/Projects/model";
import { and, not, Predicate } from "./predicates";

const classes = {
  level1: ["good first issue", "documentation"],
  level2: ["bug"],
  level3: ["enhancement", "help wanted"],
  ignored: ["duplicate", "invalid", "question", "wontfix"],
};

/**
 *
 * @param classLabels
 * @returns `true` if this __any__ of this issue's labels exist in `classLabels`
 */
const labelInClassPredicate = (classLabels: string[]) => (issue: Issue) =>
  issue.labels.reduce((acc, it) => acc || classLabels.includes(it.name), false);

/**
 *
 * @param issue
 * @returns `true` if the issue has at least one label
 */
const labeledIssuePredicate: Predicate<Issue> = (issue: Issue) =>
  issue.labels.length > 0;

/**
 * @returns `true` if this __none__ of this issue's labels exist in `classLabels`
 */
const excludedLabelsPredicate = (classLabels: string[]) =>
  not(labelInClassPredicate(classLabels));

const activeIssuesPredicate = and(labeledIssuePredicate)(
  excludedLabelsPredicate(classes.ignored)
);

const goodFirstPredicate = and(activeIssuesPredicate)(
  (issue: Issue) =>
    issue.labels.filter((label) => label.name == "good first issue").length > 0
);

const ghClass1 = and(activeIssuesPredicate)(
  labelInClassPredicate(classes.level1)
);
const ghClass2 = and(activeIssuesPredicate)(
  labelInClassPredicate(classes.level2)
);
const ghClass3 = and(activeIssuesPredicate)(
  labelInClassPredicate(classes.level3)
);

export {
  labelInClassPredicate,
  excludedLabelsPredicate,
  activeIssuesPredicate,
  ghClass1,
  ghClass2,
  ghClass3,
};
