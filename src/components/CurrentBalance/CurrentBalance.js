import React, { useContext } from "react";
import "./CurrentBalance.css";
import { GlobalContext } from "../context/Globalstate";
const CurrentBalance = () => {
	const { transactions } = useContext(GlobalContext);
	let total = 0;
	let arr = transactions.map((transaction) => {
		total += parseInt(transaction.transaction);
	});

	return (
		<div>
			<h4>Current balance</h4>
			<h2>${total}</h2>
		</div>
	);
};

export default CurrentBalance;
