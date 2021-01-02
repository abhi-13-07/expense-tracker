import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="header-section">
				<span style={{ fontSize: '1.5rem' }}>Expense Tracker</span>
				<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
					<h3>Your Balance</h3>
					<h1>₹6000</h1>
				</div>
				<div className="expense-container">
					<div>
						<span>Your Income</span>
						<br />
						₹5000
					</div>
					<div>
						<span>Your Expense</span>
						<br />
						₹3000
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
