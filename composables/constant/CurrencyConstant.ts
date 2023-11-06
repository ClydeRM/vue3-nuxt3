export class CurrencyPo {
  CAD: AbstractCurrency = {
    code: "",
    value: 0,
  };
  EUR: AbstractCurrency = {
    code: "",
    value: 0,
  };
  USD: AbstractCurrency = {
    code: "",
    value: 0,
  };
}

export class AbstractCurrency {
  code: string = "";
  value: number = 0;
}
