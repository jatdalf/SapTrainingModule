import React from 'react';
import styles from './NavigationButtons.module.css'; // Asegúrate de importar los estilos correctos
import Volver from '../Volver/Volver';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext
}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={`${styles.leftArrow} ${currentStep === 1 ? styles.disabledButton : ''}`}
        onClick={onPrevious}
        disabled={currentStep === 1} // Deshabilita si estamos en el primer paso
      >
        &#10148;
      </button>
      <span className={styles.stepNumber}>PASO {currentStep}</span>
      <button
        className={`${styles.rightArrow} ${currentStep === totalSteps ? styles.disabledButton : ''}`}
        onClick={onNext}
        disabled={currentStep === totalSteps} // Deshabilita si estamos en el último paso
      >
        &#10148;
      </button>
      <div className={styles.volverContainer}>
        <Volver />
      </div>
    </div>
  );
};

export default NavigationButtons;