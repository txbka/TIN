import './App.css';
import { useCookies } from 'react-cookie';
import React, { useEffect } from "react";

function App() {
  let [cookies, setCookie] = useCookies(['name']);
  AutoClick();

  function Score()
  {
    return(<div className="scoreArea"><p className="scoreAreaP" id="scoreAreaP">{GetScoreFromCookie()}</p></div>);
  }

  function GetScoreFromCookie()
  {
    let cookieVal = cookies.score;
    if(isNaN(cookieVal))
    {
      return 0;
    }
    return cookieVal;
  }

  function GetUpgradesFromCookie(upgradeId)
  {
    let upgradeVal = 0;
    switch (upgradeId)
    {
      case 'upgrade1':
        upgradeVal = cookies.upgrade1;
        break;
      case 'upgrade2':
        upgradeVal = cookies.upgrade2;
        break;
      case 'upgrade3':
        upgradeVal = cookies.upgrade3;
        break;
      default:
        upgradeVal = 0;
    }
    if(isNaN(upgradeVal))
    {
      return 0;
    }
    return upgradeVal;
  }

  function GetUpgrades(upgradeId)
  {
    let number = 0, p;
    switch (upgradeId)
    {
      case 'upgrade1':
        p = document.getElementById("ShopAreaP1");
        number = Number(p.textContent);
        break;
      case 'upgrade2':
        p = document.getElementById("ShopAreaP2");
        number = Number(p.textContent);
        console.log(number);
        break;
      case 'upgrade3':
        p = document.getElementById("ShopAreaP3");
        number = Number(p.textContent);
        break;
      default:
        number = 0;
    }
    
    if(isNaN(number))
    {
      return 0;
    }
    return number;
  }

  function ChangeScore(amount = 1)
  {
    let p = document.getElementById("scoreAreaP");
    let number = Number(p.textContent);
    p.textContent = number+amount;
    setCookie('score', number+amount, {path: '/'});
  }

  function ClickArea()
  {
    return(<div className="clickArea"><button className="clickAreaBtn" onClick={() => ChangeScore()}>System.println("Hello World!")</button></div>);
  }

  function ShopArea()
  {
    return(<div className="shopArea">
      <div className="shopAreaDiv"><p>Auto 1cps (</p><p id = "ShopAreaP1">{GetUpgradesFromCookie('upgrade1')}</p><p>)</p> <button className="shopAreaButton" onClick={() => BuyUpgrade(1)}>Buy 100</button></div>
      <div className="shopAreaDiv"><p>Auto 3cps (</p><p id = "ShopAreaP2">{GetUpgradesFromCookie('upgrade2')}</p><p>)</p> <button className="shopAreaButton" onClick={() => BuyUpgrade(2)}>Buy 200</button></div>
      <div className="shopAreaDiv"><p>Auto 5cps (</p><p id = "ShopAreaP3">{GetUpgradesFromCookie('upgrade3')}</p><p>)</p> <button className="shopAreaButton" onClick={() => BuyUpgrade(3)}>Buy 350</button></div>
    </div>)
  }

  function BuyUpgrade(id)
  {
    let p = document.getElementById("scoreAreaP");
    let number = Number(p.textContent);
    switch(id)
    {
      case 1:
        if(number < 100)
        {
          alert('Not enough points');
          return;
        }
        p = document.getElementById("ShopAreaP1");
        number = Number(p.textContent);
        p.textContent = number+1;
        setCookie('upgrade1', number+1, {path: '/'});
        ChangeScore(-100);
        break;
      case 2:
        if(number < 200)
        {
          alert('Not enough points');
          return;
        }
        p = document.getElementById("ShopAreaP2");
        number = Number(p.textContent);
        p.textContent = number+1;
        setCookie('upgrade2', number+1, {path: '/'});
        ChangeScore(-200);
        break;
      case 3:
        if(number < 350)
        {
          alert('Not enough points');
          return;
        }
        p = document.getElementById("ShopAreaP3");
        number = Number(p.textContent);
        p.textContent = number+1;
        setCookie('upgrade3', number+1, {path: '/'});
        ChangeScore(-350);
        break;
      default:
        alert('Error while buying upgrade');
    }
  }

  function AutoClick()
  {
    useEffect(() => {
      const interval = setInterval(() => {
        let valueToClick = 1 * GetUpgrades('upgrade1') + 3 * GetUpgrades('upgrade2') + 5 * GetUpgrades('upgrade3');
        ChangeScore(valueToClick);
      }, 1000);
    
      return () => clearInterval(interval);
    }, []);
  }

  return (
    <div className="App">
      <Score />
      <ClickArea />
      <ShopArea />
    </div>
  );
}

export default App;
