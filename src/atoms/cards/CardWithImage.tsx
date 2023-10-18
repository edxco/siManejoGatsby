import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { truncateText } from "../../helpers";
import { Chip } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CardActionArea from "@mui/material/CardActionArea";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

interface ICardWithImage {
  image: string;
  title: string;
  description: string;
  slug: string;
  category?: string;
}

export default function CardWithImage(props: ICardWithImage) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "14px",
        margin: "30px auto",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
    >
      <CardActionArea href={`blog/${props.slug}`}>
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt={props.title}
        />
        <CardContent sx={{ padding: "20px 28px 0 28px" }}>
          <div style={{ width: "100%", margin: "10px 0 20px 0" }}>
            <Chip label={props.category} size="medium" color={"error"} />
          </div>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight={900}
            sx={{ height: "80px" }}
          >
            {truncateText(props.title, 45)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateText(props.description, 92)}
          </Typography>
        </CardContent>
        <CardActions
          disableSpacing
          sx={{ justifyContent: "flex-end", paddingBottom: "20px", paddingTop: '30px' }}
        >
          <Typography variant="body2" fontWeight={600} color="text.primary">
            Seguir leyendo
          </Typography>
          <ChevronRightIcon />
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
