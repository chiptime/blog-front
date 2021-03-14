import {
    Toolbar,
    IconButton,
    Drawer, TextField,
    Link,
    MenuItem,
    makeStyles,
    Button
} from "@material-ui/core";
import {
    Search as SearchIcon,
    Close as CloseIcon,
    AccountBox as AccountBoxIcon,
    LinkedIn as LinkedInIcon,
    GitHub as GithubIcon
} from '@material-ui/icons';

import MenuIcon from "@material-ui/icons/Menu";
import { HeaderState, Url } from "./interfaces";
import { Logo } from './Logo';
import React from "react";


const useStyles = makeStyles((theme) => ({
    containerHeader: {
        height: '100%',
        minHeight: '100%',
    },
    drawerPaper: {
        width: '100vw',
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    },
    drawerPaperContent: {
        height: '100%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
    },
    drawerHeaderBtns: {
        display: 'flex'
    },
    drawerCloseBtn: {
        fontSize: '1rem'
    },
    logoContainer: {
        marginRight: 'auto'
    },
    textField: {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        '& .Mui-focused': {
            willChange: 'width',
            transition: 'width 2s',
            width: '70%',
        }
    },
    linkItem: {
        fontSize: '20px'
    },
    RRSSlinks: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 5rem'
    }
}));

const getDrawerChoices = (headersData: Url[]) => {
    return headersData.map(({ label, href }) => {
        return (
            <Link
                {...{
                    // component: RouterLink,
                    to: href,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                }}
            >
                <MenuItem>
                    <LinkedInIcon />
                    {label}
                </MenuItem>
            </Link>
        );
    });
};

export const Mobile = (headersData: Url[], state: any, setState: any) => {
    const { containerHeader, drawerPaperContent, RRSSlinks, drawerCloseBtn, drawerPaper, logoContainer, textField, drawerHeaderBtns } = useStyles();
    const { drawerOpen } = state;
    const handleDrawerOpen = () =>
        setState((prevState: HeaderState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
        setState((prevState: HeaderState) => ({ ...prevState, drawerOpen: false }));

    return (
        <Toolbar className={containerHeader}>
            <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
                classes={{
                    paper: drawerPaper,
                }}
            >
                <div className={drawerPaperContent} >
                    <div className={drawerHeaderBtns}>
                        <IconButton className={logoContainer}
                            {...{
                                color: "inherit",
                                "aria-label": "user",

                            }}
                        >
                            <AccountBoxIcon />
                        </IconButton>

                        <IconButton
                            {...{
                                color: "inherit",
                                // color: 'secondary',
                                "aria-label": "close",
                                "aria-haspopup": "true",
                                onClick: handleDrawerClose,
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>

                    <div>
                        {getDrawerChoices(headersData)}
                    </div>

                    <div className={RRSSlinks}>
                        <IconButton
                            aria-label="Linkedin.com"
                            onClick={() => window.open("https://www.Linkedin.com", "_blank")}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            aria-label="Linkedin.com"
                            onClick={() => window.open("https://www.github.com", "_blank")}
                        >
                            <GithubIcon />
                        </IconButton>
                    </div>
                </div>
            </Drawer>

            <div className={logoContainer}>
                <Logo />
            </div>
            <TextField InputProps={{
                className: textField,
                classes: { notchedOutline: textField }
            }} color="secondary" placeholder="Search" size="small" variant="outlined"></TextField >
            {/* <SearchIcon className="marginLS marginRS" /> */}
            {/* <Button variant="contained" color="primary" aria-label="menu">Create account</Button> */}
        </Toolbar>
    );
};
// className={textField}