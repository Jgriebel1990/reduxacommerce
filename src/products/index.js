import * as types from './types';
import * as productActions from './actions';


const initialState = {
  'ff6fdc7a-3fa1-45da-803c-b1eeedf44a05': {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Javelin (caution)",
    price: 500.0,
    count: 0
  },
  '404fba0b-2592-4999-bd20-d0bc03165214': {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Snail",
    price: 3.99,
    count: 0
  },
  '29ebcb1c-5f23-4c51-9161-b773ed52fa1f': {
    imgSrc: "https://via.placeholder.com/100x100",
    name: "Rug",
    price: 93.47,
    count: 0
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM: {
      const id = action.payload.value;
      const selectedItem = state[id];
      const newProduct = {
        ...selectedItem,
        count: selectedItem.count + 1
      };
      return {
        ...state,
        [id]: newProduct,
      };
    }
    case types.REMOVE_ITEM: {
      const id = action.payload.value;
      const selectedItem = state[id];
      const newProduct = {
          ...selectedItem,
          count: selectedItem.count === 0 ? 0 : selectedItem.count - 1
      }
      return {
        ...state,
        [id]: newProduct,
      }
    }
    default:
      return state;
  }
};

export {
    productActions
}

export default reducer;
