import { SxProps, Theme } from '@mui/material';
import { SxStyle } from 'types/style';

// CONTENT

const contentStack: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '500px',
  backgroundImage: 'linear-gradient(180deg,#028ed5,#014365)',
  padding: { xs: 'none', md: '0 5%' },
  width: '100%',
  gap: { xs: '0', md: '30px' },
  flexDirection: { xs: 'column', md: 'row' },
  height: { xs: 'fit-content', md: '75vh' },
};

const contentStackResponsive: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(180deg,#028ed5,#014365)',
  padding: { xs: 'none', md: '0 5%' },
  width: '100%',
  gap: { xs: '0', md: '30px' },
  flexDirection: { xs: 'column', md: 'row' },
  height: 'calc(100vh - 100px - 100px)',
};

const contentStackBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  width: { xs: '40%', md: 'auto' },
  boxSizing: 'border-box',
};

const contentStackBoxTypography1: SxProps<Theme> = {
  fontFamily: 'Open Sans Semibold,sans-serif',
  fontWeight: 400,
  lineHeight: 1.3,
  fontSize: '32px',
  textAlign: { xs: 'center', md: 'left' },
  position: 'relative',
  top: 0,
  left: { xs: '50%', md: '0' },
  transform: { xs: 'translateX(-50%)', md: 'none' },
  width: { xs: '265px', sm: 'auto' },
  marginTop: { xs: '20px', md: '0px' },
  marginBottom: '16px',
};

const contentStackBoxTypography2: SxProps<Theme> = {
  textAlign: { xs: 'center', md: 'left' },
  position: 'relative',
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '16px',
  lineHeight: 1.5,
  top: 0,
  left: { xs: '50%', md: '0' },
  transform: { xs: 'translateX(-50%)', md: 'none' },
  width: { xs: '300px', sm: '100%' },
  height: 44,
  marginBottom: '10px',
};

const contentButtonMicrosoft: SxProps<Theme> = {
  fontFamily: 'Segoe UI',
  fontWeight: 600,
  fontSize: 15,
  backgroundImage: 'url("/assets/image/btn-logo-sign-in-with-microsoft.png")', // Replace with the actual image URL
};

const contentStackBoxDivider: SxProps<Theme> = {
  minHeight: '35px',
  marginBottom: '1rem',
  border: 'none',
};

const contentStackBoxLoginButton: SxProps<Theme> = {
  height: '41px',
  textTransform: 'none',
  borderRadius: '6px',
  display: 'flex',
  gap: '12px',
  color: '#5E5E5E',
  width: '248px',
  position: 'relative',
  top: 0,
  left: { xs: '50%', md: '0' },
  transform: { xs: 'translateX(-50%)', md: 'none' },
};

const contentStackBoxRegisterButton: SxProps<Theme> = {
  height: '45px',
  padding: '1px 6px',
  borderRadius: '6px',
  border: '3px solid #028ed5',
  color: '#fff',
  background: 'transparent',
  width: '248px',
  position: 'relative',
  top: 0,
  left: { xs: '50%', md: '0' },
  transform: { xs: 'translateX(-50%)', md: 'none' },
  ':hover': {
    backgroundColor: '#a6cbcc',
    color: '#4f4f4f',
  },
};

const contentStackBoxImg: SxProps<Theme> = {
  width: { xs: '315px', sm: '50%', lg: 'auto' },
  height: { xs: 'auto', lg: '95%' },
  marginTop: '20px',
  maxHeight: '600px',
  maxWidth: '600px',
};

const contentLogoutImg: SxProps<Theme> = {
  width: { xs: '260px', sm: '365px' },
  height: { xs: '200px', sm: '298px' },
  marginBottom: '64px',
};

// MODAL LOGIN

const modalLogin: SxStyle = {
  position: 'absolute',
  width: '320px',
  height: '407px',
  background: 'white',
  borderRadius: '6px',
};

const modalLoginStack1: SxStyle = {
  p: '16px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #c8ced3',
};

const modalLoginStack2: SxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const modalLoginStack3: SxStyle = {
  p: '0px 16px 16px 16px ',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

const modalLoginButton: SxStyle = {
  width: '100%',
  borderRadius: '6px',
  fontSize: '14px',
  paddingY: '10px',
};

const modalLoginButtonText: SxStyle = {
  fontSize: { xs: '12px', sm: '14px' },
  lineHeight: 1.6,
  fontWeight: 600,
};

const modalLoginInput: SxStyle = {
  background: 'white',
  width: '100%',
  height: '38px',
  borderRadius: '6px',
  fontSize: '14px',
  outline: 'none',
  '& fieldset': { border: '1px solid rgba(0,0,0,10%)' },
  '& input': { border: 'none' },
  '&.Mui-focused fieldset': {
    borderColor: 'rgba(0,0,0,40%)',
  },
};

export const loginStyle = {
  contentStack,
  contentStackResponsive,
  contentStackBox,
  contentStackBoxTypography1,
  contentStackBoxTypography2,
  contentStackBoxDivider,
  contentStackBoxLoginButton,
  contentStackBoxRegisterButton,
  contentStackBoxImg,
  modalLogin,
  modalLoginStack1,
  modalLoginStack2,
  modalLoginStack3,
  modalLoginButton,
  modalLoginButtonText,
  modalLoginInput,
  contentLogoutImg,
  contentButtonMicrosoft,
};
