//mui
import { createTheme } from '@mui/material/styles';

//style
import { palette } from './_palette.jsx';
import { components } from './_components.jsx';
import { breakpoints } from './_breakpoints.jsx';
import { typography } from './_typography.jsx';

let theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: palette.colorSchemes,
  components,
  breakpoints,
});

theme = createTheme(theme, {
  typography: typography(theme),
});

export default theme;