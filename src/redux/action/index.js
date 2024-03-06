import { dec,inc } from "./actiontype";

function incHandler() {
    return (dispatch) => {
        dispatch({ type: inc });
       
    };
  }
  function decHandler() {
    return { type: dec };
  }


export {incHandler,decHandler}