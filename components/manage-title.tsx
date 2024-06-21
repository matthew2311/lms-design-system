/* eslint-disable @typescript-eslint/no-unused-vars */
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { IconButton, Stack, Switch, Typography } from '@mui/material';
import { layoutPrivateStyle } from 'styles/layout/private-routes';

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
    <Stack flexDirection="column" sx={layoutPrivateStyle.manageTitleContainer}>
      <Stack flexDirection="row" alignItems="center" columnGap={2} sx={{ borderBottom: '1px solid rgba(0,0,0,10%)', padding: '0px 20px 20px 20px' }}>
        <Typography variant="h1" sx={layoutPrivateStyle.manageTitle}>
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
    <Stack sx={layoutPrivateStyle.manageTitleContainerHalf}>
      <Typography variant="h5" sx={layoutPrivateStyle.manageTitle}>
        {title}
      </Typography>
      <Switch checked={toggle} onChange={setToggle} />
    </Stack>
  );
}
