import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import FriendsList from './FriendList/friendList';
import { Transactions } from './Transactions/Transactions';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} title="Upload stats" />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
};
