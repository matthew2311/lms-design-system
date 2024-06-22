import { SxStyle } from 'types/style';

const modalAlert: SxStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center' };
const modalAlertContainer: SxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: { xs: '95%', sm: '450px' },
  minHeight: '394px',
  background: 'white',
  borderRadius: '6px',
  padding: '24px',
  outline: 0,
};

const modalAlertLogo: SxStyle = { width: '180px', height: '180px', objectFit: 'cover', mb: '8px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' };

const modalAlertContent: SxStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
};

const modalAlertTitle: SxStyle = { color: '#333333', fontSize: '32px', textAlign: 'center' };

const modalAlertDesc: SxStyle = { color: '#333333', fontSize: '14px', textAlign: 'center' };

const modalAlertButton: SxStyle = {
  padding: '10px 60px',
  textTransform: 'uppercase',
  mt: '30px',
  width: '100%',
};

export const modalAlertStyle = {
  modalAlert,
  modalAlertContainer,
  modalAlertLogo,
  modalAlertContent,
  modalAlertTitle,
  modalAlertDesc,
  modalAlertButton,
};
