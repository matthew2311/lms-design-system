/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorMessage } from '@hookform/error-message';
import sanitizeSVG from '@mattkrick/sanitize-svg';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import useModal from 'hooks/use-modal';
import React, { useState } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { layoutPrivateStyle } from 'styles/layout/private-routes';
import { fileToBase64 } from 'utils/file-helper/file-to-base64';
import { getFileDetails } from 'utils/file-helper/get-file-details';

import { ErrorLabel } from './error-label';
import { TipTapEditor } from 'components/tiptap-text-editor/TipTapEditor';

type InputTextProps = { placeholder?: string; label?: string; name: string; errors?: FieldErrors, type?: string, onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void; };
export const InputText = React.forwardRef(
  ({ label, placeholder, errors, name, ...props }: InputTextProps, ref) => (
    <Stack sx={{ ...layoutPrivateStyle.defineFormInputForm, paddingTop: name?.includes('Name') ? '0px' : undefined }}>
      <Stack sx={layoutPrivateStyle.defineFormInputContainer}>
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

// export const InputImageFile = React.forwardRef<HTMLInputElement, InputTextProps>(
//   ({ label, placeholder, errors, name, type, onchange, ...props }, ref) => (
//     <Stack sx={{ ...layoutPrivateStyle.defineFormInputForm, paddingTop: name?.includes('Name') ? '0px' : undefined }}>
//       <Stack sx={layoutPrivateStyle.defineFormInputContainer}>
//         <Typography variant="label">{label}</Typography>
//         <OutlinedInput
//           ref={ref}
//           name={name}
//           error={!!errors?.[name]?.message}
//           type={type}
//           onChange={onchange}
//           {...props}
//           placeholder={placeholder}
//         />
//         <ErrorLabel errors={errors} name={name} />
//       </Stack>
//     </Stack>
//   )
// );


type InputTipTapProps = { placeholder?: string; label?: string; value?: string; name: string; errors?: FieldErrors, onChange?: (e) => void };
export const InputTipTap = React.forwardRef(
  ({ label, placeholder, value, errors, name, onChange, ...props }: InputTipTapProps, ref) => (
    <Stack sx={{ ...layoutPrivateStyle.defineFormInputForm, paddingTop: name?.includes('Name') ? '0px' : undefined }}>
      <Stack sx={layoutPrivateStyle.defineFormInputContainerFull}>
        <Typography variant="label">{label}</Typography>
        <TipTapEditor
          label={label}
          error={!!errors?.[name]?.message}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
        <ErrorLabel errors={errors} name={name} />
      </Stack>
    </Stack >
  ),
);

export const InputTextFull = React.forwardRef(
  ({ label, placeholder, errors, name, ...props }: InputTextProps, ref) => (
    <Stack sx={layoutPrivateStyle.defineFormInputForm}>
      <Stack sx={layoutPrivateStyle.defineFormInputContainerFull}>
        <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
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

type InputImageProps = {
  label: string;
  defaultValues?: string | null;
  disabled?: boolean;
  errors?: FieldErrors;
} & UseFormRegisterReturn;
export const InputImage = React.forwardRef(
  ({ label, defaultValues, errors, name, disabled, ...props }: InputImageProps, ref) => {
    const { showModal } = useModal();
    const [file, setFile] = useState<File>();
    const handleUpload = async (e) => {
      const file = e.target.files?.[0];

      // const { ext, base64 } = await getFileDetails(e);

      const maxSize = 5 * 1024 * 1024; // 5 MB in bytes

      if (!['jpg', 'png', 'svg'].includes(file.type.split('/')[1].toLowerCase())) {
        showModal({
          message: 'File not supported',
          options: { variant: 'failed' },
        });
        return;
      }

      if (file.type.toLowerCase() === 'svg') {
        const attachedSVG = e.target.files[0];
        const cleanImage = await sanitizeSVG(attachedSVG);
        if (!cleanImage) {
          showModal({
            message: 'File not supported',
            options: { variant: 'failed' },
          });
          return;
        }
      }

      if (file.size > maxSize) {
        showModal({
          message: 'File size exceeds the maximum allowed limit (5 MB)',
          options: { variant: 'failed' },
        });
        return;
      }

      props.onChange({
        target: {
          name,
          value: file
          // value: `${base64}`.split(',')?.[1],
          // extension: ext,
        },
      });
      setFile(file);
    };

    return (
      <Stack sx={layoutPrivateStyle.defineFormInputForm}>
        <Stack sx={layoutPrivateStyle.defineFormInputContainerFull}>
          <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
          <Box
            component="img"
            src={defaultValues && !file ? defaultValues : file ? URL.createObjectURL(file) : ''}
            sx={
              file || defaultValues
                ? layoutPrivateStyle.defineFormInputFileUploaded
                : { display: 'none' }
            }
          />
          <Stack sx={layoutPrivateStyle.defineFormInputImageContainer}>
            <Button
              variant="contained"
              component="label"
              disabled={disabled}
              color={defaultValues ? 'error' : file ? 'error' : 'primary'}
              sx={layoutPrivateStyle.defineFormButtonUpload}
            >
              {defaultValues !== null
                ? 'Change File'
                : file === undefined
                  ? 'Change File'
                  : 'Choose File'}
              <input
                name={name}
                type="file"
                hidden
                {...props}
                accept="image/jpg,image/png,image/svg+xml"
                onChange={handleUpload}
              />
            </Button>
            <Typography sx={layoutPrivateStyle.defineFormInputImageName}>
              {defaultValues && !file
                ? `${defaultValues
                  .split('?')[0]
                  .replace('https://storagelmsds.blob.core.windows.net', '')
                  .split('/')[2]
                }`
                : file
                  ? `${file.name}`
                  : 'No file choosen'}
            </Typography>
          </Stack>
          <ErrorLabel errors={errors} name={name} />
        </Stack>
      </Stack>
    );
  },
);

export function InputTextDouble({ title1, title2 }: { title1: string; title2: string }) {
  return (
    <Stack sx={layoutPrivateStyle.defineFormInputForm}>
      <Stack sx={layoutPrivateStyle.defineFormInputContainer}>
        <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{title1}</Typography>
        <OutlinedInput sx={layoutPrivateStyle.defineFormInput} />
      </Stack>
      <Stack sx={layoutPrivateStyle.defineFormInputContainer}>
        <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{title2}</Typography>
        <OutlinedInput sx={layoutPrivateStyle.defineFormInput} />
      </Stack>
    </Stack>
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
    <Stack sx={layoutPrivateStyle.defineFormInputForm}>
      <Stack sx={layoutPrivateStyle.defineFormInputContainerFull}>
        <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
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
    </Stack>
  ),
);

type InputSwitchProps = { defaultValue?: boolean; label?: string; redaksional?: string };
export const InputSwitch = React.forwardRef(
  ({ defaultValue = false, label, redaksional, ...props }: InputSwitchProps, ref) => (
    <Stack sx={{ ...layoutPrivateStyle.defineFormInputContainer }}>
      <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
      <Typography
        sx={{
          ...layoutPrivateStyle.defineFormInputLabel,
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
    <Stack sx={{ ...layoutPrivateStyle.defineFormInputContainer, width: '100%' }}>
      <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
      <Typography
        sx={{
          ...layoutPrivateStyle.defineFormInputLabel,
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
    <Stack sx={{ ...layoutPrivateStyle.defineFormInputContainer, width: 'auto' }}>
      <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
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
      <Stack sx={layoutPrivateStyle.defineFormInputForm}>
        <Stack sx={layoutPrivateStyle.defineFormInputContainer}>
          <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
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
      <Stack sx={layoutPrivateStyle.defineFormInputForm}>
        <Stack sx={layoutPrivateStyle.defineFormInputContainerFull}>
          <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
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
    <Stack sx={layoutPrivateStyle.defineFormInputContainerCheckbox}>
      <Checkbox {...props} defaultChecked={defaultValue} />
      <Typography sx={layoutPrivateStyle.defineFormInputLabelCheckbox}>{label}</Typography>
    </Stack>
  ),
);

export const InputTextCheckbox = React.forwardRef(
  ({ defaultValue, placeholder, label, ...props }: InputCheckboxProps, ref) => (
    <Stack sx={layoutPrivateStyle.defineFormInputForm}>
      <Stack direction="column" sx={{ width: '100%' }}>
        <Typography sx={layoutPrivateStyle.defineFormInputLabel}>{label}</Typography>
        <Stack sx={{ flexDirection: { xs: 'column', sm: 'row', display: 'flex' } }}>
          <OutlinedInput placeholder={placeholder} sx={layoutPrivateStyle.defineFormInput} />
          <Stack sx={layoutPrivateStyle.defineFormInputContainerTextCheckbox}>
            <Checkbox {...props} defaultChecked={defaultValue} />
            <Typography sx={layoutPrivateStyle.defineFormInputLabelCheckbox}>{label}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
);
