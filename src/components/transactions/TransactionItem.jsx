import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import { TrashIcon } from "@heroicons/react/24/solid";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  return (
    <li className="bg-zinc-700 rounded-lg mb-2 flex px-3 py-1 text-white justify-between items-center gap-2 ">
      <p className="text-sm ">{transaction.description}</p>
      <div className="flex justify-between gap-2">
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        >
          <TrashIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
