import { SxProps, Theme } from '@mui/material';

// HEADER 

const header: SxProps<Theme> = {
    position: 'sticky',
    top: '0',
    width: '100%',
    justifyContent: 'space-between',
    padding: '16px',
    color: 'black',
    alignItems: 'center',
    fontFamily: '"Open Sans",sans-serif !important',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid rgba(0,0,0,30%)',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 20%'
}

const headerContainer: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: { xs: '100%', xl: '1750px' },
}

const headerTypography: SxProps<Theme> = {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#333333',
    cursor: 'pointer',
};

const headerIconContainer: SxProps<Theme> = {
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    objectFit: 'cover',
}

const headerDialogTitle: SxProps<Theme> = {
    fontWeight: 'bold',
    textAlign: 'center',
}

const headerDialogContent: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'center'
}

// MAIN 

const main: SxProps<Theme> = {
    paddingTop: '120px',
    paddingBottom: '60px'
}

// FOOTER

const footer: SxProps<Theme> = {
    position: 'relative',
    bottom: '0',
    width: '100%',
    justifyContent: 'space-between',
    background: '#fff',
    padding: '16px',
    color: 'black',
    alignItems: 'center',
    fontFamily: '"Open Sans",sans-serif !important',
    borderTop: '1px solid rgba(0,0,0,30%)',
}

const footerContainer: SxProps<Theme> = {
    width: { xs: '100%', xl: '1750px' },
    color: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: '"Open Sans",sans-serif !important',

    '@media (max-width: 600px)': {
        flexDirection: 'column'
    }
}


export const layoutPublicStyle = {
    header,
    headerContainer,
    headerTypography,
    headerIconContainer,
    headerDialogTitle,
    headerDialogContent,
    main,
    footer,
    footerContainer
}
