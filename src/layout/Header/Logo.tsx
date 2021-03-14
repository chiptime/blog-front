import {
    Typography,
    makeStyles
} from "@material-ui/core";


const useStyles = makeStyles(() => ({
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
}));

export const Logo = (() => {
    const { logo } = useStyles();

    return <Typography variant="h6" component="h1" className={logo}>
        DEV
    </Typography>
});