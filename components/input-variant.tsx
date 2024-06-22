/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Checkbox,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';

import { ErrorLabel } from './error-label';

type InputTextProps = { placeholder?: string; label?: string; name: string; errors?: FieldErrors, type?: string, onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void; };
export const InputText = React.forwardRef(
  ({ label, placeholder, errors, name, ...props }: InputTextProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: name?.includes('Name') ? '0px' : undefined
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: { xs: '100%', md: 'calc(50% - 20px)' },
          position: 'relative',
        }}
      >
        <Typography variant="label">{label}</Typography>
        <OutlinedInput
          ref={ref}
          name={name}
          error={!!errors?.[name]?.message}
          {...props}
          placeholder={placeholder}
        />
        <ErrorLabel errors={errors} name={name} />
      </Stack>
    </Stack >
  ),
);

export const InputTextFull = React.forwardRef(
  ({ label, placeholder, errors, name, ...props }: InputTextProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: '10px',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
        <OutlinedInput
          ref={ref}
          name={name}
          error={!!errors?.[name]?.message}
          {...props}
          placeholder={placeholder}
        />
        <ErrorLabel errors={errors} name={name} />
      </Stack>
    </Stack>
  ),
);


export function InputTextDouble({ title1, title2 }: { title1: string; title2: string }) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: '10px',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: { xs: '100%', md: 'calc(50% - 20px)' },
          position: 'relative',
        }}
      >
        <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{title1}</Typography>
        <OutlinedInput sx={{ width: '100%' }} />
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: { xs: '100%', md: 'calc(50% - 20px)' },
          position: 'relative',
        }}
      >
        <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{title2}</Typography>
        <OutlinedInput sx={{ width: '100%' }} />
      </Stack>
    </Stack >
  );
}

type InputTextAreaProps = {
  placeholder?: string;
  label?: string;
  name: string;
  errors?: FieldErrors;
  rows?: string;
};
export const InputTextArea = React.forwardRef(
  ({ placeholder, label, name, errors, rows, ...props }: InputTextAreaProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: '10px',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
        <OutlinedInput
          placeholder={placeholder}
          ref={ref}
          name={name}
          error={!!errors?.[name]?.message}
          multiline
          rows={rows || 1}
          onKeyDown={(e) => {
            const target = e.target as HTMLTextAreaElement; // Menetapkan tipe HTMLTextAreaElement untuk e.target

            const { value } = target;

            if (e.key === 'Tab') {
              e.preventDefault();

              const cursorPosition = target.selectionStart;
              const cursorEndPosition = target.selectionEnd;
              const tab = '\t';

              target.value =
                value.substring(0, cursorPosition) +
                tab +
                value.substring(cursorEndPosition);

              target.selectionStart = cursorPosition + 1;
              target.selectionEnd = cursorPosition + 1;
            }
          }}
          {...props}
        />
        {errors && (
          <ErrorLabel errors={errors} name={name} />
        )}
      </Stack>
    </Stack >
  ),
);

type InputSwitchProps = { defaultValue?: boolean; label?: string; redaksional?: string };
export const InputSwitch = React.forwardRef(
  ({ defaultValue = false, label, redaksional, ...props }: InputSwitchProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: { xs: '100%', md: 'calc(50% - 20px)' },
        position: 'relative',
      }}
    >
      <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
      <Typography
        sx={{
          fontSize: '14px', color: '#333', mb: 1,
          display: redaksional ? undefined : 'none',
        }}
      >
        {redaksional}
      </Typography>
      <Switch inputRef={ref} {...props} defaultChecked={defaultValue} sx={{ marginLeft: '-8px' }} />
    </Stack>
  ),
);

export const InputSwitchFull = React.forwardRef(
  ({ defaultValue = false, label, redaksional, ...props }: InputSwitchProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        width: '100%'
      }}
    >
      <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
      <Typography
        sx={{
          fontSize: '14px', color: '#333', mb: 1,
          display: redaksional ? undefined : 'none',
          width: '100%',
        }}
      >
        {redaksional}
      </Typography>
      <Switch inputRef={ref} checked={defaultValue} {...props} sx={{ marginLeft: '-8px' }} />
    </Stack>
  ),
);

export const InputSwitchs = React.forwardRef(
  ({ defaultValue = false, label, ...props }: InputSwitchProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        width: 'auto'
      }}
    >
      <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
      <Switch inputRef={ref} {...props} defaultChecked={defaultValue} />
    </Stack>
  ),
);

export type SelectDataProps = {
  value?: string;
  label?: string;
}[];

type InputSelectProps = {
  defaultValue?: string;
  label: string;
  data: SelectDataProps;
  name: string;
  errors?: FieldErrors;
  placeholder?: string;
} & UseFormRegisterReturn;
export const InputSelect = React.forwardRef(
  ({ defaultValue, placeholder, label, data, name, errors, ...props }: InputSelectProps, ref) => (
    <FormControl fullWidth>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          paddingTop: '10px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: { xs: '100%', md: 'calc(50% - 20px)' },
            position: 'relative',
          }}
        >
          <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
          <Select name={name} displayEmpty defaultValue={defaultValue} {...props}>
            <MenuItem disabled value="">
              {placeholder}
            </MenuItem>
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <ErrorLabel errors={errors} name={name} />
        </Stack>
      </Stack>
    </FormControl>
  ),
);

export const InputSelectFull = React.forwardRef(
  (
    { defaultValue = '', label, placeholder, data, name, errors, ...props }: InputSelectProps,
    ref,
  ) => (
    <FormControl fullWidth>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          paddingTop: '10px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
          <Select
            name={name}
            error={!!errors?.[name]?.message}
            displayEmpty
            value={defaultValue}
            {...props}
          >
            <MenuItem disabled value="">
              {placeholder}
            </MenuItem>
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <ErrorLabel errors={errors} name={name} />
        </Stack>
      </Stack>
    </FormControl>
  ),
);

type InputCheckboxProps = { defaultValue?: boolean; placeholder?: string; label?: string };
export const InputCheckbox = React.forwardRef(
  ({ defaultValue = false, label, ...props }: InputCheckboxProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
      }}
    >
      <Checkbox {...props} defaultChecked={defaultValue} />
      <Typography sx={{ fontSize: '12px', color: '#333' }}>{label}</Typography>
    </Stack>
  ),
);

export const InputTextCheckbox = React.forwardRef(
  ({ defaultValue, placeholder, label, ...props }: InputCheckboxProps, ref) => (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingTop: '10px',
      }}
    >
      <Stack direction="column" sx={{ width: '100%' }}>
        <Typography sx={{ fontSize: '14px', color: '#333', mb: 1 }}>{label}</Typography>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row', display: 'flex' } }}>
          <OutlinedInput placeholder={placeholder} sx={{ width: '100%', }} />
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Checkbox {...props} defaultChecked={defaultValue} />
            <Typography sx={{ fontSize: '12px', color: '#333' }}>{label}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
);
