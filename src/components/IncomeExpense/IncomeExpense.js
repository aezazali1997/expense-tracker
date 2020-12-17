import React from "react";
import "./IncomeExpense.css";
const IncomeExpense = () => {
	return (
		<div className="wrapper">
			<div className="wrapper-sub">
				<h1>Income</h1>
				<span className="income">0.00</span>
			</div>
			<div className="wrapper-sub">
				<h1>Expense</h1>
				<span className="expense">0.00</span>
			</div>
		</div>
	);
};

export default IncomeExpense;
