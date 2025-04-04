import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
function MyCard() {
  return (
    <Card sx={{ backgroundColor: "lightblue" }}>
      <CardMedia sx={{ height: 140 }} image="./vite.svg" title="green iguana" />
      <CardContent sx={{ backgroundColor: "lightblue" }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontFamily: "monospace" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
export default MyCard;
