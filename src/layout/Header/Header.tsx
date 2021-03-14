import {
    AppBar,
    makeStyles,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Mobile } from './Mobile';
import { Desktop } from './Desktop';
import { Url } from "./interfaces";
import { MOBILE_BREAKPOINT } from "../../shared/UI";

const headersData: Url[] = [
    {
        label: "My Account",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];

const useStyles = makeStyles(() => ({
    header: {
        height: '3.5rem',
        // backgroundColor: "#400CCC",
        // paddingRight: "79px",
        // paddingLeft: "118px",
        [`@media (max-width: ${MOBILE_BREAKPOINT}px)`]: {
            paddingLeft: 0,
        },
    },
}));

export default function Header() {
    const { header, } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < MOBILE_BREAKPOINT
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? Mobile(headersData, state, setState) : Desktop(headersData)}
            </AppBar>
        </header>
    );
}

// import React, { useState, useEffect } from "react";
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import './Header.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

// export default function Header() {
//     const [state, setState] = useState({
//         mobileView: false
//     })

//     // const { mobileView } = state;

//     useEffect(() => {
//         const setResponsiveness = () => {
//             return window.innerWidth < 900
//                 ? setState((prevState) => ({ ...prevState, mobileView: true }))
//                 : setState((prevState) => ({ ...prevState, mobileView: false }));
//         };
//         setResponsiveness();
//         window.addEventListener("resize", () => setResponsiveness());
//     }, []);

//     return (
//         <div className="containerHeader">

//             <div className="HBox">
//                 <MenuIcon color="primary" className="marginLS marginRS" />
//                 <Button variant="contained" color="primary" aria-label="menu">DEV</Button>
//             </div>
//             <div className="HBox">
//                 <TextField placeholder="Search" size="small" variant="outlined"></TextField >
//                 <SearchIcon color="primary" className="marginLS marginRS" />
//                 <Button variant="contained" color="primary" aria-label="menu">Create account</Button>
//             </div>
//         </div>
//     );
// }
