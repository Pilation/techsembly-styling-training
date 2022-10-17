import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
// hooks
// import useSettings from '../hooks/useSettings';
//
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(() => ({
    palette: palette,
    typography,
    breakpoints,
    shape: { borderRadius: 8 },
    shadows: shadows,
    customShadows: customShadows,
    // themeDirection: 'rtl',
  }));

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
