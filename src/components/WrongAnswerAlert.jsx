import { Alert, Transition } from "@mantine/core";
import { useEffect, useState } from "react";

const WrongAnswerAlert = ({ showAlert, setShowAlert }) => {
const [mounted, setMounted] = useState(false)
const icon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-alert-triangle"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M12 9v4" /> <path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z" /> <path d="M12 16h.01" /> </svg>

useEffect(() => {
  if (showAlert) {
      setMounted(true);
      const timer = setTimeout(() => {
        setMounted(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 100);
      }, 1500); 
      return () => clearTimeout(timer);
  } 
}, [showAlert, setShowAlert]);

  return (

      <Transition mounted={mounted} transition="pop" duration={300}>
      {(styles) => (
        <Alert classNames={{ icon: 'alert-icon' }} style={styles} icon={icon} pos="absolute" bottom={-40} variant="light" color="red" title="Incorrect answer"></Alert>
      )}
      </Transition>

  );
};

export default WrongAnswerAlert;
