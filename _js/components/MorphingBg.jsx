import React, {PropTypes, Component} from 'react';
import paper, {Point} from 'paper';

class MorphingBg extends Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.setMorphingBg();
  }

  setMorphingBg() {

    let {id, radius, fillColors, amount} = this.props;

    this.r = (radius * window.innerHeight); //responsive size
    this.circles = [];

    let morphingPaper = new paper.PaperScope();
    morphingPaper.setup(id);

    for(let i = 0; i < amount; i++) {

      this.circles[i] = new morphingPaper.Path.Circle(new Point(this.r, this.r), this.r);

      //different colors
      this.circles[i].fillColor = fillColors[i];
      this.circles[i].fillColor.alpha = 0.6;

      this.circles[i].rndPos = [];
      this.generateRndPoints(i);
    }

    this.draw(amount, morphingPaper);
  }

  rndPoint(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateRndPoints(i) { //afhankelijk van de grootte van de cirkel
    let diameter = this.r * 2;
    this.circles[i].rndPos[0] = [this.rndPoint(0, (0.1 * diameter)) , this.rndPoint((0.45 * diameter), (0.55 * diameter))];
    this.circles[i].rndPos[1] = [this.rndPoint((0.45 * diameter), (0.55 * diameter)) , this.rndPoint(0, (0.1 * diameter))];
    this.circles[i].rndPos[2] = [this.rndPoint((0.9 * diameter), (1 * diameter)) , this.rndPoint((0.45 * diameter), (0.55 * diameter))];
    this.circles[i].rndPos[3] = [this.rndPoint((0.45 * diameter), (0.55 * diameter)) , this.rndPoint((0.9 * diameter), (1 * diameter))];
  }

  draw (amount, morphingPaper){
    let speed = 200;

    morphingPaper.view.onFrame = () => {

      for(let i = 0; i < amount; i++) {
        for (let j = 0; j < 4; j++) { //animation every segment / anchorpoint of the circle

          let dX1 = (this.circles[i].rndPos[j][0] - this.circles[i].segments[j].point.x) / (speed);
          let dY1 = (this.circles[i].rndPos[j][1] - this.circles[i].segments[j].point.y) / (speed);

          this.circles[i].segments[j].point.x += dX1;
          this.circles[i].segments[j].point.y += dY1;

          if(Math.floor(this.circles[i].segments[j].point.x) === Math.floor(this.circles[i].rndPos[j][0])){
            this.generateRndPoints(i);
          }

        }
      }

    };
    morphingPaper.view.draw();
  }

  render() {
    let {id} = this.props;

    return (
      <canvas id={id} className='canvas' data-paper-resize  />
    );
  }
}

MorphingBg.propTypes = {
  id: PropTypes.string,
  radius: PropTypes.number,
  fillColors: PropTypes.array,
  amount: PropTypes.number
};

export default MorphingBg;
