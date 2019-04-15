import * as actionTypes from "./actionTypes";

export const updateState = (value) => {
    return {
      type: actionTypes.COMPONENT_CLICKED,
      value: value
    }
  }
