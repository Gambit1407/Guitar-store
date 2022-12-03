import { guitars } from './config.js';

const initState = {
  guitars: guitars,
  cart: [],
  finalPrice: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'UpdateGuitar': {
      return {
        guitars: action.payload,
      };
    }
    case 'RemoveCount': {
      const id = action.payload;
      const searchGuitar = state.cart.find(guitar => guitar.id === id);
      if (searchGuitar) {
        const updateCart = {...searchGuitar, count: searchGuitar.count - 1};
        const cart = [...state.cart];
        const indexProduct = state.cart.findIndex(product => product.id === id);
        cart.splice(indexProduct, 1, updateCart);
        const sumPrice = cart.reduce((acc, product) => {
          return  acc + (product.count * product.price);
        }, 0)

        return {
          ...state, 
          cart: [...cart],  
          finalPrice: sumPrice
        }
      }
      return { ...state };
    }
    case 'AddCount': {
      const id = action.payload;
      const searchGuitar = state.cart.find(guitar => guitar.id === id);
      if (searchGuitar) {
        const updateCart = {...searchGuitar, count: searchGuitar.count + 1};
        const cart = [...state.cart];
        const indexProduct = state.cart.findIndex(product => product.id === id);
        cart.splice(indexProduct, 1, updateCart);
        const sumPrice = cart.reduce((acc, product) => {
          return  acc + (product.count * product.price);
        }, 0)

        return {
          ...state, 
          cart: [...cart],  
          finalPrice: sumPrice
        }
      }
      return { ...state };
    }
    case 'BuyGuitar': {
      const guitar = action.payload;
      const guitarCart = state.cart.find(product => product.id === guitar.id);
      
      if (!guitarCart) {
        const newGuitarCart = {count: 1, ...guitar};
        const newCart = [...state.cart, newGuitarCart];
        const sumPrice = newCart.reduce((acc, product) => {
          return  acc + (product.count * product.price);
        }, 0)
        return {
          ...state,
          cart: newCart,
          finalPrice: sumPrice  
        };
      }
      return { ...state };
    }
    case 'DeleteProduct': {
      const deleteIdGuitar = action.payload;
      const guitarDeleteCart = state.cart.find(product => product.id === deleteIdGuitar);
      
      if (guitarDeleteCart) {
        const newGuitarsCart = state.cart.filter(product => product.id !== guitarDeleteCart.id)
        const sumPrice = newGuitarsCart.reduce((acc, product) => {
          return  acc + (product.count * product.price);
        }, 0)
        return {
          ...state,
          cart: newGuitarsCart,
          finalPrice: sumPrice
        };
      }
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
}

export {
  reducer,
  initState
}
