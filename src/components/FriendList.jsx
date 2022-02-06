import React from "react";
import propTypes from "prop-types";

import style from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    

    return (
        <li className={style.friendItem}>
            <span className={style.friendItem_status} style={{ backgroundColor: isOnline? "green": "red"  } }></span>
            {/* todo: change status text to background color change */}
            <img className={style.friendItem_avatar} src={ avatar } alt="User avatar" width="48" height="auto"/>
            <p className={style.friendItem_name}>{name}</p>
        </li>
    );
};

export default function FriendList({ friends }) {
    return (<ul className={style.friendList}>
        {friends.map((friendObject) => {
            return (<FriendListItem
                avatar={friendObject.avatar}
                name={friendObject.name}
                isOnline={friendObject.isOnline}
                key={friendObject.id}
            />);
        } )}
    </ul>);
};

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
            id: propTypes.number.isRequired,
        })
    ),
};