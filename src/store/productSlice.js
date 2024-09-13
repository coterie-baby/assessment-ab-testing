const initialState = [
  { id: 0, name: 'The Diaper Size 01' },
  { id: 1, name: 'The Diaper Size 02' },
  { id: 2, name: 'The Diaper Size 03' },
]

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/productAdded": {
      return [...state, ...action.payload];
    }
    case "product/productRemoved": {
      return state.filter((product) => product.id !== action.payload.id);
    }
    default:
      return state;
  }
}
