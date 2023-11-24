import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      {/* TODO: Arreglar paddings en navbar causado por el px-4 */}
      <main className="dark text-foreground bg-background min-h-screen flex flex-col items-center">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
