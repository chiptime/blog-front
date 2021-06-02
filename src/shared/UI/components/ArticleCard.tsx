import {
    makeStyles,
    Avatar,
    Button,
    IconButton,
    Typography
} from "@material-ui/core";

import history from '../../../history';
import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, TurnedInNot } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mainImg: {

        [theme.breakpoints.between('sm', 'xl')]: {
            borderRadius: '0.5rem 0.5rem 0 0',
            maxWidth: `calc(100% + 2rem)`,
            marginLeft: `-1rem`,
            marginRight: `-1rem`,
            marginTop: `-1rem`,
            marginBottom: `1rem`,
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: `calc(100% + ${theme.spacing(3)}px)`,
            marginTop: `-${theme.spacing(1.5)}px`,
            marginLeft: `-${theme.spacing(1.5)}px`,
            marginRight: `-${theme.spacing(1.5)}px`,
            marginBottom: ` ${theme.spacing(1.5)}px`,
        },
    },
    container: {
        boderRadius: '1rem',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'start',
        color: theme.palette.primary.contrastText,
        // backgroundColor: theme.palette.primary.main,
        backgroundColor: '#25282c',
        boxShadow: '0 8px 24px 0 rgb(0 0 0 / 24%)',
        '&>div:first-child': {
            marginBottom: theme.spacing(1)
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            padding: theme.spacing(2),
            borderRadius: '0.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1.5),
        },
        '&:active': {
            boxShadow: `0 0 0 2px ${theme.palette.secondary.dark}`
        }
    },
    userContainer: {
        display: 'flex',
    },
    nameContainer: {
        display: 'flex',
        flexFlow: 'column',
        alignContent: 'start',
        marginLeft: theme.spacing(2)
    },
    name: {
        margin: '0',
        fontWeight: 500,
        color: '#a9abb3',
    },
    publishDate: {
        width: 'fit-content',
        color: '#686e78',
    },
    containerContent: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        '& > h2,& > dl': {
            marginBottom: theme.spacing(1)
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            width: 'calc(100% - 3.5rem)',
            paddingLeft: '3.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    tagContainer: {
        '&>a': {
            marginRight: theme.spacing(1),
            '&:not(:first-child)': {
                marginLeft: theme.spacing(1),
            }
        }
    },
    tag: {
        color: '#686e78',
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.contrastText,
        }
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    commentsButton: {
        marginRight: 'auto',
        color: '#a9abb3'
    },
    likesButton: {
        color: '#a9abb3'
    },
    saveToLaterButton: {
        color: '#a9abb3'
    },
    postLink: {
        color: theme.palette.primary.contrastText,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    timeToRead: {
        color: '#a9abb3',
    }

}));

interface ArticleCardData {
    title: string;
    isVisibleImg: boolean;
    url: string;
    imgSrc: string;
    user: {
        name: string;
        imgSrc: string;
    }
    date: string;
    tags: {
        url: string;
        name: string;
    }[];
    reactions: number;
    comments: number;
    timeToRead: number;
    otro?: string;
}
export default function ArticleCard({ data }: { data: ArticleCardData }) {
    const { mainImg, timeToRead, tagContainer, saveToLaterButton, likesButton, postLink, commentsButton, buttonsContainer, tag, containerContent, container, userContainer, nameContainer, publishDate, name } = useStyles();

    const tags = data.tags.map(t => <a onClick={() => history.push(t.url)} className={tag}>#{t.name}</a>);

    return (
        <article className={container}>
            {
                data.isVisibleImg
                    ? <img src={data.imgSrc} alt="" className={mainImg} />
                    : ''
            }
            <div className={userContainer}>
                <Avatar src={data.user.imgSrc}>{data.user.name?.charAt(0)}</Avatar>
                <div className={nameContainer}>
                    {/* <p className={name}>{data.user.name}</p> */}
                    <Typography variant="body2" component="p" className={name}>
                        {data.user.name}
                    </Typography>
                    <Typography variant="caption" component="time" className={publishDate}>
                        {data.date}
                    </Typography>
                </div>
            </div>

            <div className={containerContent}>
                {/* <Typography variant="h5" component="h2" >
                    <a href={data.url} className={postLink}>{data.title}</a>
                </Typography> */}
                <h2>
                    <a onClick={() => history.push(data.url)} className={postLink}>{data.title}</a>
                </h2>

                <dl className={tagContainer}>{tags}</dl>

                <div className={buttonsContainer}>
                    <Button
                        className={likesButton}
                        startIcon={<FavoriteBorderOutlined />}
                        aria-label="upload picture"
                        component="span"
                    >
                        {data.reactions}
                    </Button>
                    <Button
                        className={commentsButton}
                        startIcon={<ChatBubbleOutlineOutlined />}
                        aria-label="upload picture"
                        component="span"
                    >
                        {data.comments}
                    </Button>

                    <Typography variant="caption" component="p" className={timeToRead}>
                        {data.timeToRead} mins to Read
                    </Typography>
                    <IconButton className={saveToLaterButton} aria-label="upload picture" component="span">
                        <TurnedInNot />
                    </IconButton>
                </div>
            </div>
        </article>
    );
}