const convertMoneyToCoins = (money, coins) => 
{
    coins = coins.sort((a, b) => a + b);
    let returnCoins = [];
    while(money != 0)
    {
        let found = false;
        for(let i = 0; i < coins.length; i++)
        {
            console.log(coins[i]);
            if(money - coins[i] >= 0 && !found)
            {
                returnCoins.push(coins[i]);
                money -= coins[i];
                found = true;
            }
        }
    }
    return returnCoins;
}

console.log("Money to coins 46, [25, 10, 5, 2, 1]: " + convertMoneyToCoins(46, [25, 10, 5, 2, 1]));