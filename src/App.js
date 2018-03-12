import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import SearchBar from './SearchBar';
import CartButton from './CartButton';

class App extends Component {
  render() {
    return (
      <div>
        <CartButton />
        <SearchBar />
        <ProductList searchTerm={this.props.search}
                     products={this.props.products} />
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
