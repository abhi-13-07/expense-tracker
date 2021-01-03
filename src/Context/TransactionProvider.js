import React, { createContext, useReducer } from 'react';

export const TransactionContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'Add':
			return addTransaction(state, action.payload.newTransaction);
		case 'Delete':
			return deleteTransaction(state, action.payload.id);
		default:
			return state;
	}
};

const addTransaction = (transactions, newTransaction) => {
	return (transactions = [...transactions, newTransaction]);
};

const deleteTransaction = (transactions, id) => {
	return transactions.filter((transaction) => transaction.id !== id);
};

export const TransactionProvider = ({ children }) => {
	const transactions = [];
	const [state, dispatch] = useReducer(reducer, transactions);
	return (
		<TransactionContext.Provider value={[state, dispatch]}>
			{children}
		</TransactionContext.Provider>
	);
};
