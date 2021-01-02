import React, { useContext } from 'react';
import { TransactionContext } from '../Context/TransactionProvider';

const Transactions = () => {
	const [transactions, setTransactions] = useContext(TransactionContext);

	const deleteTransaction = (id) => {
		setTransactions(
			transactions.filter((transaction) => transaction.id !== id)
		);
	};

	return (
		<div className="transactions-container">
			{transactions.map((transaction) => (
				<div
					className={`transaction ${transaction.type}`}
					key={transaction.id}
					onDoubleClick={() => deleteTransaction(transaction.id)}
					style={{ cursor: 'pointer' }}>
					<span>{transaction.comment}</span>
					<span>{transaction.ammount}</span>
				</div>
			))}
		</div>
	);
};

export default Transactions;
