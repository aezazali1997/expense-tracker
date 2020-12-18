import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import "./IncomeExpense.css";
const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);
	let income = 0,
		expense = 0;
	transactions.forEach((transaction) => {
		if (transaction.transaction > 0) {
			income += parseInt(transaction.transaction);
		} else {
			expense -= parseInt(transaction.transaction);
		}
	});
	return (
		<div className="wrapper">
			<div className="wrapper-sub">
				<h1>Income</h1>
				<span className="income">{income}.00</span>
			</div>
			<div className="wrapper-sub">
				<h1>Expense</h1>
				<span className="expense">{expense}.00</span>
			</div>
		</div>
	);
};

export default IncomeExpense;
