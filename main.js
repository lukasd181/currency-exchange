let ratio = 23000;

function reverseCurrencyExchange() {
  let fromDropRe = document.getElementById("drop-From");
  let fromDropValueRe = fromDropRe.value;
  console.log(fromDropValueRe);
  //   let fromDropValueRe = fromDropRe.options[fromDropRe.selectedIndex].value;
  let toDropRe = document.getElementById("drop-To");
  let toDropValueRe = toDropRe.value;
  //   let toDropValueRe = toDropRe.options[toDropRe.selectedIndex].value;
  //   let opts = fromDropRe.options;
  //   let usd = opts[0];
  document.getElementById("drop-From").value = toDropValueRe;
  document.getElementById("drop-To").value = fromDropValueRe;
  //   let vnd = opts[1];
  //   console.log(vnd);
  //   if (fromDropValueRe == "USD" && toDropValueRe == "VND") {
  //     document.getElementById("drop-From").value = "VND";
  // document.getElementById("drop-To").value = "USD";
  // fromDropRe.selectedIndex = vnd;
  // console.log(toDropValueRe);
  // toDropRe.selectedIndex = usd;
  // console.log(toDropValueRe);
  // currencyExchange();
  //   } else if (fromDropValueRe == "VND" && toDropValueRe == "USD") {

  // fromDropRe.selectedIndex = usd;
  // toDropRe.selectedIndex = vnd;
  currencyExchange();
}

function currencyExchange() {
  let fromDrop = document.getElementById("drop-From");
  let fromDropValue = fromDrop.value;
  let toDrop = document.getElementById("drop-To");
  let toDropValue = toDrop.value;
  let inputAmount = document.getElementById("input-amount").value;

  if (fromDropValue == "USD" && toDropValue == "VND") {
    let result = fromUsdToVnd(inputAmount);
    let formattedResult = formatCurrency(toDropValue, result);
    document.getElementById(
      "text-result"
    ).innerHTML = `converted amount is ${formattedResult}`;
  } else if (fromDropValue == "VND" && toDropValue == "USD") {
    let result = fromVndToUsd(inputAmount);
    let formattedResult = formatCurrency(toDropValue, result);
    document.getElementById(
      "text-result"
    ).innerHTML = `converted amount is ${formattedResult}`;
  }

  //   let result = 0;
  //   let fromCurrencyLower = fromCurrency.toLowerCase(fromCurrency);
  //   fromCurrencyLower = fromCurrencyLower.trim();
  //   let toCurrencyLower = toCurrency.toLowerCase(toCurrency);
  //   toCurrencyLower = toCurrencyLower.trim();
  //   if (
  //     (fromCurrencyLower === "usd" || fromCurrencyLower === "vnd") &&
  //     (toCurrencyLower === "usd" || toCurrencyLower === "vnd") &&
  //     !isNaN(amount)
  //   ) {
  //     if (fromCurrencyLower === "usd" && toCurrencyLower === "vnd") {
  //       result = fromUsdToVnd(amount);
  //       let input = formatCurrency(fromCurrencyLower, amount);
  //       let newResult = formatCurrency(toCurrencyLower, result);
  //       console.log("Amount:", input);
  //       console.log("Exchanged currency:", newResult);
  //     } else if (fromCurrencyLower === "vnd" && toCurrencyLower === "usd") {
  //       result = fromVndToUsd(amount);
  //       let newResult = formatCurrency(toCurrencyLower, result);
  //       console.log("Amount:", input);
  //       console.log("Exchanged currency:", newResult);
  //     }
  //   } else {
  //     alert("Invalid Input!");
  //   }
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
