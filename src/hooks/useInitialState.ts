import { useState } from "react";
import { TProduct } from "@src/models/products.model";
import { FunctionBody } from "typescript";

export interface TInitialState {
  orders: TProduct[];
}

export interface TUseInitialState {
  state: TInitialState,
  addProduct: any
}

const initialState: TInitialState = {
  orders: [],
};

const useInitialState = (): TUseInitialState => {
  const [state, setState] = useState(initialState);
  function addProduct(...products: TProduct[]) {
    console.log(...products);
    
    setState({
      ...state,
      orders: [...state.orders, ...products.flatMap(e=>e)],
    });
  }
  return { state: state, addProduct };
};

export default useInitialState;
