import  * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = num => {
  return {
    type: actionTypes.ADD,
    val: num
  };
};

export const subtract = num => {
  return {
    type: actionTypes.SUBTRACT,
    val: num
  };
};