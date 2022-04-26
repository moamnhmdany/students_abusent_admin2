import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardContainer = (props) => {
  return (
    <Card className="i-card" sx={{ maxWidth: 210 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Student Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onClick} size="small">
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardContainer;
