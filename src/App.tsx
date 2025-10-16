import React, { useReducer } from "react";
import "./App.css";
import {
  formatterReducer,
  type FormatterState,
} from "./context/globalContext/globalReducers";
import { useTheme } from "./context/globalContext/globalContext";
// import { formatterReducer, FormatterState } from './reducer/formatterReducer';
// import { useTheme } from './context/ThemeContext';

const initialState: FormatterState = {
  leftValue: "",
  rightValue: "",
  isJsonParse: true,
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(formatterReducer, initialState);
  const { state: themeState, dispatch: themeDispatch } = useTheme();

  const handleConvert = () => dispatch({ type: "CONVERT" });
  const handleSwitch = () => dispatch({ type: "TOGGLE_MODE" });
  const toggleTheme = () => themeDispatch({ type: "TOGGLE_THEME" });

  return (
    <div className={`App ${themeState.theme}`}>
      <header className="App-header">
        <h1>JSON Formatter</h1>
        <div className="controls">
          <button onClick={toggleTheme}>
            Switch to {themeState.theme === "dark" ? "Light" : "Dark"} Theme
          </button>
          <button onClick={handleSwitch}>Switch</button>
        </div>
      </header>

      <main className="App-main">
        <div className="editor-container input">
          <h2>{state.isJsonParse ? "JSON Input" : "Object Input"}</h2>
          <textarea
            value={state.leftValue}
            onChange={(e) =>
              dispatch({ type: "SET_LEFT_VALUE", payload: e.target.value })
            }
            placeholder={
              state.isJsonParse
                ? "Enter JSON here"
                : "Enter a JavaScript object here"
            }
          />
        </div>

        <div className="editor-container output">
          <h2>{state.isJsonParse ? "Object Output" : "JSON Output"}</h2>
          <textarea
            value={state.rightValue}
            readOnly
            placeholder={
              state.isJsonParse
                ? "Parsed object will appear here"
                : "JSON string will appear here"
            }
          />
        </div>
      </main>
      <div className="button-container">
        <button className="convert-button" onClick={handleConvert}>
          {state.isJsonParse ? "Parse" : "Stringify"}
        </button>
      </div>
    </div>
  );
};

export default App;
