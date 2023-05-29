import PropTypes from 'prop-types';
import css from './friendList.module.css';
import { FriendListItem } from './friendListitem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
