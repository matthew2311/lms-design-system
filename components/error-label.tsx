import { ErrorMessage } from '@hookform/error-message';
import { Box, Typography } from '@mui/material';
import { FieldErrors } from 'react-hook-form';

type ErrorLabelProps = { errors?: FieldErrors; name: string };
export function ErrorLabel({ errors, name, ...props }: ErrorLabelProps) {
  return (
    <Box sx={{ mt: 0.5, paddingLeft: 2, minHeight: 24 }}>
      <ErrorMessage
        errors={errors || {}}
        name={name}
        render={({ message }) => (
          <Typography variant="error" {...props}>
            {message}
          </Typography>
        )}
      />
    </Box>
  );
}
