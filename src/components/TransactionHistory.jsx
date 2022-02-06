import React from "react";
import propTypes from "prop-types";

import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={style.transactionTable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((transaction) => {
                    return (<tr key={transaction.id}>
                        <td className={style.transactionTable_type}>{transaction.type}</td>
                        <td className={style.transactionTable_value}>{transaction.amount}</td>
                        <td className={style.transactionTable_currency}>{transaction.currency}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.oneOf(["invoice", "payment", "withdrawal", "deposit"]).isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
        })
    )
};