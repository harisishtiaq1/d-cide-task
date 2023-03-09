import { createTheme, ThemeProvider,Box } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const colorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
            default:'linear-gradient(145deg, #34393f, #16191b)'
        },
        backgroundColor:{
            default:'#34393f'
        },
        text:{
            default:'white'
        }
      }),
      ...(mode === 'light' && {
        background: {
            default:'linear-gradient(145deg, #cfcfe0, #babaca)',
            paper:'#D9D9E6',
        },
        backgroundColor:{
            default:'#cfcfe0',
            paper:'#D9D9E6'
        },
      }),
    },
  });
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <Box
      sx={{
        width: '100%',
        backgroundColor: 'backgroundColor.default',
        color: 'text.primary',
        height:'100vh',
        background:"background.default"
      }}
    >{children}</Box></ThemeProvider>
    </colorModeContext.Provider>
  );
};
