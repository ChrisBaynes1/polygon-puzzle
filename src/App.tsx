import logo from "./logo.svg";
import "./App.css";
import Hexagon from "./components/shapes/Hexagon";
import { ColorGroup } from "./constants/shapes/colors.enum";
import Triangle from "./components/shapes/Triangle";
import Square from "./components/shapes/Square";
import Pentagon from "./components/shapes/Pentagon";
import { useEffect, useState } from "react";
import React from "react";
import { IStateObject } from "./interfaces/IStateObject";
import { Console } from "console";

function App() {
  const initialState: IStateObject = {
    black: [3, 4, 5, 6],
    white: [],
    grey: [],
  };

  const [state, setState] = useState(initialState);

  const mergedList = [...state.black, ...state.grey, ...state.white].sort();

  useEffect(() => {
    if (state.white.length < 4 && state.black.length > 0) {
      const maxiValue = state.black[state.black.length - 1];

      if (maxiValue === 4) {
        const newState: IStateObject = {
          ...state,
          black: [...state.black.filter((value) => value !== maxiValue)],
          white: [...state.white, maxiValue],
        };
        console.log(newState);
        setState(newState);
      } else {
        const newState: IStateObject = {
          ...state,
          black: [...state.black.filter((value) => value !== maxiValue)],
          grey: [...state.grey, maxiValue],
        };
        console.log(newState);
        setState(newState);
      }
    }
  }, [state, state.black]);

  useEffect(() => {
    if (state.white.length < 4 && state.grey.length > 0) {
      const maxiValue = state.grey[state.grey.length - 1];
      if (maxiValue === 4) {
        const newState: IStateObject = {
          ...state,
          grey: [...state.grey.filter((value) => value !== maxiValue)],
          black: [...state.black, maxiValue],
        };
        console.log(newState);
        setState(newState);
      } else {
        const newState: IStateObject = {
          ...state,
          grey: [...state.grey.filter((value) => value !== maxiValue)],
          white: [...state.white, maxiValue],
        };
        console.log(state);
        setState(newState);
      }
    }
  }, [state, state.grey]);

  useEffect(() => {
    if (state.white.length < 4 && state.white.length > 0) {
      const maxiValue = state.white[state.white.length - 1];

      const newState: IStateObject = {
        ...state,
        white: [...state.white.filter((value) => value !== maxiValue)],
        black: [...state.black, maxiValue],
      };
      console.log(newState);
      setState(newState);
    }
  }, []);

  const getColor = (value: number) => {
    if (state.black.includes(value)) return ColorGroup.Black;
    if (state.grey.includes(value)) return ColorGroup.Grey;
    return ColorGroup.White;
  };

  const components = [Triangle, Square, Pentagon, Hexagon];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>Input</label>
        <div>
          {initialState.black.map((item: number, key: number) =>
            React.createElement(components[item - 3], {
              key,
              fill: ColorGroup.Black,
            })
          )}
        </div>
        <label>Output</label>
        <div>
          {mergedList.map((item: number, key: number) =>
            React.createElement(components[item - 3], {
              key,
              fill: getColor(item),
            })
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
