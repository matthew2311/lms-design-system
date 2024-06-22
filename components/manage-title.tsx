/* eslint-disable @typescript-eslint/no-unused-vars */
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IconButton, Stack, Switch, Typography } from '@mui/material';

export function ManageTitle({
  title,
  subTitle,
  help,
}: {
  title: string;
  subTitle?: string;
  help?: boolean;
}) {
  return (
    <Stack flexDirection="column" sx={{ display: 'flex', gap: '20px', width: '100%' }}>
      <Stack flexDirection="row" alignItems="center" columnGap={2} sx={{ borderBottom: '1px solid rgba(0,0,0,10%)', padding: '0px 20px 20px 20px' }}>
        <Typography variant="h1"
          sx={{
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            fontSize: 36,
            // marginBottom: 2,
            fontWeight: 600
          }}>
          {title}
        </Typography>
        {help && (
          <IconButton
            sx={{ background: 'white', width: '20px', height: '20px', border: '1px solid $333' }}
          >
            <QuestionMarkIcon sx={{ fontSize: '14px' }} />
          </IconButton>
        )}
      </Stack>
      {
        subTitle && (
          <Typography variant="h4" sx={{ display: subTitle ? 'flex' : 'none', fontSize: 16, padding: '0px 20px', lineHeight: 1.5 }}>
            {subTitle}
          </Typography>
        )
      }
    </Stack>
  );
}

export function ManageTitle2({
  title,
  subTitle,
  help,
}: {
  title: string;
  subTitle?: string;
  help?: boolean;
}) {
  return (
    <Stack flexDirection="column" sx={{ display: 'flex', gap: '20px', width: '100%' }} width={"100%"} padding={"20px"} height={'100%'}>
      <Typography variant="h1"
        sx={{
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          fontSize: 28,
          fontWeight: 600
        }}
      >
        {title}
      </Typography>
      {
        subTitle && (
          <Typography variant="h4" sx={{ display: subTitle ? 'flex' : 'none', fontSize: 16, lineHeight: 1.5 }}>
            {subTitle}
          </Typography>
        )
      }
    </Stack>
  );
}

export function ManageTitleHalf({
  title,
  toggle = false,
  setToggle,
}: {
  title: string;
  toggle?: boolean;
  setToggle?: () => void;
}) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,10%)',
        padding: '20px',
      }}
    >
      <Typography variant="h5"
        sx={{
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          fontSize: 36,
          // marginBottom: 2,
          fontWeight: 600
        }}
      >
        {title}
      </Typography>
      <Switch checked={toggle} onChange={setToggle} />
    </Stack>
  );
}
