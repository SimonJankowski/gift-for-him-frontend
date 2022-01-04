import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://lit-anchorage-68252.herokuapp.com/api/products/${id}`);
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
    })
    localStorage.setItem('cart', JSON.stringyfy(getState().cart.cartItems));
}