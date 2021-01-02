import React, { useContext } from 'react';
import { TransactionContext } from '../Context/TransactionProvider';

const Header = () => {
	const [transactions] = useContext(TransactionContext);

	function addAmmount(arr, str) {
		let result = 0;
		arr.forEach((elem) => {
			if (elem.ammount[0] === str) {
				const ammount = parseFloat(elem.ammount.split(str)[1]);
				result += ammount;
			}
		});
		return result;
	}

	const incomes = transactions.filter(
		(transaction) => transaction.ammount[0] !== '-'
	);
	const expenses = transactions.filter(
		(transaction) => transaction.ammount[0] !== '+'
	);

	const totalIncome = addAmmount(incomes, '+');
	const totalExpense = addAmmount(expenses, '-');

	const balance = totalIncome - totalExpense;

	return (
		<header>
			<div className="header-section">
				<span style={{ fontSize: '1.5rem' }}>Expense Tracker</span>
				<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
					<h3>Your Balance</h3>
					<h1>₹{balance}</h1>
				</div>
				<div className="expense-container">
					<div>
						<span>Your Income</span>
						<br />₹{totalIncome}
					</div>
					<div>
						<span>Your Expense</span>
						<br />₹{totalExpense}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
