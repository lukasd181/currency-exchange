let fromCurrency = prompt("From currency: ");
let toCurrency = prompt("To currency: ");
let amount = prompt("Enter the amount: ");
let ratio = 23000;

currencyExchange();

function currencyExchange() {
  let result = 0;
  let fromCurrencyLower = fromCurrency.toLowerCase(fromCurrency);
  fromCurrencyLower = fromCurrencyLower.trim();
  let toCurrencyLower = toCurrency.toLowerCase(toCurrency);
  toCurrencyLower = toCurrencyLower.trim();
  if (
    (fromCurrencyLower === "usd" || fromCurrencyLower === "vnd") &&
    (toCurrencyLower === "usd" || toCurrencyLower === "vnd") &&
    !isNaN(amount)
  ) {
    if (fromCurrencyLower === "usd" && toCurrencyLower === "vnd") {
      result = fromUsdToVnd(amount);
      let input = formatCurrency(fromCurrencyLower, amount);
      let newResult = formatCurrency(toCurrencyLower, result);
      console.log("Amount:", input);
      console.log("Exchanged currency:", newResult);
    } else if (fromCurrencyLower === "vnd" && toCurrencyLower === "usd") {
      result = fromVndToUsd(amount);
      let newResult = formatCurrency(toCurrencyLower, result);
      console.log("Amount:", input);
      console.log("Exchanged currency:", newResult);
    }
  } else {
    alert("Invalid Input!");
  }
}

function fromUsdToVnd(amount) {
  return (result = amount * ratio);
}

function fromVndToUsd(amount) {
  return (result = amount / ratio);
}

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency",
  });
  return formatter.format(value);
}
