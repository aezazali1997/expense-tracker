import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";

const initialState = {
	transactions: [],
};
export const GlobalContext = createContext(initialState);
const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);
	function delTransaction(id) {
		dispatch({
			type: "Delete Transaction",
			payload: id,
		});
	}
	function addTransaction(transaction) {
		dispatch({
			type: "Add transaction",
			payload: transaction,
		});
	}
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				delTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
export default GlobalProvider;
