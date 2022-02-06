import React from "react";
import propTypes from "prop-types";

export default function TransactionHistory({ items }) {
    return (
        <table className="transaction-history">
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
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
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