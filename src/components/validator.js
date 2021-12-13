import { ERROR } from '../constants/message.js';

const isEmpty = (value) => {
  return !value;
};

const isMoreThan100Won = (value) => {
  return Number(value) >= 100;
};

const isDividedBy10 = (value) => {
  return Number(value) % 10 === 0;
};

const isMoreThanOne = (value) => {
  return Number(value) > 0;
};

const isInteger = (value) => {
  return Number.isInteger(Number(value));
};

const isValidProductName = (name) => {
  return !isEmpty(name);
};

const isMoreThan10Won = (value) => {
  return Number(value) >= 10;
};

const isValidProductPrice = (price) => {
  return !isEmpty(price) && isMoreThan100Won(price) && isDividedBy10(price);
};

const isValidProducQuantity = (quantity) => {
  return !isEmpty(quantity) && isMoreThanOne(quantity) && isInteger(quantity);
};

export const isValidProduct = (name, price, quantity) => {
  return (
    isValidProductName(name) &&
    isValidProductPrice(price) &&
    isValidProducQuantity(quantity)
  );
};

export const alertProductErrorMessage = (name, price, quantity) => {
  if (!isValidProductName(name)) {
    alert(ERROR.PRODUCT_NAME);
  }
  if (!isValidProductPrice(price)) {
    alert(ERROR.PRODUCT_PRICE);
  }
  if (!isValidProducQuantity(quantity)) {
    alert(ERROR.PRODUCT_QUANTITY);
  }
};

export const isValidCharge = (charge) => {
  return !isEmpty(charge) && isDividedBy10(charge) && isMoreThan10Won(charge);
};

export const alertChargeErrorMessage = (charge) => {
  alert(ERROR.CHARGE);
};
