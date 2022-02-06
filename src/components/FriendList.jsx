import React from "react";
import propTypes from "prop-types";

function FriendListItem( {avatar, name, isOnline} ) {
    return (
        <li className="item">
            <span className="status">{isOnline ? "Online" : "Offline"}</span>
            {/* todo: change status text to background color change */}
            <img className="avatar" src={ avatar } alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

export default function FriendList({ friends }) {
    return (<ul className="friend-list">
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