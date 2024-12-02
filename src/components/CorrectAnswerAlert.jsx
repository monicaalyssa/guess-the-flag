import { Alert, Transition } from "@mantine/core";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const CorrectAnswerAlert = ({ showCorrectAlert, setShowCorrectAlert }) => {
    const icon = <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>  
    const [mounted, setMounted] = useState(false)
   
    useEffect(() => {
    if (showCorrectAlert) {
        setMounted(true)
        const timer = setTimeout(() => {
            setMounted(false);
            setTimeout(() => {
              setShowCorrectAlert(false);
            }, 100);
          }, 1400); 
        return () => clearTimeout(timer)
    }
    }, [showCorrectAlert, setShowCorrectAlert])

    return (
    <Transition mounted={mounted} transition="pop" duration={100}>
      {(styles) => (
        <Alert styles={styles} color="green" pos="absolute" bottom={220} classNames={{icon: 'green-alert'}} icon={icon}></Alert>
      )}
    </Transition>
    )
}

CorrectAnswerAlert.propTypes = {
  showCorrectAlert: PropTypes.bool.isRequired,
  setShowCorrectAlert: PropTypes.func.isRequired,
};

export default CorrectAnswerAlert;