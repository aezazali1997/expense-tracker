import React from "react";
import "./Addnewtransaction.css";

const Addnewtransaction = () => {
	return (
		<div>
			<h4 className="trans-title underline">Add new transaction</h4>
			<div className="new-trans-container">
				<h5>Description</h5>
				<input type="text" />
				<h5>Transaction amount</h5>
				<input type="text" />
			</div>
			<a href="#">Add Transaction</a>
		</div>
	);
};

export default Addnewtransaction;
