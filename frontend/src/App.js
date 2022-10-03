import React from 'react';
// import { Header } from './components/Header';
// import { Balance } from './components/Balance';
// import { IncomeExpenses } from './components/IncomeExpenses';
// import { TransactionList } from './components/TransactionList';
// import { AddTransaction } from './components/AddTransaction';

// import { GlobalProvider } from './context/GlobalState';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import Main from './components/Main';
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  },
});
function App() {
  return (
    //   <Header />
    <NextUIProvider theme={darkTheme}>
  
  <Main />
        {/* <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction /> */}

    </NextUIProvider>
  );
}

export default App;