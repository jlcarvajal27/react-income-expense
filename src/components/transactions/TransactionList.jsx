import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <div className="">
      <h3 className="font-bold text-xl block mb-1">History </h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
