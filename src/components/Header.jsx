import shieldIcon from "../assets/shield.svg";

function Header() {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={shieldIcon} alt="FraudWatch shield" />
        
        <div>
          <h1>FRAUDWATCH</h1>
          <p>Monitor your transactions and identify potential risks.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;