import React from "react";
import styles from "./PercentageButton.module.scss";

export const PercentageButton = ({ percentage, onClick, label, show, winner }: {
    percentage: number;
    onClick: () => void;
    label: string;
    show: boolean;
    winner?: boolean;
}) => {
    // This is a hack to make the animation work
    const [percentageState, setPercentageState] = React.useState(0);
    React.useEffect(() => {
        if (show) {
            let actualCount = 0;
            const interval = setInterval(() => {
                actualCount += 1;
                setPercentageState(actualCount);
                if (actualCount === percentage) {
                    clearInterval(interval);
                }
            }, 15);
            return () => clearInterval(interval);
        }
        setPercentageState(0);
        return () => {}
    }, [show])

    return (
        <button type="button" onClick={ onClick }
                className={ `${ styles.button } ${ show && winner ? styles.winner : "" }` }
                style={ { background: `linear-gradient(to right, #202020 ${ percentageState }%, #303030 ${ percentageState }%)` } }>
            <div>
                { label }
            </div>
            { show && (
                <div>
                    { percentage }%
                </div>
            ) }
        </button>
    )
};
