import React, { useContext } from 'react';
import { TransactionContext } from '../Context/TransactionProvider';

const Transactions = () => {
	const [transactions] = useContext(TransactionContext);
	return (
		<div className="transactions-container">
			{transactions.map((transaction) => (
				<div className={`transaction ${transaction.type}`} key={transaction.id}>
					<span>{transaction.comment}</span>
					<span>{transaction.ammount}</span>
				</div>
			))}
		</div>
	);
};

export default Transactions;
