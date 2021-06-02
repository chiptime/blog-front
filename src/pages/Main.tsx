import {
    makeStyles,
} from "@material-ui/core";

import {
    Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home';
import Post from './Post';
import history from '../history';

const useStyles = makeStyles((theme) => ({
    container: {
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
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/posts/:id">
                        <Post />
                    </Route>
                </Switch>
            </Router>
        </main>
    );
}