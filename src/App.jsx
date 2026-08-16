import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionCard from "./components/TransactionCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <main className="app">
      <Header />

      {/*Add to the previous transactions (array) , and spread operator to keep that were already there */}

   <TransactionForm
      onAddTransaction={(transaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      transaction,
    ]);
    }}
    />
    {console.log(transactions)}

  <section className="transactions">
  <h2>Transactions</h2>

  <TransactionCard
    merchant="Amazon"
    amount="45.99"
    date="Aug 10, 2026"
    status="Safe"
  />

  <TransactionCard
    merchant="Unknown POS #221"
    amount="899"
    date="Aug 11, 2026"
    status="Fraud"
  />

  <TransactionCard
    merchant="Random Loan App"
    amount="150"
    date="Aug 12, 2026"
    status="Suspicious"
  />
</section>
    </main>
  );
}

export default App;