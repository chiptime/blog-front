import {
    Toolbar,
    makeStyles,
    Button,
    TextField
} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Url } from "./interfaces";
import { Logo } from './Logo';


const useStyles = makeStyles((theme) => ({
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    containerHeader: {
        minHeight: '100%',
        height: '100%'
    },
    logoContainer: {
        marginRight: 'auto'
    },
    marginsIcon: {
        marginLeft: theme.spacing(1), //  '0.8rem',
        marginRight: '0.8rem'
    },
    textField: {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main
    },
}));

export const Desktop = (headersData: Url[]) => {
    const { menuButton, containerHeader, marginsIcon, logoContainer, textField } = useStyles();

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        // component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <Toolbar className={containerHeader}>
            <div className={logoContainer}>
                <Logo />
                {/* <Button variant="contained" color="primary" aria-label="menu">DEV</Button> */}
            </div>
            <div>
                <TextField InputProps={{
                    className: textField,
                    classes: { notchedOutline: textField }
                }} color="secondary" placeholder="Search" size="small" variant="outlined">
                    <SearchIcon />
                </TextField >
                {/* <Button color="secondary" aria-label="menu">Log in</Button>
                <Button variant="contained" color="primary" aria-label="menu">Create account</Button> */}
            </div>
            {/* 
            <TextField placeholder="Search" size="small" variant="outlined"></TextField >
            <div>{getMenuButtons()}</div> */}
        </Toolbar>
    );
};