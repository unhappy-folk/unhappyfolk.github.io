import {
  Classification,
  ClassifiedIssues,
  Issue,
  Label,
} from "../Content/Projects/model";
import {
  activeIssuesPredicate,
  ghClass1Predicate,
  ghClass2Predicate,
  ghClass3Predicate,
  labelInClassPredicate,
} from "./github";
import { and, or, not, Predicate } from "./predicates";

const ignoreLabels = (labels: Label[]) => (issue: Issue) =>
  not(labelInClassPredicate(labels))(issue);

const classify = (
  issues: Issue[],
  classification: Classification
): ClassifiedIssues => {
  const activeIssues = issues.filter(
    and(activeIssuesPredicate)(ignoreLabels(classification.ignored))
  );

  return {
    class1: activeIssues.filter(
      or(ghClass1Predicate)(labelInClassPredicate(classification.class1))
    ),
    class2: activeIssues.filter(
      or(ghClass2Predicate)(labelInClassPredicate(classification.class2))
    ),
    class3: activeIssues.filter(
      or(ghClass3Predicate)(labelInClassPredicate(classification.class3))
    ),
  };
};

export { classify };
