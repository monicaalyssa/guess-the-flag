import { Box, Text, Tooltip } from "@mantine/core";
import PropTypes from 'prop-types';

const HelpHint = ({ hint , setHint, countryHint }) => {

    const handleHint = () => {
        setHint(true)
    }

    return (
        <>        
        <Box mb={40} h={20} onClick={handleHint} style={{cursor: "pointer"}}>
        {hint ? (
            <Text>{countryHint}</Text>            
        ) : ( 
            <Tooltip label="Stuck? Click to reveal a hint" position="right">
            <svg xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-help-hexagon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.425 1.414a3.33 3.33 0 0 1 3.026 -.097l.19 .097l6.775 3.995l.096 .063l.092 .077l.107 .075a3.224 3.224 0 0 1 1.266 2.188l.018 .202l.005 .204v7.284c0 1.106 -.57 2.129 -1.454 2.693l-.17 .1l-6.803 4.302c-.918 .504 -2.019 .535 -3.004 .068l-.196 -.1l-6.695 -4.237a3.225 3.225 0 0 1 -1.671 -2.619l-.007 -.207v-7.285c0 -1.106 .57 -2.128 1.476 -2.705l6.95 -4.098zm1.575 13.586a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" /></svg>
            </Tooltip>
        )}
        </Box>
        </>
    )
}

HelpHint.propTypes = {
    hint: PropTypes.bool.isRequired,
    setHint: PropTypes.func.isRequired,
};

export default HelpHint;