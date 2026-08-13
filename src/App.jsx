import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionCard from "./components/TransactionCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <Header />

      <TransactionForm />

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