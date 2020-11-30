import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	transactions: [
        { id: 1, name: 'Burger', amount: -6.59 },
        { id: 1, name: 'Grease', amount: -12.99 }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state] = useReducer(AppReducer, initialState);

	return <GlobalContext.Provider value={{
                transactions: state.transactions
            }}>
                {children}
            </GlobalContext.Provider>;
};
