import ArticleCard from "../shared/UI/components/ArticleCard";
import { LinkedIn, FavoriteBorderOutlined } from '@material-ui/icons';
import {
    makeStyles,
    Typography,
    Link,
    MenuItem,
    Button
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    pageContainer: {
        // maxWidth: theme.breakpoints.values.sm,
        // marginLeft: 'auto',
        // marginRight: 'auto'
    },
    list: {
        padding: '0',
        '&>article:not(:last-child)': {
            marginBottom: theme.spacing(1)
        },
    },
    headerContainer: {
        height: '3.5rem',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        padding: '0 1rem'
    },
    pageLayout: {
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        display: 'grid',
        [theme.breakpoints.between('md', 'xl')]: {
            gridTemplateColumns: '248px 1fr 250px',
            gridColumnGap: theme.spacing(2),
            padding: theme.spacing(2),
        },
        [theme.breakpoints.between('sm', 'md')]: {
            gridTemplateColumns: '248px 1fr',
            gridColumnGap: theme.spacing(1),
            padding: theme.spacing(1),
            '&>aside:last-child': {
                display: 'none',
            }
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: '1fr',
            '&>aside': {
                display: 'none',
            }
        },
        // gridTemplateRows: 'repeat(15, auto)',
    },
    leftContainer: {
        '&>nav': {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(4)
        }
    },
    tagHeader: {
        paddingLeft: theme.spacing(2),
    }
}));

function Home() {
    const popularTagsData = [
        {
            label: 'javascript',
            url: ''
        },
        {
            label: 'webdev',
            url: ''
        },
        {
            label: 'react',
            url: ''
        },
        {
            label: 'CAPM',
            url: ''
        },

    ];

    const tags = popularTagsData.map(({ label, url }) => {
        return (
            <Link
                {...{
                    // component: RouterLink,
                    to: url,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                }}
            >
                <MenuItem>
                    #{label}
                </MenuItem>
            </Link>
        );
    });
    const navData = [
        {
            label: '🏡 Home',
            url: ''
        },
        {
            label: '📋 Listings',
            url: ''
        },
        {
            label: '🎤 Podcats',
            url: ''
        },
        {
            label: '🎬 Videos',
            url: ''
        },
        {
            label: '📝 Tags',
            url: ''
        },
        {
            label: 'Videos',
            url: ''
        },
        {
            label: 'Videos',
            url: ''
        },
        {
            label: 'Videos',
            url: ''
        },
    ];
    const nav = navData.map(({ label, url }) => {
        return (
            <Link
                {...{
                    // component: RouterLink,
                    to: url,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                }}
            >
                <MenuItem>
                    {label}
                </MenuItem>
            </Link>
        );
    });

    const oArticle = {
        title: 'Learn git concepts, not commands',
        url: '',
        imgSrc: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Vb8HmBo4--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/1k7xftlw20xk6jgyldlj.jpeg',
        isVisibleImg: true,
        user: {
            name: 'Bruno Iván Silva Narro',
            imgSrc: 'http://'
        },
        date: '7 Febrero',
        tags: [
            { url: 'http://', name: 'react' },
            { url: 'http://', name: 'javascript' },
            { url: 'http://', name: 'typescript' },
        ],
        reactions: 304,
        comments: 438,
        timeToRead: 2,
        otro: 'dasd'
    };

    const data = Array(10).fill(oArticle).map((i, index) => ({ ...i, isVisibleImg: !index }));
    const { list, pageLayout, leftContainer, headerContainer, tagHeader } = useStyles();
    const articles = data.map(a => <ArticleCard data={a}></ArticleCard>);

    return (
        <div className={pageLayout}>
            <aside className={leftContainer}>
                <nav >
                    {nav}
                </nav>

                <Typography variant="h6" component="p" className={tagHeader}>
                    Popular tags
                </Typography>
                <ol className={list}>
                    {tags}
                </ol>
            </aside>
            <section>
                <header className={headerContainer}>
                    <Typography variant="h6" component="p">
                        Posts
                    </Typography>
                </header>
                <ol className={list}>
                    {articles}
                </ol>
            </section>
            <aside></aside>
        </div>
    );
}

export default Home;
