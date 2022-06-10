import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { SudokuProvider } from './components/SudokuContext';

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <SudokuProvider>
        <App />
    </SudokuProvider>
);

