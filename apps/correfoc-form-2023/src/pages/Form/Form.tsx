import React, { useState } from "react";
import styles from "./Form.module.scss";
import { PercentageButton } from "@/components/PercentageButton";
import { getRandomNumbers } from "@/utils/numberUtils";

export const Form = () => {
    const [hasClicked, setHasClicked] = useState(false);
    const [hasClickedWrong, setHasClickedWrong] = useState(false);

    const percentages = React.useMemo(() => getRandomNumbers(), []);

    const handleWrongClick = () => {
        if (!hasClickedWrong && !hasClicked) setHasClickedWrong(true);
    };

    const handleCorrectClick = () => {
        if (!hasClickedWrong && !hasClicked) setHasClicked(true);
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.title }>Elegeix el millor candidat </div>
            <div className={ styles.formContainer }>
                <PercentageButton percentage={ percentages.number1 } onClick={ handleWrongClick } label="Amazon"
                                  show={ hasClickedWrong || hasClicked } />
                <PercentageButton percentage={ percentages.number2 } onClick={ handleWrongClick } label="Spotify"
                                  show={ hasClickedWrong || hasClicked } />
                <PercentageButton percentage={ percentages.number3 } onClick={ handleWrongClick } label="Facebook"
                                  show={ hasClickedWrong || hasClicked } />
                <PercentageButton percentage={ percentages.bigNumber } onClick={ handleCorrectClick } label="El Jordiet"
                                  show={ hasClickedWrong || hasClicked } winner />
            </div>
            { hasClicked &&
                <div className={ styles.winner }>Gràcies per participar!</div>
            }
            { hasClickedWrong && (
                <div className={ styles.winner }>De veritat creus que no som els millors? Això t'ho hauries de fer mirar
                    que no pinta bé...</div>
            ) }
        </div>
    );
};
