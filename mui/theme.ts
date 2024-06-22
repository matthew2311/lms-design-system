import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error: React.CSSProperties;
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
    label: true;
  }
}

export const themes = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          '&.Mui-disabled': {
            color: 'transparent',
            background: 'rgba(0, 0, 0, 0.26)',
            borderRadius: '2px',
            border: 'none',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: ({ theme }) => ({
          borderRadius: 50,
          backgroundColor: '#9A9A9A',
          '.Mui-checked.Mui-checked + &': {
            opacity: 0.7,
            backgroundColor: theme.palette.primary.main,
          },
        }),
        thumb: {
          color: '#fff',
          boxShadow: 'none',
          width: 14,
          height: 14,
          margin: 3,
        },
        root: {
          marginTop: 1,
          padding: 9,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: ({ ownerState }) => ({
          display: 'flex',
          alignItems: 'center',
          padding: '10px 16px 10px 16px !important',
          fontSize: '14px',
          borderRadius: 6,
          background: 'white',
          '&.Mui-disabled': {
            background: '#D6D6D6',
            borderColor: '#D6D6D6',
          },
          border: '1px solid #CCCCCC',
          ...(ownerState.error && {
            border: '1px solid #D12119',
            background: '#FFDBD9',
          }),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: 'transparent' },
        root: {
          borderRadius: 6,
          padding: 0,
          borderColor: 'transparent',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#000',
          cursor: 'pointer',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '6px',
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: () => ({
          height: 44,
          padding: '0 16px 0 16px',
        }),
        sizeMedium: () => ({
          height: 40,
          padding: '0 16px 0 16px',
        }),
        sizeSmall: () => ({
          height: 24,
          padding: '0 8px 0 8px',
        }),
      },
    },
  },
  palette: {
    background: {
      default: '#ffffff ',
    },
    primary: {
      main: '#F18700',
      '100': '#F39F33',
      contrastText: '#fff',
    },
    secondary: {
      main: '#999999',
      '400': '#9A9A9A',
      '100': '#B3B3B3',
      contrastText: '#fff',
    },
    error: {
      main: '#9F041B',
      '100': '#F5515F',
      contrastText: '#fff',
    },
    warning: {
      main: '#028ED5',
      '100': '#026CA2',
      contrastText: '#fff',
    },
    info: {
      main: '#fff',
      '100': '#BBBBBB',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    label: {
      color: '#333333',
      fontSize: 12,
      marginBottom: '8px !important',
    },
    error: {
      color: '#D12119',
      fontSize: 12,
    },
  },
});
