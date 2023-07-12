import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "@/pages/Home";
import styles from "./App.module.scss";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <main>
                <h1 className={ styles.title }>
                    Diables del Jordiet
                </h1>
                <Home />
            </main>
        </QueryClientProvider>
    );
}

export default App;
