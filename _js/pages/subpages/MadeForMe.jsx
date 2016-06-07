import React, {PropTypes, Component} from 'react';
import paper, {Point} from 'paper';
import {isEmpty} from 'lodash';

import {StepButtons, CreationStep} from '../../components';

class MadeForMe extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      active: 1
    };

    this.clickHandler = ::this.clickHandler;
  }

  componentWillMount() {
    paper.install(window);
  }

  componentDidUpdate() {
    this.setMorphingBg();
  }

  setMorphingBg() {

    this.r = (0.18 * window.innerHeight); //responsive size

    let morphingPapers = []; //create a paper js scope for every canvas element
    this.circles = [];
    let fillColors = ['#668198', '#531339', '#377b62'];

    for(let i = 0; i < 3; i++) {

      morphingPapers[i] = new paper.PaperScope();
      morphingPapers[i].setup(`canvas${i}`);

      this.circles[i] = new morphingPapers[i].Path.Circle(new Point(this.r, this.r), this.r);

      //different colors
      this.circles[i].fillColor = fillColors[i];
      this.circles[i].fillColor.alpha = 0.6;

      this.circles[i].rndPos = [];
      this.generateRndPoints(i);

      this.draw(i, morphingPapers);
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

  draw(canvas, morphingPapers) {
    let speed = 200;

    morphingPapers[canvas].view.onFrame = () => {

      for (let i = 0; i < 4; i++) { //animation every segment / anchorpoint of the circle

        let dX1 = (this.circles[canvas].rndPos[i][0] - this.circles[canvas].segments[i].point.x) / (speed);
        let dY1 = (this.circles[canvas].rndPos[i][1] - this.circles[canvas].segments[i].point.y) / (speed);

        this.circles[canvas].segments[i].point.x += dX1;
        this.circles[canvas].segments[i].point.y += dY1;

        if(Math.floor(this.circles[canvas].segments[i].point.x) === Math.floor(this.circles[canvas].rndPos[i][0])){
          this.generateRndPoints(canvas);
        }

      }

    };
    morphingPapers[canvas].view.draw();
  }

  clickHandler(i) {

    let {creationSteps} = this.props;
    let content = '';

    creationSteps.forEach(creationStep => {
      if(i === creationStep.step) {
        content = creationStep.content;
      }
    });

    this.setState({active: i});

  }

  renderCreationStep() {

    let {active} = this.state;
    let {creationSteps} = this.props;

    if(isEmpty(creationSteps)) {
      return false;
    } else {
      return <CreationStep id={active} info={creationSteps[active].content} />;
    }

  }

  render() {

    let {creationSteps} = this.props;
    let {active} = this.state;

    return (
      <section className='made-for-me'>

        <h2>#madeforme</h2>

        <section className='step-container'>

          <div className='morph-bg'>

            {
              [...Array(3)].map((x, i) =>
                <canvas key={i} id={`canvas${i}`} className='canvas' data-paper-resize />
              )
            }

          </div>

          <section className='step-circle'>
            <StepButtons creationSteps={creationSteps} clickHandler={this.clickHandler} active={active}/>
          </section>

        </section>

        { this.renderCreationStep() }

      </section>

    );
  }
}

MadeForMe.propTypes = {
  creationSteps: PropTypes.array
};

export default MadeForMe;
