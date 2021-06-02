import {
    Typography,
    makeStyles
} from "@material-ui/core";
import history from '../../history';
// import { useHistory } from 'react-router-dom';

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
    // const history = useHistory();
    const handleOnClick = () => history.push('/');

    return <Typography variant="h6" component="h1" className={logo} onClick={handleOnClick}>
        DEV
    </Typography>
})