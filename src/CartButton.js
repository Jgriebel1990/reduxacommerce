import React from 'react';
import { connect } from 'react-redux';
import { cartActions } from './cart';

const CartButton = props => {
    const count = Object.keys(props.products)
                        .map(key => props.products[key])
                        .map(p => p.count)
                        .reduce((prev, next) => prev + next)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => props.toggle() }>
                cart
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggle: () => dispatch(cartActions.toggleCart())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);