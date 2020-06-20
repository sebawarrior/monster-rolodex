import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.styles.css'


class CardMediaNew extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        monster: props.monster
    }
  }

  render(){
    //Si usara un setState dentro de render se generaría un loop infinito
    return (
          <Card id = "card">
          <CardActionArea>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            src={'https://robohash.org/$' + this.state.monster.id + '?set=set2&size=300x300'} // Con esta manera podemos ingresar números en textos
            title="Contemplative Reptile"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {this.state.monster.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {this.state.monster.company.catchPhrase}
            </Typography>
            </CardContent>
              <CardActions id="buttonplace" variant="contained">

                  <Button id="cardbutton1" size="small" color="primary" variant="contained">
                    Share
                  </Button>

                
                  <Button id="cardbutton2" variant="contained" size="small" color="primary">
                    Learn More
                  </Button>
              </CardActions>
          </CardActionArea>
          </Card>
    );
    }
}

export default CardMediaNew;