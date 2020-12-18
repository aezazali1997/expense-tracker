import React, { useState, useContext } from "react";
import "./Addnewtransaction.css";
import { GlobalContext } from "../context/Globalstate";

const Addnewtransaction = () => {
	const { transactions, addTransaction } = useContext(GlobalContext);
	const [description, setDescription] = useState("");
	const [transaction, setTransaction] = useState(0);
	return (
		<div>
			<h4 className="trans-title underline">Add new transaction</h4>
			<div className="new-trans-container">
				<h5>Description</h5>
				<input
					type="text"
					id="Description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
					required="required"
				/>
				<h5>Transaction amount</h5>
				<input
					type="number"
					id="transactionamount"
					value={transaction}
					onChange={(event) => setTransaction(event.target.value)}
					required="required"
				/>
			</div>
			<button
				className="add-tranaction"
				onClick={() => {
					addTransaction({
						id: transactions.length + 1,
						description,
						transaction,
					});
				}}
			>
				Add Transaction
			</button>
		</div>
	);
};

export default Addnewtransaction;
