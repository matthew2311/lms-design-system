import { SxProps, Theme } from '@mui/material';
import { themes } from 'styles/mui/theme';
import { SxStyle } from 'types/style';

// PRIVATE ROUTE
const layoutPrivateContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '50px',
};

const layoutPrivate: SxStyle = {
    width: '100%',
    minHeight: 'calc(100vh - 51px)',
    paddingTop: '120px',

    '@media(max-width:600px)': {
        minHeight: 'calc(100vh - 70px)',
        paddingTop: '100px',
    }
};

const privateRoutes: SxStyle = {
    display: 'block',
    height: '100vh',
    backgroundImage: 'linear-gradient(180deg, #CEE5FD, #FFF);',
    backgroundSize: '100% 20%',
    backgroundRepeat: 'no-repeat',
    overflowY: 'auto',
};

const privateRoutesSideMenu: SxStyle = { width: { xs: '100%', xl: '1750px' } };

const privateRoutesCandyBox: SxStyle = {
    width: { xs: '100%', xl: '1750px' },
    height: '100vh',
    position: 'relative',
};
// OVERLAY

const overlay: SxProps<Theme> = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 13,
};

const overlaySideMenu: SxProps<Theme> = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 10,
};

// HEADER 

const header: SxStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    background: '#fff',
    width: '100%',
    height: '55px',
    padding: '0 16px',
    borderBottom: '1px solid #c8ced3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
}

const headerDivider: SxProps<Theme> = {
    background: '#999999',
    width: '1px',
    height: '24px',
};

const headerContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: { xs: '100%', xl: '1750px' },
};

const headerIcon: SxProps<Theme> = {
    alignItems: 'center',
    display: 'flex',
    height: '20px',
    width: '20px'
};

const headerImg: SxProps<Theme> = {

};

const headerTypography: SxProps<Theme> = {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#333333',
    cursor: 'pointer',
};

const headerAvatar: SxProps<Theme> = {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    objectFit: 'cover',
};

// SIDE MENU

const sideMenuLinkCollapse: SxProps<Theme> = {
    display: 'flex',
    height: '37px',
    justifyContent: 'space-between',

    '&:hover': {
        background: 'hsl(215, 15%, 97%)',
        borderRadius: '12px'
    },
};

const sideMenuLinkActive: SxStyle = {
    background: 'hsl(210, 100%, 96%)',
    borderRadius: '12px',
    color: 'hsl(210, 100%, 42%)',

    '&:hover': {
        background: 'hsla(210, 100%, 90%, 0.8)'
    }
}

const sideMenuLink: SxStyle = {
    display: 'flex',
    height: '37px',
    justifyContent: 'space-between',
    '&:hover': {
        background: 'hsl(215, 15%, 97%)',
        borderRadius: '12px'
    },
};

const sideMenuBoxCollapseText: SxStyle = {
    pl: 2,
};

const sideMenuBoxCollapseActive: SxStyle = {
    background: 'hsl(210, 100%, 96%)',
    borderRadius: '12px',
    color: 'hsl(210, 100%, 42%)',

    '&:hover': {
        background: 'hsla(210, 100%, 90%, 0.8)'
    }
}

const sideMenuBoxCollapse: SxStyle = {
    pl: 2,

    '&:hover': {
        borderRadius: '12px'
    }
};

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

// DEFINE FORM

const defineFormSection: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
};

const defineIconButton: SxStyle = {
    width: '40px',
    height: '40px',
    background: '#fff',
    boxShadow: '0 0 3px 0 rgb(0 0 0 / 20%)',
    margin: '5px 0px 5px 20px ',
    '&:hover': { background: '#fff', opacity: '60%' },
};

const defineDisableTypography: SxStyle = {
    fontSize: 14,
    textAlign: 'center',
    padding: '15px 20px 15px 20px',
};

const defineIconButtonIcon: SxStyle = { fontSize: '32px' };

const defineFormInputForm: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingTop: '10px',
};

const defineFormInputContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: { xs: '100%', md: 'calc(50% - 20px)' },
    position: 'relative',
};

const defineFormInputContainerCheckbox: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
};

const defineFormInputContainerTextCheckbox: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
};

const defineFormInputContainerFull: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
};

const defineFormInputLabel: SxStyle = { fontSize: '14px', color: '#333', mb: 1 };
const defineFormInputLabelCheckbox: SxStyle = { fontSize: '12px', color: '#333' };
const defineFormInputFileUploaded: SxStyle = {
    height: '66px',
    width: '66px',
    objectFit: 'cover',
    mb: 1,
};

const defineFormInputImageContainer: SxStyle = {
    display: 'flex',
    gap: '15px',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'start', sm: 'center' },
};

const defineFormInputImageName: SxStyle = {
    width: { xs: '100%', sm: `calc(100% - 180px)` },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
};

const defineFormInput: SxStyle = {
    width: '100%',
};

const defineFormInputError: SxStyle = {
    width: '100%',
    height: '35px',
    background: '#FFDBD9',
    borderRadius: '6px',
    border: '1px solid #BE3528',
};

const defineFormInputFull: SxStyle = {
    width: '100%',
    height: 'auto',
    background: 'white',
    borderRadius: '6px',
    '& fieldset': {
        border: '1px solid rgba(0,0,0,.2)',
        fontSize: '14px',
    },
    '&.Mui-focused fieldset': {
        borderColor: 'rgba(0,0,0,.4)',
    },
};

const defineFormInputSelect: SxStyle = {
    width: { xs: '100%', md: '50%' },
    height: 'fit-content',
    borderRadius: '15px',
    background: 'white',
    border: '1px solid rgba(0,0,0,30%)',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:hover': {
        border: '1px solid rgba(0,0,0,100%)',
    },
    '& fieldset': { border: 'none' },
    '& .MuiOutlinedInput-input': {
        display: 'flex',
        alignItems: 'center',
    },
};

const defineFormSubmitContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    gap: '10px',
    width: '100%',
    padding: '10px 20px 10px 20px',
    borderTop: '1px solid rgba(0,0,0,10%)',
    marginTop: '20px',
};

const defineFormButtonUpload: SxStyle = {
    width: '130px',
    borderRadius: '6px',
    fontSize: { xs: '12px', md: '14px' },
    paddingY: '10px 20px',
    color: 'white',
    height: '40px',
};

// MANAGE TITLE
const manageTitleContainer: SxStyle = {
    display: 'flex',
    gap: '20px',
    width: '100%'
};

const manageTitle: SxStyle = {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 36,
    // marginBottom: 2,
    fontWeight: 600
};

const manageTitle2: SxStyle = {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 28,
    // marginBottom: 2,
    fontWeight: 600
};

const manageTitleContainerHalf: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,10%)',
    padding: '20px',
};

// MANAGE SEARCH

const manageSearch: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '20px',
    borderBottom: '1px solid rgba(0,0,0,10%)',
};

const manageSearchContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '65px',
    width: '100%',
};

const manageSearchTitle: SxStyle = {
    fontSize: '12px',
};

const manageSearchTextField: SxStyle = {
    background: 'white',
    width: '100%',
    borderRadius: '6px',
    '& fieldset': { border: '1px solid #D6D6D6', fontSize: '16px' },
    input: { border: 'none' },
    '&.Mui-focused fieldset': {
        border: `2px solid ${themes.palette.primary.main}`,
    },
    // padding: '0px 10px 0px 10px',
};

const manageSearchTextField2: SxStyle = {
    background: 'white',
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
};

const manageSearchTextField3: SxStyle = {
    background: 'transparent',
    width: '100%',
    borderRadius: '6px',
    '& fieldset': {
        width: '100%',
        fontSize: '16px',
    },
    input: {
        border: 'none',
        '&::placeholder': {
            opacity: 1,
        },
        background: 'transparent',
    },
    padding: '1.25px 0px 1.25px 0px',
};

const manageSearchButton: SxStyle = {
    width: '80px',
    borderRadius: '6px',
    fontSize: '14px',
    paddingY: '10px 20px',
    color: 'white',
    height: '40px',
};

const manageSearchButtonText: SxStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: { xs: '12px', sm: '14px' },
    lineHeight: 1.6,
    fontWeight: 600,
};

const manageSearchButtonAddText: SxStyle = {
    fontSize: { xs: '12px', sm: '14px' },
    lineHeight: 1.6,
    fontWeight: 600,
};

const modalChangeStack2: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    height: 'auto',
    borderBottom: '1px solid #c8ced3',
};

const modalChangeStack2Box: SxStyle = {
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
};

const modalChangeBorderActive: SxStyle = {
    height: '4px',
    width: '100%',
    background: '#F18700',
    position: 'absolute',
    bottom: '-2px',
};

export const layoutPrivateStyle = {
    layoutPrivate,
    modalChangeStack2,
    modalChangeStack2Box,
    modalChangeBorderActive,
    layoutPrivateContainer,
    privateRoutes,
    privateRoutesSideMenu,
    privateRoutesCandyBox,
    sideMenuLinkCollapse,
    sideMenuLinkActive,
    sideMenuLink,
    sideMenuBoxCollapse,
    sideMenuBoxCollapseActive,
    sideMenuBoxCollapseText,
    overlay,
    overlaySideMenu,
    header,
    headerDivider,
    headerContainer,
    headerIcon,
    headerImg,
    headerTypography,
    headerAvatar,
    footer,
    footerContainer,
    manageTitleContainer,
    manageTitleContainerHalf,
    manageTitle,
    manageTitle2,
    manageSearch,
    manageSearchTitle,
    manageSearchContainer,
    manageSearchTextField,
    manageSearchTextField2,
    manageSearchTextField3,
    manageSearchButton,
    manageSearchButtonText,
    manageSearchButtonAddText,
    defineFormSection,
    defineIconButton,
    defineDisableTypography,
    defineIconButtonIcon,
    defineFormInputForm,
    defineFormInputContainer,
    defineFormInputContainerTextCheckbox,
    defineFormInputContainerCheckbox,
    defineFormInputContainerFull,
    defineFormInputLabel,
    defineFormInputLabelCheckbox,
    defineFormInputFileUploaded,
    defineFormInput,
    defineFormInputError,
    defineFormInputFull,
    defineFormInputSelect,
    defineFormSubmitContainer,
    defineFormButtonUpload,
    defineFormInputImageContainer,
    defineFormInputImageName,
}
