import React, { useState, useContext } from 'react';
import { TransactionContext } from '../Context/TransactionProvider';

const AddTransactions = () => {
	const [transaction, setTransaction] = useState({ comment: '', ammount: '' });
	const [, setTransactions] = useContext(TransactionContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (transaction.comment !== '' && transaction.ammount !== '') {
			transaction.id = new Date().toISOString();

			if (transaction.ammount[0] === '+') {
				transaction.type = 'income';
			} else {
				transaction.type = 'expense';
			}

			setTransactions((prevTransactions) => [...prevTransactions, transaction]);
			setTransaction({ comment: '', ammount: '' });
		} else {
			console.log('Need to enter both fields');
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Comment your Transactions"
					value={transaction.comment}
					onChange={(e) =>
						setTransaction((prev) => ({ ...prev, comment: e.target.value }))
					}
				/>
				<input
					type="text"
					placeholder="Amount add + for income / - for expense"
					value={transaction.ammount}
					onChange={(e) =>
						setTransaction((prev) => ({ ...prev, ammount: e.target.value }))
					}
				/>
				<input type="submit" value="Add" />
			</form>
		</div>
	);
};

export default AddTransactions;
