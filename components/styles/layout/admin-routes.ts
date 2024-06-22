import { SxProps, Theme } from '@mui/material';
import { SxStyle } from 'types/style';

// LAYOUT

const layoutAdminContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '50px',
};

const layoutAdmin: SxStyle = {
    width: '100%',
    minHeight: 'calc(100vh - 51px)',
    paddingTop: '120px',

    '@media(max-width:600px)': {
        minHeight: 'calc(100vh - 70px)',
        paddingTop: '100px',
    }
};

const adminRoutes: SxStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

// FOOTER

const footer: SxStyle = {
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

// MANAGE TITLE
const manageTitleContainer: SxStyle = {
    display: 'flex',
    borderBottom: '1px solid rgba(0,0,0,10%)',
    padding: '20px',
    gap: '20px',
};

const manageTitle: SxStyle = {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    // marginBottom: 2,
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

// MANAGE TABLE

const manageTable: SxStyle = { padding: '20px', mb: '50px' };

const moduleTable: SxStyle = { padding: '20px 20px 0px 20px' };

const manageTableContainer: SxStyle = { width: '100%', overflow: 'hidden', borderRadius: '6px' };

const manageTableCell: SxStyle = {
    height: '20px',
    padding: '10px',
};

const manageTableHead: SxStyle = {
    '& th': {
        backgroundColor: 'white',
        padding: { xs: '30px 16px 30px 16px', md: '21px 16px 21px 16px' },
    },
};

const moduleTableHead: SxStyle = {
    '& th': {
        backgroundColor: 'white',
        padding: '16px ',
    },
};

const manageTableCellContainer: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '20px',
    gap: 1,
};

const manageTableCellContainerCenter: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20px',
    gap: 1,
};

const manageTableCellTypography: SxStyle = { fontWeight: 'bold', fontSize: '12px' };

const manageTableCellIconContainer: SxStyle = {
    height: '22px',
    position: 'relative',
    cursor: 'pointer',
};

const manageTableCellIconTopActive: SxStyle = { fontSize: '16px', position: 'absolute', top: 0 };

const manageTableCellIconTop: SxStyle = {
    fontSize: '16px',
    color: '#c8ced3',
    position: 'absolute',
    top: 0,
};

const manageTableCellIconBottomActive: SxStyle = {
    fontSize: '16px',
    position: 'absolute',
    bottom: 0,
};

const manageTableCellIconBottom: SxStyle = {
    fontSize: '16px',
    color: '#c8ced3',
    position: 'absolute',
    bottom: 0,
};

const manageTableRow: SxStyle = { '&:last-child td, &:last-child th': { border: 0 } };

const manageTableActions: SxStyle = {
    color: '#028ED5',
    cursor: 'pointer',
    fontSize: '12px',
    '&:hover': { opacity: '70%' },
};

const manageTableNoData: SxStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
};

const manageTablePagination: SxStyle = {
    padding: '16px',
    width: '100%',
    gap: '17px',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { xs: 'start', md: 'center' },
    justifyContent: 'end',
    borderBottom: '1px solid #E0E0E0',
    borderTop: '1px solid #E0E0E0',
};

const manageTablePaginationContainer: SxStyle = {
    display: 'flex',
    flexDirection: { xs: 'columns', md: 'row' },
    gap: '9px',
    alignItems: { xs: 'start', md: 'center' },
    width: { xs: '100%', md: 'auto' },
};

const manageTablePaginationInput: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '9px',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: { xs: '100%', md: 'auto' },
};

const manageTablePaginate: SxStyle = {
    margin: 0,
    padding: 0,
    justifyContent: 'start',
    display: { xs: 'none', md: 'flex' },
    '.binus-PaginationItem-previousNext': { display: 'none' },
    '.binus-PaginationItem-page': {
        fontSize: '12px',
        padding: 0,
    },
    '.binus-Pagination-ul': {
        gap: 0,
        padding: 0,
        margin: 0,
    },
};

const manageTablePaginationText: SxStyle = { fontSize: '14px', color: '#333333' };

const manageTableButton: SxStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '46px',
    gap: '5px',
    borderRadius: '6px',
    m: '11px 16px 16px 16px',
};

const manageTableButtonContainer: SxStyle = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid white',
};

const manageTableButtonIcon: SxStyle = { fontSize: '18px' };

const manageTablePaginationMaterial: SxStyle = {
    '.binus-TablePagination-actions': { display: 'flex' },
    '.binus-TablePagination-select': {
        display: 'flex',
        width: '30px',
        alignItems: 'center',
    },
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

export const layoutAdminStyle = {
    layoutAdmin,
    layoutAdminContainer,
    adminRoutes,
    footer,
    footerContainer,
    manageTitleContainer,
    manageTitleContainerHalf,
    manageTitle,
    manageTable,
    moduleTable,
    manageTableHead,
    moduleTableHead,
    manageTableCellContainer,
    manageSearchTextField2,
    manageTableContainer,
    manageTableCell,
    manageTableCellTypography,
    manageTableCellIconContainer,
    manageTableCellIconTopActive,
    manageTableCellIconTop,
    manageTableCellIconBottomActive,
    manageTableCellIconBottom,
    manageTableRow,
    manageTableActions,
    manageTableNoData,
    manageTablePagination,
    manageTablePaginationContainer,
    manageTablePaginationInput,
    manageTablePaginate,
    manageTablePaginationText,
    manageTableButton,
    manageTableButtonContainer,
    manageTableButtonIcon,
    manageTablePaginationMaterial,
    manageTableCellContainerCenter,
}
