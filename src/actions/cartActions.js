// cart actions

export function addItem (payload) {
    return {
        type: 'ADD_ITEM',
        payload
    }
}

export function deleteItem (cart) {
    return {
        type: 'DELETE_ITEM',
        payload: cart
    }
}

export function updateCart (_id, unit) {
    return {
        type: 'UPDATE_CART',
        _id,
        unit
    }
}