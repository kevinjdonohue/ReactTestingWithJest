class conversionHelper {
  toLocaleCurrencyString(amount, locale = "USA") {
    return (
      this.getSymbolForCountry(locale) +
      this.toCurrencyString(this.convertFromUSD(locale, amount))
    );
  }

  convertFromUSD(locale, amount) {
    return amount * rates[locale];
  }

  getSymbolForCountry(locale) {
    return symbols[locale];
  }

  toCurrencyString(amount) {
    return amount.toFixed(2);
  }
}

const symbols = {
    "USA" : "$",
    "CAD" : "$",
    "GB" : "l"  //need pound symbol
};

const rates = {
    "USA" : 1,
    "CAD" : 1.15,
    "GB" : 0.65
};

export default conversionHelper;
