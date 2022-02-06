import React from "react";
import propTypes from "prop-types";
import PleaseJS from 'pleasejs';

import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    // PleaseJS generates an array of colors the size of stats
    const colorPalette = PleaseJS.make_color( {
        golden: true,
        format: "hex",
        colors_returned: stats.length,
    } );

    return (<section className={style.statistics}>
        {title && <h2 className={style.title}>{ title }</h2>}

        <ul className={style.stat_list}>
            {stats.map((singleStat, statIndex) => {
                return (
                    <li
                        className={style.statItem}
                        key={singleStat.id}
                        style={{ backgroundColor: colorPalette[statIndex] }}
                    >
                        
                        <span className={style.statItem_label}>{singleStat.label}</span>
                        <span className={style.statItem_value}>{ singleStat.percentage }%</span>
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