import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { IcnAlert } from 'assets/icon';
import { useEffect, useState } from 'react';
import { modalAlertStyle } from 'styles/common/modal-alert';

export function ModalAlert({
  variant = 'success',
  open,
  message,
  title,
  btnOkText,
  btnCancelText,
  onOk,
  onCancel,
  onClose,
  modalStyle,
  buttonStyle,
}: {
  variant?: string;
  open: boolean;
  message?: string | JSX.Element;
  title?: React.ReactNode;
  btnOkText?: string;
  btnCancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  modalStyle?: {
    width: string | undefined | { xs?: string; sm?: string; md?: string };
    height: string | undefined;
    padding: string | undefined;
  };
  buttonStyle?: {
    width: string | undefined | { xs?: string; sm?: string; md?: string };
    height: string | undefined;
    padding: string | undefined | { xs?: string; sm?: string; md?: string };
  };
}) {
  const [isOpen, setIsOpen] = useState(open);

  const content = {
    success: { title: 'Success', icon: <IcnAlert type={'success'} /> },
    failed: { title: 'Failed', icon: <IcnAlert type={'error'} /> },
    info: { title: 'Info', icon: <IcnAlert type={'info'} /> },
  };

  const handleClose = (_, reason) => {
    if (reason === 'backdropClick') return;
    onClose?.();
    setIsOpen(false);
  };

  const handleOk = () => {
    onOk?.();
    handleClose(null, 'okClick');
  };

  const handleCancel = () => {
    onCancel?.();
    handleClose(null, 'cancelClick');
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Modal open={isOpen} onClose={handleClose} sx={modalAlertStyle.modalAlert} disableEnforceFocus>
      <Stack
        sx={{
          ...modalAlertStyle.modalAlertContainer,
          width: modalStyle?.width || { xs: '95%', sm: '450px' },
          height: modalStyle?.height && modalStyle.height,
          padding: modalStyle?.padding || '24px',
        }}
      >
        <Box sx={modalAlertStyle.modalAlertLogo}>
          {content[variant].icon}
        </Box>
        <Stack sx={modalAlertStyle.modalAlertContent}>
          <Typography sx={{ ...modalAlertStyle.modalAlertTitle }}>
            {title || content[variant].title}
          </Typography>
          <Typography sx={modalAlertStyle.modalAlertDesc}>{message}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={1}>
          {onCancel && (
            <Button
              variant="contained"
              color="secondary"
              sx={modalAlertStyle.modalAlertButton}
              onClick={handleCancel}
            >
              {btnCancelText || 'Cancel'}
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{
              ...modalAlertStyle.modalAlertButton,
              width: buttonStyle?.width || '100%',
              height: buttonStyle?.height && buttonStyle.height,
              padding: buttonStyle?.padding || '10px 60px',
            }}
            onClick={handleOk}
          >
            {btnOkText || 'Ok'}
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}
