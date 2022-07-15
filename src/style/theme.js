import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      '*': {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        width: "100%",
        height: "100%",
      },
    }
  }
})

export default theme;