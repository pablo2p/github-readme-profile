import type { GetServerSideProps, NextPage } from 'next';
import { GET_USER_INFO } from '../graphql/queries/profile';

import client from '../middleware/apollo-client';
import { IUser } from '../types/profile';

const Home: NextPage<{ user: IUser }> = ({ user }) => {
  const listInfos = {
    'Total Commits': user.contributionsCollection.totalCommitContributions,
    'Total PRs': user.pullRequests.totalCount,
    'Total Closed Issues': user.closedIssues.totalCount,
    'Total Contributions': user.repositoriesContributedTo.totalCount,
  };

  console.log(user);

  return (
    <section>
      <h5>{user.name} Profile</h5>
      <ul>
        {Object.entries(listInfos).map(([title, result], index) => (
          <li key={index}>
            {title}: {result}
          </li>
        ))}
      </ul>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: user } = await client.query({
    query: GET_USER_INFO,
    variables: {
      login: 'pablo2p',
    },
  });

  return {
    props: user,
  };
};

export default Home;
