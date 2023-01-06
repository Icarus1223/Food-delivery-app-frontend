export function addToCart(addPizza) {
  return {
    type: 'ADD_TO_CART',
    payload: addPizza,
  }
}

export function tokenGenerate(token) {
  return {
    type: 'Token_To_Generate',
    payload: token,
  }
}

export function logOut(items) {
  localStorage.clear()
  return {
    type: 'REMOVE_TOKEN',
    payload: items,
  }
}

