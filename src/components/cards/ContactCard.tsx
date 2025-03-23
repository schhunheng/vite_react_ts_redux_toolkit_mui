import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

type ContactCardType = {
  imageUrl: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactCard({
  imageUrl,
  fullName,
  email,
  phone,
  message,
}: ContactCardType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            FullName : {fullName}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Email :{email}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Phone : {phone}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Message :{message}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
