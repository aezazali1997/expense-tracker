import React, { useContext } from "react";
import "./TransactionHistory.css";
import { GlobalContext } from "../context/Globalstate";
import SingleTransaction from "../singleTransaction/SingleTransaction";

const TransactionHistory = () => {
	const { transactions } = useContext(GlobalContext);
	return (
		<div id="trans-history" className="trans-history">
			<h4 className="trans-title underline">Transaction History</h4>
			{transactions.map((transaction) => (
				<SingleTransaction key={transaction.id} transaction={transaction} />
			))}
		</div>
	);
};

export default TransactionHistory;
