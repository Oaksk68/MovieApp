import React from "react";
import "./App.css";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);