export const ID = {
  APP: 'app',

  // 탭 메뉴 버튼
  PRODUCT_PURCHASE_MENU: 'product-purchase-menu',
  VENDING_MACHINE_MANAGE_MENU: 'vending-machine-manage-menu',
  PRODUCT_ADD_MENU: 'product-add-menu',

  // 상품 관리(추가) 메뉴
  PRODUCT_NAME_INPUT: 'product-name-input',
  PRODUCT_PRICE_INPUT: 'product-price-input',
  PRODUCT_QUANTITY_INPUT: 'product-quantity-input',
  PRODUCT_ADD_BUTTON: 'product-add-button',

  // 잔돈 충전 (자판기 보유 동전) 메뉴
  VENDING_MACHINE_CHARGE_INPUT: 'vending-machine-charge-input',
  VENDING_MACHINE_CHARGE_BUTTON: 'vending-machine-charge-button',
  VENDING_MACHINE_CHARGE_AMOUNT: 'vending-machine-charge-amount',
  VENDING_MACHINE_COIN: [
    'vending-machine-coin-500-quantity',
    'vending-machine-coin-100-quantity',
    'vending-machine-coin-50-quantity',
    'vending-machine-coin-10-quantity',
  ],

  // 상품 구매 메뉴
  CHARGE_INPUT: 'charge-input',
  CHARGE_BUTTON: 'charge-button',
  CHARGE_AMOUNT: 'charge-amount',
  COIN_RETURN_BUTTON: 'coin-return-button',
  RETURN_COIN: [
    'coin-500-quantity',
    'coin-100-quantity',
    'coin-50-quantity',
    'coin-10-quantity',
  ],
};

export const CLASS = {
  PRODUCT_MANAGE_ITEM: 'product-manage-item',
  PRODUCT_MANAGE: [
    'product-manage-name',
    'product-manage-price',
    'product-manage-quantity',
  ],

  PRODUCT_PURCHASE_ITEM: 'product-purchase-item',
  PRODUCT_PURCHASE_BUTTON: 'purchase-button',
  PRODUCT_PURCHASE: [
    'product-purchase-name',
    'product-purchase-price',
    'product-purchase-quantity',
  ],
};

export const DATASET = ['productName', 'productPrice', 'productQuantity'];
