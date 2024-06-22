import { SxProps, Theme } from '@mui/material';

// CONTENT

const content: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '640px',
  backgroundImage: 'linear-gradient(180deg,#757575 9%,#bdbdbd)',
  padding: { xs: 'none', md: '0 5%' },
  width: '100%',
  gap: { xs: '0', md: '30px' },
  flexDirection: { xs: 'column', md: 'row' },
  height: { xs: 'fit-content', md: '75vh' },
  position: 'relative',
};

const contentResponsive: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(180deg,#757575 9%,#bdbdbd)',
  padding: { xs: 'none', md: '0 5%' },
  width: '100%',
  gap: { xs: '0', md: '30px' },
  flexDirection: { xs: 'column', md: 'row' },
  height: 'calc(100vh - 100px - 100px)',
  position: 'relative',
};

const contentImg: SxProps<Theme> = {
  position: 'absolute',
  width: { xs: '330px', sm: '600px' },
  height: { xs: '260px', sm: '478px' },
  marginTop: '100px',
};

const contentBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  maxWidth: '352px',
  width: { xs: '300px', sm: '335px', md: '352px' },
  boxSizing: 'border-box',
  position: 'absolute',
};

const contentIconButton: SxProps<Theme> = {
  background: 'white',
  width: '32px',
  height: '32px',
  '&:hover': {
    opacity: '80%',
    background: 'white',
  },
};

const contentInputBase: SxProps<Theme> = {
  border: '1px solid rgba(0,0,0,.1)',
  borderRadius: '6px',
  width: '100%',
  fontSize: '14px',
  padding: '3px 13px',
  fontWeight: '400',
};

const contentSubmitButton: SxProps<Theme> = {
  background: 'linear-gradient(0deg,#f18700,#f39f33)',
  width: '100%',
  color: 'white',
  fontWeight: '600',
};

export const registerStyle = {
  content,
  contentResponsive,
  contentImg,
  contentBox,
  contentIconButton,
  contentInputBase,
  contentSubmitButton,
};
