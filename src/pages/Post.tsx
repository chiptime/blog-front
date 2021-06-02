import ArticleCard from "../shared/UI/components/ArticleCard";
import {
    makeStyles,
    Typography,
    Link,
    MenuItem,
    Button,
    IconButton
} from "@material-ui/core";
import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, TurnedInNot, Share } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    pageContainer: {
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
            gridTemplateColumns: 'auto 1fr 250px',
            gridColumnGap: theme.spacing(2),
            padding: theme.spacing(2),
        },
        [theme.breakpoints.between('sm', 'md')]: {
            gridTemplateColumns: 'auto 1fr',
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
        marginTop: theme.spacing(1.5),
        display: 'flex',
        flexFlow: 'column',
        '&>div:not(:last-child)': {
            // marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2)
        },
        '&>div': {
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            // marginBottom
        }
    },
    tagHeader: {
        paddingLeft: theme.spacing(2),
    },
    headerTitle: {
        fontFamily: '"Lora", sans-serif',
        padding: `1rem ${theme.spacing(1.5)}px`,
    },
    headerSubtitle: {
        fontFamily: '"Lora", sans-serif',
        color: '#a9abb3',
        padding: `0 ${theme.spacing(1.5)}px 1rem`,
    },
    leftActionButton: {
        color: theme.palette.primary.contrastText,
        // textDecoration: 'none',
        // '&:hover': {
        //     color: theme.palette.secondary.main
        // }
    },
    mainImg: {
        width: '100%'
    }
}));

function Post() {
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
    // const actionData = [
    //     {
    //         count: '',
    //         url: ''
    //     },
    //     {
    //         count: '',
    //         url: ''
    //     },
    //     {
    //         count: '',
    //         url: ''
    //     },
    //     {
    //         count: '',
    //         url: ''
    //     },
    // ];
    // const action = actionData.map(({ count, url }) => {
    //     return (
    //         <Link
    //             {...{
    //                 // component: RouterLink,
    //                 to: url,
    //                 color: "inherit",
    //                 style: { textDecoration: "none" },
    //                 key: count,
    //             }}
    //         >
    //             <MenuItem>
    //                 {count}
    //             </MenuItem>
    //         </Link>
    //     );
    // });

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
    const { leftActionButton, mainImg, list, pageLayout, leftContainer, headerTitle, headerSubtitle } = useStyles();
    const articles = data.map(a => <ArticleCard data={a}></ArticleCard>);

    const imgData = {
        isVisibleImg: true,
        imgSrc: 'https://store-images.s-microsoft.com/image/apps.16825.66773763610413114.5c7115ed-b566-4d24-80ce-7027cb5b7c3e.7d2fc072-886d-446e-9f37-e71d442ae729?mode=scale&q=90&h=1080&w=1920'
    };

    return (
        <div className={pageLayout}>
            <aside className={leftContainer}>
                <div>
                    <IconButton className={leftActionButton} title="Liked" aria-label="love post" component="span">
                        <FavoriteBorderOutlined />
                    </IconButton>
                    <Typography variant="body1" component="p">
                        182
                    </Typography>
                </div>
                <div>
                    <IconButton className={leftActionButton} title="Unicorn" aria-label="say awesome post" component="span">
                        <ChatBubbleOutlineOutlined />
                    </IconButton>
                    <Typography variant="body1" component="p">
                        44
                    </Typography>
                </div>
                <div>
                    <IconButton className={leftActionButton} title="Saved" aria-label="save for later" component="span">
                        <TurnedInNot />
                    </IconButton>
                    <Typography variant="body1" component="p">
                        354
                    </Typography>
                </div>
                <div>
                    <IconButton className={leftActionButton} title="Saved" aria-label="save for later" component="span">
                        <Share />
                    </IconButton>
                </div>
            </aside>
            <section>
                <header >
                    {/* className={headerContainer} */}
                    <Typography variant="h3" component="h3" className={headerTitle}>
                        5 Simple Things I Removed from My Life to Become Happier
                    </Typography>
                    <Typography variant="h5" component="h5" className={headerSubtitle}>
                        Happiness comes from subtraction, not addition.
                    </Typography>
                    {
                        imgData.isVisibleImg
                            ? <img src={imgData.imgSrc} alt=""  className={mainImg}/>
                            : ''
                            // className={mainImg}
                    }
                </header>
                {/* <ol className={list}>
                    {articles}
                </ol> */}
            </section>
            <aside></aside>
        </div>
    );
}

export default Post;
