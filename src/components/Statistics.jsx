import React from "react";
import propTypes from "prop-types";

export default function Statistics({ title, stats }) {
    return (<section className="statistics">
        {title && <h2 className="title">{ title }</h2>}

        <ul className="stat-list">
            {stats.map((singleStat) => {
                return (
                    <li className="item" key={ singleStat.id }>
                        <span className="label">{singleStat.label}</span>
                        <span className="percentage">{ singleStat.percentage }%</span>
                    </li>
                );
            }) }
        </ul>
    </section>);
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    })).isRequired,
};