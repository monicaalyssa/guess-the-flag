import { Button, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";

const ColorScheme = () => {
  // eslint-disable-next-line no-unused-vars
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  
  return <Button onClick={toggleColorScheme}>Toggle</Button>;
};

export default ColorScheme;
