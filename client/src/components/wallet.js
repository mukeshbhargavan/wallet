import React from 'react';
import DatePicker from 'react-date-picker';

function Wallet() {
  const[wdate, setWdate] = React.useState(new Date());
  const[wallet, setWallet] = React.useState('');

  const onChange = (date) => {
    setWdate(date)
  }

  React.useEffect(() => {
      fetch('http://localhost:5000/api/getWalletList')
      .then(res => res.json())
      .then(walletList => setWallet({walletList}));
      console.log("===");
  }, []);

  console.log(wallet);

  return (
    <div className="mainContainer">
      <div className="mainTitle">Wallet Tracker</div>
      <div className="mainContainer">
          <div className="summaryContainer">
              <b>Income</b> <br/>
              <span style={{"color": "green"}}>$500.00</span>
          </div>
          <div className="summaryContainer">
            <b>Expense</b> <br/>
            <span style={{"color": "red"}}>$200.00</span>
          </div>
          <div className="summaryContainer">
            <b>Balance Amount</b> <br/> $300.00
          </div>
      </div>
      <br/>
      <div className="mainContainer">
          <br/><br/>
          <b>Add Income/Expense</b><br/><br/>
              <DatePicker
          onChange={onChange}
          value={wdate}
        /><br/>
              <input type="text" name="description" placeholder="Description"/><br/><br/>
              <input type="submit" valaue="Submit"/>
      </div>
    </div>
  );
}

export default Wallet;
