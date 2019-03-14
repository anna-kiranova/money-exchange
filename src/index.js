let coins = [50, 25, 10, 5, 1];
let coinsNames = ['H', 'Q', 'D', 'N', 'P'];

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency === 0) {
        return {};
    }
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let change = {};
    for (let i = 0; i < coins.length; i++) {
        let quantity = Math.floor(currency / coins[i]);
        if (quantity > 0) {
            currency = currency - quantity * coins[i];
            // добавляем в объект, если количество монет больше нуля
            change[coinsNames[i]] = quantity;
        }
    }
    return change;
}