import React, { Fragment, useState } from 'react';

const AddTransaction = () => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState(0);

	return (
		<Fragment>
			<h3>Add New Transaction</h3>
			<form>
				<div className='form-control'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
						name='name'
						placeholder='Enter name...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						amount
						<br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						name='amount'
						placeholder='Enter amount...'
					/>
				</div>
				<button className='btn'>Add Transaction</button>
			</form>
		</Fragment>
	);
};

export default AddTransaction;
