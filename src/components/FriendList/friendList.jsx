import PropTypes from 'prop-types';
import { FriendsListItem } from "./friendListItem"
import css from './friendList.module.css'

const FriendsList = ({friends}) => {
    return <ul className={css.friendlist}>
   <FriendsListItem list = {friends}/>
  </ul>
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
}

export default FriendsList