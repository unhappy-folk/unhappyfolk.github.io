import { Classification, Issue, Label } from "../Content/Projects/model";
import { and, not, or, Predicate } from "./predicates";

const GITHUB_CLASSES: Classification = {
  class1: [{ name: "good first issue" }, { name: "documentation" }],
  class2: [{ name: "bug" }],
  class3: [{ name: "enhancement" }, { name: "help wanted" }],
  ignored: [
    { name: "duplicate" },
    { name: "invalid" },
    { name: "question" },
    { name: "wontfix" },
  ],
};

/**
 *
 * @param classLabels
 * @returns `true` if this __any__ of this issue's labels exist in `classLabels`
 */
const labelInClassPredicate = (classLabels: Label[]) => (issue: Issue) =>
  issue.labels.reduce(
    (acc, it) =>
      acc ||
      classLabels.find(
        (lbl) => it.name.toLowerCase() == lbl.name.toLowerCase()
      ) != undefined,
    false
  );

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
const excludedLabelsPredicate = (classLabels: Label[]) =>
  not(labelInClassPredicate(classLabels));

const activeIssuesPredicate = and(labeledIssuePredicate)(
  excludedLabelsPredicate(GITHUB_CLASSES.ignored)
);

const ghClass1Predicate = labelInClassPredicate(GITHUB_CLASSES.class1);
const ghClass2Predicate = labelInClassPredicate(GITHUB_CLASSES.class2);
const ghClass3Predicate = labelInClassPredicate(GITHUB_CLASSES.class3);

export {
  labelInClassPredicate,
  excludedLabelsPredicate,
  activeIssuesPredicate,
  ghClass1Predicate,
  ghClass2Predicate,
  ghClass3Predicate,
};
