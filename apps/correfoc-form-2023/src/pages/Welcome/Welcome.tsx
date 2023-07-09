import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";

export const Welcome = () => (
    <div className={ styles.container }>
        <p>
            Si, el futur de l'infern es a les teves mans, el teu vot determinarà el nostre lider els propers mil·lenis.
            Tria a consciència
        </p>
        <Link to="/form" className={ styles.button }>
            Emplena l'enquesta
        </Link>
    </div>
);
