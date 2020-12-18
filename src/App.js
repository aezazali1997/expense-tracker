import "./App.css";
import Header from "./components/Header/Header";
import CurrentBalance from "./components/CurrentBalance/CurrentBalance";
import IncomeExpense from "./components/IncomeExpense/IncomeExpense";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import Addnewtransaction from "./components/AddNewTransaction/Addnewtransaction";
import GlobalProvider from "./components/context/Globalstate";

function App() {
	return (
		<GlobalProvider>
			<div className="container center-it">
				<Header />
				<CurrentBalance />
				<IncomeExpense />
				<TransactionHistory />
				<Addnewtransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
