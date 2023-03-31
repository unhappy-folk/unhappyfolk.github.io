import { Issue } from "../repo";
import { ghClass1, ghClass2, ghClass3 } from "./github";
import { and, or, not, Predicate } from "./predicates";

const issues: Issue[] = [
  {
    name: "Issue1",
    labels: [
      {
        name: "hamada",
      },
      {
        name: "documentation",
      },
    ],
  },
  {
    name: "Issue2",
    labels: [],
  },
  {
    name: "Issue3",
    labels: [
      {
        name: "good first issue",
      },
    ],
  },
  {
    name: "Issue3 Duplicate",
    labels: [
      {
        name: "good first issue",
      },
      {
        name: "duplicate",
      },
    ],
  },
  {
    name: "Issue4",
    labels: [
      {
        name: "bug",
      },
    ],
  },
  {
    name: "Issue5",
    labels: [
      {
        name: "enhancement",
      },
      {
        name: "help wanted",
      },
    ],
  },
];

console.log(issues.filter((it) => ghClass1(it)));
console.log(issues.filter((it) => ghClass2(it)));
console.log(issues.filter((it) => ghClass3(it)));
