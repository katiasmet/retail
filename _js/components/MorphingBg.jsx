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

    let {radius, fillColors, amount} = this.props;

    this.r = (radius * window.innerHeight); //responsive size
    this.circles = [];

    let morphingPaper = new paper.PaperScope();
    morphingPaper.setup('canvas');

    for(let i = 0; i < amount; i++) {

      this.circles[i] = new morphingPaper.Path.Circle(new Point(this.r, this.r), this.r);

      //different colors
      this.circles[i].fillColor = fillColors[i];
      this.circles[i].fillColor.alpha = 0.6;

      this.circles[i].rndPos = [];
      this.generateRndPoints(i);

      this.draw(i, morphingPaper);
    }
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

  draw (circle, morphingPaper){
    let speed = 200;

    morphingPaper.view.onFrame = () => {

      for (let i = 0; i < 4; i++) { //animation every segment / anchorpoint of the circle

        let dX1 = (this.circles[circle].rndPos[i][0] - this.circles[circle].segments[i].point.x) / (speed);
        let dY1 = (this.circles[circle].rndPos[i][1] - this.circles[circle].segments[i].point.y) / (speed);

        this.circles[circle].segments[i].point.x += dX1;
        this.circles[circle].segments[i].point.y += dY1;

        if(Math.floor(this.circles[circle].segments[i].point.x) === Math.floor(this.circles[circle].rndPos[i][0])){
          this.generateRndPoints(circle);
        }

      }

    };
    morphingPaper.view.draw();
  }

  render() {
    return (
      <canvas id='canvas' className='canvas' data-paper-resize  />
    );
  }
}

MorphingBg.propTypes = {
  radius: PropTypes.number,
  fillColors: PropTypes.array,
  amount: PropTypes.number
};

export default MorphingBg;
