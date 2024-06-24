/* eslint-disable @typescript-eslint/no-unused-vars */
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  ClickAwayListener,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import { UseFormReturn } from 'react-hook-form';

export type SelectSearchProps = {
  label?: string;
  name: string;
  data?: Array<any>;
  form?: UseFormReturn<any>;
  onChange?: (selected?: any) => void;
  onSearch?: (search: any) => void;
  onSearchValue?: string;
  disable?: string;
  disabled?: boolean;
  defaultValue?: string;
  placeholder?: string;
};

export const SelectSearch = React.forwardRef(
  (
    {
      label,
      data,
      form,
      name,
      onChange,
      onSearch,
      onSearchValue,
      disabled,
      placeholder = 'All',
    }: SelectSearchProps,
    ref,
  ) => {
    const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
    const [search, setSearch] = useState('');
    const [showModalSearch, setShowModalSearch] = useState(false);

    const onClear = () => {
      form?.setValue(`${name}`, null);
      onChange?.();
      setSearch('');
      onSearch?.('');
      if (name === 'copyFromPresetId') {
        setSelected(null);
      }
    };

    const doSearch = (value: string) => {
      if (onSearch) return onSearch(value);

      // Client side search
      return setSearch(value);
    };

    useEffect(() => {
      const value = form?.watch(`${name}`);
      if (name !== 'copyFromPresetId') {
        setSelected(data?.find((d) => d.value === value) || null);
      }
    }, [form?.watch(`${name}`)]);

    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          gap: '15px',
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <Typography variant="label">{label}</Typography>
          <ClickAwayListener onClickAway={() => setShowModalSearch(false)}>
            <Stack>
              <OutlinedInput
                inputRef={inputRef}
                placeholder={selected?.label || placeholder}
                onChange={(e) => doSearch(e.target.value)}
                disabled={disabled}
                value={onSearchValue || search}
                onClick={() => {
                  if (!disabled) {
                    setShowModalSearch(!showModalSearch);
                    inputRef.current?.focus();
                  }
                }}
                sx={{
                  width: '100%',
                  borderRadius: '6px',
                  '& fieldset': {
                    width: '100%',
                    border: '1px solid #CCCCCC',
                    fontSize: '16px',
                  },
                  input: {
                    border: 'none',
                    '&::placeholder': {
                      opacity: 1,
                    },
                  },
                  padding: '1.25px 10px 1.25px 0px',
                  '&.Mui-focused fieldset': {
                    border: '2px solid rgb(38,132,255)',
                  },
                  cursor: 'pointer',
                  background: disabled ? '#D6D6D6' : 'white',
                  ' ::-webkit-input-placeholder': {
                    /* Chrome/Opera/Safari */ color: 'pink',
                  },
                }}
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{ display: 'flex', gap: '12px', height: '100%', cursor: 'pointer' }}
                  >
                    <ClearIcon
                      onClick={onClear}
                      sx={{
                        display: disabled
                          ? 'none'
                          : search || selected || onSearchValue
                            ? 'flex'
                            : 'none',
                        color: '#CCCCCC',
                        ':hover': {
                          color: '#999999',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        width: '1px',
                        background: disabled ? 'white' : '#CCCCCC',
                        height: '80%',
                        borderRadius: '4px',
                        display: name === 'copyFromPresetId' ? 'none' : undefined,
                      }}
                    />
                    <KeyboardArrowDownIcon
                      sx={{
                        color: disabled ? 'white' : showModalSearch ? '#666666' : '#CCCCCC',
                        ':hover': {
                          color: disabled ? 'white' : showModalSearch ? '#525252' : '#999999',
                        },
                        display: name === 'copyFromPresetId' ? 'none' : undefined,
                      }}
                    />
                    <SearchIcon
                      sx={{
                        color: disabled ? 'white' : showModalSearch ? '#666666' : '#CCCCCC',
                        ':hover': {
                          color: disabled ? 'white' : showModalSearch ? '#525252' : '#999999',
                        },
                        display: name === 'copyFromPresetId' ? undefined : 'none',
                      }}
                    />
                  </InputAdornment>
                }
              />
            </Stack>
          </ClickAwayListener>
        </Stack>
      </Stack>
    );
  },
);
