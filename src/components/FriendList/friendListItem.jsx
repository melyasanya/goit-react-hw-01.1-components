import css from './friendListItem.module.css'

export const FriendsListItem = ({list}) => {
    return list.map(({id, name, avatar, isOnline}) => {return <li className={css.item} key={id}>
    <span className={isOnline? `${css.status} ${css.green}`: `${css.status} ${css.red}`} ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>})
}

