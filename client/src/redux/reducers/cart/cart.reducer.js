import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  show: false,
  cartQuantity: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  const quantity = state.cartItems.map((cartItem) => cartItem.quantity);
  console.log(`This is the ${quantity}`);

  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        show: !state.show,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        cartQuantity: state.cartQuantity + state.cartItems.quantity,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        // quantity: cartQuantity > 0 ? cartQuantity - 1 : null,
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
