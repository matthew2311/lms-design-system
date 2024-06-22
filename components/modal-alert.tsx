import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import IcnAlert from '../icons/IcnAlert';
import { useEffect, useState } from 'react';

type VariantType = 'success' | 'failed' | 'info';

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
  variant?: VariantType;
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

  const handleClose = (_: any, reason: any) => {
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
    <Modal open={isOpen} onClose={handleClose} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} disableEnforceFocus>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '394px',
          background: 'white',
          borderRadius: '6px',
          outline: 0,
          width: modalStyle?.width || { xs: '95%', sm: '450px' },
          height: modalStyle?.height && modalStyle.height,
          padding: modalStyle?.padding || '24px',
        }}
      >
        <Box sx={{ width: '180px', height: '180px', objectFit: 'cover', mb: '8px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {content[variant].icon}
        </Box>
        <Stack
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Typography sx={{ color: '#333333', fontSize: '32px', textAlign: 'center' }}>
            {title || content[variant].title}
          </Typography>
          <Typography sx={{ color: '#333333', fontSize: '14px', textAlign: 'center' }}>{message}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={1}>
          {onCancel && (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: '10px 60px',
                textTransform: 'uppercase',
                mt: '30px',
                width: '100%',
              }}
              onClick={handleCancel}
            >
              {btnCancelText || 'Cancel'}
            </Button>
          )}

          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: 'uppercase',
              mt: '30px',
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
