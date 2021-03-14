import {
    makeStyles,
} from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home';


const useStyles = makeStyles((theme) => ({
    container: {
        // margin: '0 auto',
        marginTop: '3.5rem',
        minHeight: 'calc(100vh - 3.5rem)',
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function Main() {
    const { container, } = useStyles();

    // const [state, setState] = useState({
    //     mobileView: false,
    //     drawerOpen: false,
    // });

    // const { mobileView } = state;

    // useEffect(() => {
    //     const setResponsiveness = () => {
    //         return window.innerWidth < MOBILE_BREAKPOINT
    //             ? setState((prevState) => ({ ...prevState, mobileView: true }))
    //             : setState((prevState) => ({ ...prevState, mobileView: false }));
    //     };

    //     setResponsiveness();

    //     window.addEventListener("resize", () => setResponsiveness());
    // }, []);

    return (
        <main className={container}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}