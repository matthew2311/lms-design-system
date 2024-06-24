import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, IconButton, LinearProgress, List, ListItem, ListItemButton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Face from '@mui/icons-material/Face';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { SelectSearch } from "components/SelectSearch";
import { IcnNotes, IcnWebClassCode } from "assets/icon";
import NotificationsIcon from '@mui/icons-material/Notifications';

export function MyCoursesPage() {
    const menuList = [
        {
            name: 'Dashboard',
            icon: <DashboardIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Courses',
            icon: <SchoolIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Forum',
            icon: <ForumIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Assessment',
            icon: <AssignmentIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Attendance',
            icon: <PendingActionsIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Schedule',
            icon: <CalendarMonthIcon sx={{ fontSize: '18px' }} />,
        },
        {
            name: 'Announcement',
            icon: <AssignmentIcon sx={{ fontSize: '18px' }} />,
        }
    ]

    return (
        <Box
            component={"main"}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: 'auto',
                overflow: 'clip',
            }}
        >
            <Stack component="header"
                sx={{
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
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    sx={{ gap: { xs: '10px', sm: '16px' } }}
                >
                    <Typography
                        sx={{
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            color: '#333333',
                            cursor: 'pointer',
                        }}
                    >
                        XYZ
                    </Typography>
                    <Box sx={{ background: '#999999', width: '1px', height: '24px' }} />
                    <Typography
                        sx={{
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            color: '#333333',
                            cursor: 'pointer',
                        }}
                    >
                        Learning Management System
                    </Typography>
                </Box>

                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                    <IconButton
                        className="notification"
                        sx={{
                            width: '32px',
                            height: '32px',
                            background: 'transparent',
                            ':hover': {
                                background: '#E6E6E6',
                            },
                        }}
                        aria-label="notifications"
                    >
                        <NotificationsIcon sx={{ color: '#999999' }} />
                    </IconButton>

                    <IconButton aria-label="User Account">
                        <AccountCircleIcon
                            sx={{
                                cursor: 'pointer',
                                width: '32px',
                                height: '32px',
                                objectFit: 'cover',
                                color: '#999999'
                            }}
                            aria-label="User Account"
                        />
                    </IconButton >
                </Stack>
            </Stack>

            <Stack direction="row" sx={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                overflow: 'clip',
            }}>
                <Box
                    sx={{
                        width: '250px',
                        height: 'calc(100vh - 55px)',
                        background: '#007DB8',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                    }}
                >
                    <Box sx={{
                        minHeight: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '10px',
                        margin: '10px',
                        backgroundColor: '#014769',
                        borderRadius: '10px',
                    }}>
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Stack direction="row" alignItems="center" gap="5px" sx={{ color: 'white' }}>
                                <Face sx={{ fontSize: '22px' }} />
                                <Typography sx={{ fontSize: '14px' }}>Role</Typography>
                            </Stack>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    height: '20px',
                                    width: '59px',
                                    display: 'flex',
                                }}
                            >
                                <Typography sx={{ fontSize: '10px' }}>Change</Typography>
                            </Button>
                        </Box>

                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px',
                            color: '#fff',
                        }}>
                            <Typography component="span" sx={{
                                fontSize: '16px',
                                fontWeight: 600,
                            }}>
                                Student
                            </Typography>
                            <Typography component="span" sx={{
                                fontSize: '12px',
                                opacity: 0.8,
                            }}>
                                Undergraduate
                            </Typography>
                            <Typography component="span" sx={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                            }}>
                                XYZ University
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ height: '1px', background: '#008DC7', width: '100%', marginBottom: '16px' }} />
                    <List sx={{ width: '100%', padding: '0' }}>
                        {
                            menuList.map((list) => (
                                <ListItem
                                    key={list.name}
                                    sx={{
                                        color: 'white',
                                        padding: '0',
                                        backgroundColor: list.name === 'Courses' ? '#015581' : undefined,
                                        borderTopLeftRadius: list.name === 'Courses' ? '20px' : undefined,
                                        borderBottomLeftRadius: list.name === 'Courses' ? '20px' : undefined
                                    }}
                                >
                                    <ListItemButton
                                        key={list.name}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'rgb(255 255 255 / 10%);'
                                            }
                                        }}
                                    >
                                        <Stack direction="row" gap="4px" alignItems="center">
                                            {list.icon}
                                            <Typography sx={{ fontSize: '13px', marginLeft: '0.25em' }}>{list.name}</Typography>
                                        </Stack>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        width: '100%',
                        height: 'calc(100vh - 55px)',
                        // overflowY: 'auto',
                    }}
                >
                    <Box
                        component="section"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: 'auto',
                            marginBottom: '10px',
                        }}
                        id="content"
                    >
                        <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)', width: '100%' }}>
                            <Typography sx={{ fontSize: '24px', padding: '10px 20px', width: '100%' }}>My Courses</Typography>
                            <Box aria-label="Filter Period" sx={{ padding: '0px 20px 20px 20px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }} pb={2} pt={0}>
                                <SelectSearch
                                    label="Running Period"
                                    name="Running Period"
                                    data={[]}
                                />
                            </Box>
                            <Stack
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    height: 'auto',
                                    borderBottom: '1px solid #c8ced3',
                                }}
                            >
                                <Stack flexDirection="row" flexWrap="wrap" className="role_change-roles-category" ml={'20px'}>
                                    <Box
                                        sx={{
                                            padding: '15px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: '#FFFFFF'
                                        }}
                                        component={'button'}
                                        aria-label="Laboratory Classes"
                                    >
                                        <Typography
                                            sx={{ color: '#9e5f0f', fontSize: '18px' }}
                                        >
                                            Laboratory Classes
                                        </Typography>
                                        <Box
                                            sx={{
                                                height: '4px',
                                                width: '100%',
                                                background: '#9e5f0f',
                                                position: 'absolute',
                                                bottom: '-2px',
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            padding: '15px 20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            border: 'none',
                                            background: '#FFFFFF'
                                        }}
                                        component={'button'}
                                        aria-label="Theory Clasess"
                                    >
                                        <Typography
                                            sx={{ color: '#333', fontSize: '18px' }}
                                        >
                                            Theory Classes
                                        </Typography>
                                        <Box
                                            sx={{ display: 'none' }}
                                        />
                                    </Box>
                                </Stack>
                            </Stack>
                            <Box height={'57vh'} padding={"20px"} borderRadius={'6px'}>
                                <Stack flexDirection={'row'} gap={'16px'} flexWrap="wrap">
                                    <Card sx={{ flex: { md: '0 0 calc(33.33% - 16px)', sm: '0 0 calc(50% - 16px)' }, cursor: 'pointer' }}>
                                        <CardActionArea>
                                            <CardContent sx={{ minHeight: '170px' }}>
                                                <Typography variant="h3" fontSize={'20px'} mb={'10px'}>
                                                    Economics 101
                                                </Typography>
                                                <Typography variant="body1" fontSize={'14px'} display={'flex'} marginBottom={'4px'}>
                                                    <Box mr={1} alignItems={'center'} display={'flex'}>
                                                        <IcnNotes />
                                                    </Box>
                                                    ACCOUNTING0001
                                                </Typography>
                                                <Typography variant="body1" fontSize={'14px'} display={'flex'}>
                                                    <Box mr={1} alignItems={'center'} display={'flex'}>
                                                        <IcnWebClassCode />
                                                    </Box>
                                                    EC01
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ padding: '16px', borderTop: '1px solid rgba(0,0,0,.1)', display: 'block' }}>
                                                <Box mb={1} display={'flex'} justifyContent={'space-between'}>
                                                    <Typography variant="body1" fontSize={'12px'}>
                                                        Class Progress:
                                                    </Typography>
                                                    <Typography variant="body1" fontSize={'14px'} fontWeight={'bolder'}>
                                                        25%
                                                    </Typography>
                                                </Box>
                                                <LinearProgress aria-label="class-progress" sx={{ height: '5px', marginLeft: '0 !important' }} variant="determinate" value={25} />
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                    <Card sx={{ flex: { md: '0 0 calc(33.33% - 16px)', sm: '0 0 calc(50% - 16px)' }, cursor: 'pointer' }}>
                                        <CardActionArea>
                                            <CardContent sx={{ minHeight: '170px' }}>
                                                <Typography variant="h3" fontSize={'20px'} mb={'10px'}>
                                                    Economics 102
                                                </Typography>
                                                <Typography variant="body1" fontSize={'14px'} display={'flex'} marginBottom={'4px'}>
                                                    <Box mr={1} alignItems={'center'} display={'flex'}>
                                                        <IcnNotes />
                                                    </Box>
                                                    ACCOUNTING0002
                                                </Typography>
                                                <Typography variant="body1" fontSize={'14px'} display={'flex'}>
                                                    <Box mr={1} alignItems={'center'} display={'flex'}>
                                                        <IcnWebClassCode />
                                                    </Box>
                                                    EC02
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{ padding: '16px', borderTop: '1px solid rgba(0,0,0,.1)', display: 'block' }}>
                                                <Box mb={1} display={'flex'} justifyContent={'space-between'}>
                                                    <Typography variant="body1" fontSize={'12px'}>
                                                        Class Progress:
                                                    </Typography>
                                                    <Typography variant="body1" fontSize={'14px'} fontWeight={'bolder'}>
                                                        50%
                                                    </Typography>
                                                </Box>
                                                <LinearProgress aria-label="class-progress" sx={{ height: '5px', marginLeft: '0 !important' }} variant="determinate" value={50} />
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                </Stack>
                            </Box>
                        </Box>
                        <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <Stack
                                sx={{
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
                                }}
                            >
                                <Stack direction="row" alignItems="center" gap="5px">
                                    <CopyrightIcon sx={{ fontSize: '12px' }} />
                                    <Typography sx={{ fontSize: '12px' }}>
                                        {new Date().getFullYear()} LMS DESIGN SYSTEM
                                    </Typography>
                                </Stack>
                                <Typography sx={{ fontSize: '12px' }}>XYZ University</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Stack>
        </Box >
    )
}