import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="flex justify-between ">
      <h3 className="font-bold"> Your Balance</h3>
      <h1>${JSON.stringify(total, null, 2)} </h1>
    </div>
  );
}

export default Balance;
