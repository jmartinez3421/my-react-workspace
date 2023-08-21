import React from "react";
import { UtilsAndHooksQueryClientProvider } from "@jmartinez3421/utils-and-hooks";
import { Home } from "@/pages/Home";
import styles from "./App.module.scss";

function App() {
  return (
    <UtilsAndHooksQueryClientProvider>
      <main>
        <h1 className={ styles.title }>
          Diables del Jordiet
        </h1>
        <Home />
      </main>
    </UtilsAndHooksQueryClientProvider>
  );
}

export default App;
