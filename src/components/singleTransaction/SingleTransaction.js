import React, { Fragment, useContext } from "react";
import "./SingleTransaction.css";
import { GlobalContext } from "../context/Globalstate";

const SingleTransaction = ({ transaction }) => {
	const { delTransaction } = useContext(GlobalContext);
	const sign = transaction.transaction > 0 ? "+" : "-";
	const unSingedAmount =
		transaction.transaction < 0
			? transaction.transaction * -1
			: transaction.transaction;
	const classGiver = sign === "+" ? "border-income" : "border-expense";
	return (
		<Fragment>
			<div className={`single-transaction ${classGiver}`}>
				<span>{transaction.description}</span>
				<div>
					<span>
						{sign}${unSingedAmount}
					</span>
					<button
						onClick={() => {
							delTransaction(transaction.id);
						}}
					>
						X
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default SingleTransaction;
