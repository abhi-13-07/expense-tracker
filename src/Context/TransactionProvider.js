import React, { useState, createContext } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
	const [transactions, setTransactions] = useState([
		{
			id: 1,
			comment: 'Salary',
			ammount: '+50000',
			type: 'income',
		},
		{
			id: 2,
			comment: 'Groceries',
			ammount: '-4256',
			type: 'expense',
		},
		{
			id: 3,
			comment: 'Petrol',
			ammount: '-1000',
			type: 'expense',
		},
	]);
	return (
		<TransactionContext.Provider value={[transactions, setTransactions]}>
			{children}
		</TransactionContext.Provider>
	);
};
