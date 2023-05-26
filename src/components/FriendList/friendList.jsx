import { FriendsListItem } from "./friendListItem"
import css from './friendList.module.css'

const FriendsList = ({friends}) => {
    return <ul className={css.friendlist}>
   <FriendsListItem list = {friends}/>
  </ul>
}


export default FriendsList