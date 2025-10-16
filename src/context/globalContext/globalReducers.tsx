import { formatAsJsObject } from "../../utils/globalUtils";
import JSON5 from "json5";

export interface FormatterState {
  leftValue: string;
  rightValue: string;
  isJsonParse: boolean;
  objValue?: object;
}

type FormatterAction =
  | { type: "SET_LEFT_VALUE"; payload: string }
  | { type: "SET_RIGHT_VALUE"; payload: string }
  | { type: "TOGGLE_MODE" }
  | { type: "CONVERT" };

export const formatterReducer = (
  state: FormatterState,
  action: FormatterAction
): FormatterState => {
  switch (action.type) {
    case "SET_LEFT_VALUE":
      return { ...state, leftValue: action.payload };
    case "SET_RIGHT_VALUE":
      return { ...state, rightValue: action.payload };
    case "TOGGLE_MODE":
      return {
        ...state,
        isJsonParse: !state.isJsonParse,
        leftValue: state.rightValue,
        rightValue: state.leftValue,
      };
    case "CONVERT":
      if (state.isJsonParse) {
        try {
          const parsed = JSON.parse(state.leftValue);
          return {
            ...state,
            rightValue: formatAsJsObject(parsed), // JS-like object for display
            objValue: parsed, // store actual object internally
          };
        } catch {
          return { ...state, rightValue: "Invalid JSON" };
        }
      } else {
        try {
          const obj = JSON5.parse(state.leftValue);
          return {
            ...state,
            rightValue: JSON.stringify(obj, null, 2), // JSON string for display
            objValue: obj, // store actual object internally
          };
        } catch {
          return { ...state, rightValue: "Invalid JavaScript object" };
        }
      }
  }
};
