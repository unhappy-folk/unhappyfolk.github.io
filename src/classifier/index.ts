import { Issue } from "../Content/Projects/model";
import { ghClass1, ghClass2, ghClass3 } from "./github";
import { and, or, not, Predicate } from "./predicates";

const issues: Issue[] = [
  {
    name: "Issue1",
    body: "",
    html_url: "",
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
    body: "",
    html_url: "",
    labels: [],
  },
  {
    name: "Issue3",
    body: "",
    html_url: "",
    labels: [
      {
        name: "good first issue",
      },
    ],
  },
  {
    name: "Issue3 Duplicate",
    body: "",
    html_url: "",
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
    body: "",
    html_url: "",
    labels: [
      {
        name: "bug",
      },
    ],
  },
  {
    name: "Issue5",
    body: "",
    html_url: "",
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
