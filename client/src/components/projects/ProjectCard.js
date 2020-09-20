import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "40px",
    border: "2px solid black",
    backgroundColor: "#38383d",
		'& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        style={{color: "#00bfff"}}
				variant="h1"
				color=""
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={require("../../../public/images/" + props.img)}
        title="NoteBase"
      />
      <CardContent>
        <Typography variant="body1" style={{color: "white"}} component="p">
        	{props.desc}
				</Typography>
      </CardContent>
      <CardContent>
        <h4 style={{color: "#00bfff", textDecoration: "underline"}}>Technologies Used: </h4>
        {
          props.tech.map((t) => {
            return (
              <p style={{color: "white"}}>{"- " + t}</p>
            )
          })
        }
      </CardContent>
      <CardActions>
        <Button className="git-button ml-5 mr-3 text-white" variant="outlined" color="secondary" href={props.repo}>Github Repo</Button>
				<Button className="live-button text-white" variant="outlined" color="secondary" href={props.demo}>Try</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
