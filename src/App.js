import { TransactionProvider } from './Context/TransactionProvider';
import Header from './Components/Header';
import Transactions from './Components/Transactions';
import AddTransactions from './Components/AddTransactions';
import './App.css';

function App() {
	return (
		<TransactionProvider>
			<div className="App">
				<Header />
				<Transactions />
				<AddTransactions />
			</div>
		</TransactionProvider>
	);
}

export default App;
