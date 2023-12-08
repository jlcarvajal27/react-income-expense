import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();

  const onsubmit = (e) => {
    e.preventDefault();
    setAmount("");
    setDescription("");
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
  };

  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type="text"
          value={description}
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-700 text-white px-3 py-2 mb-2 rounded-lg block w-full"
        />

        <input
          type="number"
          placeholder="000.00"
          value={amount}
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-zinc-700 text-white px-3 py-2 mb-2 rounded-lg block w-full"
        />
        <button
          type="submit"
          className=" bg-indigo-600 text-white px-3 py-2 mb-2 rounded-lg block w-full"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
