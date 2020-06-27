{
  const calculateOutcome = (amount, currency) => {
    const rateEUR = 4.451;
    const rateUSD = 3.754;

    switch (currency) {
      case "USD":
        return amount * rateUSD;

      case "EUR":
        return amount * rateEUR;
    }
  };


  const updtadeResutText = (outcome, currency) => {
    const finalOutcome = document.querySelector(".js-outcome");
    finalOutcome.innerHTML = `${outcome.toFixed(2)} ${currency}`;
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();

    const checkAmount = document.querySelector(".js-amount");
    const changeCurrency = document.querySelector(".js-currency");
    const amount = +checkAmount.value;
    const currency = changeCurrency.value;

    const outcome = calculateOutcome(amount, currency)

    updtadeResutText(outcome, currency);
  };

  const init = () => {
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();

};