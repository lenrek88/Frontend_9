import Filters from "../filters/Filters";
import {useReducer} from 'react'
import storeReducer from "../reducer/filmsReducer";
import { initalState } from "../reducer/filmsReducer";
import { StoreContext, StoreDispatchContext } from "../context/context";
export default function Main() {
  const [store, dispatch] = useReducer(storeReducer, initalState);


  return (
    <div>
      <StoreContext.Provider value ={store}>
        <StoreDispatchContext.Provider value={dispatch}>
        <Filters></Filters>
        </StoreDispatchContext.Provider>
      </StoreContext.Provider>
    </div>
  );
}
