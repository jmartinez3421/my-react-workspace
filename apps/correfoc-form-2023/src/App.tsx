import styles from "./App.module.scss";
import { AppRouter } from "@/AppRouter";
import { Timeout } from "@/pages/Timeout";

function App() {
    const actualTime = new Date().getTime();
    const eventTime = new Date("2023-08-12T21:00:00").getTime();

    return (
        <main>
            <h1 className={ styles.title }>
                Diables del Jordiet
            </h1>
            { actualTime < eventTime ? <Timeout /> : (
                <div className={ styles.container }>
                    <AppRouter />
                </div>
            )}
        </main>
    );
}

export default App;
