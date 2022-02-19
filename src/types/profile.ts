interface Followers {
  totalCount: Number;

  __typename?: String;
}

interface ContributionsCollection {
  restrictedContributionsCount: Number;
  totalCommitContributions: Number;

  __typename?: String;
}

interface Repositories {
  totalCount: Number;

  __typename?: String;
}

interface repositoriesContributedTo {
  totalCount: Number;
}

interface PullRequests {
  totalCount: Number;
}

interface ClosedIssues {
  totalCount: Number;
}

interface IUser {
  login: string;
  name: string;
  followers: Followers;
  contributionsCollection: ContributionsCollection;
  repositories: Repositories;
  repositoriesContributedTo: repositoriesContributedTo;
  pullRequests: PullRequests;
  closedIssues: ClosedIssues;

  __typename?: string;
}

export type { IUser };
