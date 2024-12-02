
import '@mantine/core/styles.css';
import { Flex, MantineProvider, createTheme } from '@mantine/core';
import ColorScheme from './ColorScheme';
import './App.css'
import Fetch from './components/Fetch';
import PageTitle from './components/PageTitle';

const App = () => {

  const theme = createTheme({
    fontFamily: 'Switzer, sans-serif',
    headings: { fontFamily: "Host Grotesk, serif", fontWeight: 800 },
    colors: {
      'oklch-blue': [
        'oklch(96.27% 0.0217 238.66)',
        'oklch(92.66% 0.0429 240.01)',
        'oklch(86.02% 0.0827 241.66)',
        'oklch(78.2% 0.13 243.83)',
        'oklch(71.8% 0.1686 246.06)',
        'oklch(66.89% 0.1986 248.32)',
        'oklch(62.59% 0.2247 250.29)',
        'oklch(58.56% 0.2209 251.26)',
        'oklch(54.26% 0.2067 251.67)',
        'oklch(49.72% 0.1888 251.59)',
      ],
    },
    primaryColor: 'oklch-blue',
  });

  // <ColorScheme></ColorScheme>
  return (
    <>
    <MantineProvider theme={theme}>
      <Flex className='flex-container' direction="column" justify="center" align="center">
        <PageTitle></PageTitle>
        <Fetch></Fetch>
      </Flex>
    </MantineProvider>
    </>
  )
}

export default App