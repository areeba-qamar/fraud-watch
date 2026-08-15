import { useState } from "react";

function TransactionForm() {

    // BR-2: Form input state
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");

  // BR-2: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // For now, just check the submitted form data.
    // Adding it to the transactions array will come in BR-3.
    console.log({
      merchant,
      amount,
    });
  };

  return (
       
    <form className="transaction-form" onSubmit={handleSubmit}>      <h2>Add Transaction</h2>

         {/* BR-2: Controlled merchant input */}    
      <input
        type="text"
        placeholder="Merchant name"
        value={merchant}
        onChange={(event) => setMerchant(event.target.value)}
      />
       {/* BR-2: Controlled amount input */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
       {/* BR-2: Submit the form  */}
      <button type="submit" onClick={handleSubmit}>
        Add Transaction
      </button>
    </form>
  );
}

export default TransactionForm;