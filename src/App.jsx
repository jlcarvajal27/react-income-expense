import Balance from "./components/Balance";

import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center ">
        <div className=" flex max-w-md  ">
          <div className="bg-zinc-800  p-10 rounded-lg flex  gap-x-4 ">
            <div>
              <Header />
              <Balance />
              <IncomeExpense />
              <TransactionForm />
            </div>
            <div className="flex-wrap">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
