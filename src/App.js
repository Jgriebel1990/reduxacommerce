import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import SearchBar from './SearchBar';
import CartButton from './CartButton';


class App extends Component {
  render() {
    const cartListStyles = {display: this.props.cart === false ? 'none' : 'block'};
    return (
      <div>
        <CartButton />
        <SearchBar />
        <ProductList searchTerm={this.props.search}
                     products={this.props.products} />
        <div style={cartListStyles}>
          <button>cart</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
