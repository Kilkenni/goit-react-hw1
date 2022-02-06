import React from "react";
import propTypes from "prop-types";
import style from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
    return (<div className={style.profile}>
        <div className="description">
            <img
                src={avatar ? avatar : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
                alt="User avatar"
                className={style.avatar}
            />
            <p className={style.name}>{ username }</p>
            <p className={style.tag}>@{tag}</p>
            <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
            <li>
                <span className={style.statsLabel}>Followers</span>
                <span className={style.statsQuantity}>{stats.followers && stats.followers}</span>
            </li>
            <li>
                <span className={style.statsLabel}>Views</span>
                <span className={style.statsQuantity}>{stats.views && stats.views}</span>
            </li>
            <li>
                <span className={style.statsLabel}>Likes</span>
                <span className={style.statsQuantity}>{stats.likes && stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string,
    stats: propTypes.shape({
        followers: propTypes.number,
        views: propTypes.number,
        likes: propTypes.number,
    }).isRequired,
};