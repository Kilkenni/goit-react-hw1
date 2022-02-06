import React from "react";
import propTypes from "prop-types";

export default function Profile({ username, tag, location, avatar, stats }) {
    return (<div className="profile">
        <div className="description">
            <img
                src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{ username }</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers && stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views && stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes && stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string,
    stats: propTypes.object.isRequired,
};