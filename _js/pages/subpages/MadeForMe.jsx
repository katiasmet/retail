import React, {PropTypes, Component} from 'react';
import paper, {Point} from 'paper';
import {isEmpty} from 'lodash';

import {CreationStep} from '../../components';

class MadeForMe extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      active: ''
    };
  }

  componentWillMount() {
    paper.install(window);
  }

  componentDidUpdate() {
    this.paperTest();
  }

  paperTest() {

    this.r = (0.034 * window.innerHeight); //responsive size

    let {creationSteps} = this.props;
    let creationStepsPapers = []; //create a paper js scope for every canvas element
    this.circles = [];

    for(let i = 0; i < creationSteps.length; i++) {

      creationStepsPapers[i] = new paper.PaperScope();
      creationStepsPapers[i].setup(`canvas${i}`);

      this.circles[i] = new creationStepsPapers[i].Path.Circle(new Point(this.r, this.r), this.r);
      this.circles[i].fillColor = '#FCCD02';

      this.circles[i].rndPos = [];
      this.generateRndPoints(i);

      this.draw(i, creationStepsPapers);
    }

  }

  rndPoint(min, max) {
    return Math.random() * (max - min) + min;
  }

  generateRndPoints(i) { //afhankelijk van de grootte van de cirkel
    let diameter = this.r * 2;
    this.circles[i].rndPos[0] = [this.rndPoint(0, (0.2 * diameter)) , this.rndPoint((0.4 * diameter), (0.6 * diameter))];
    this.circles[i].rndPos[1] = [this.rndPoint((0.4 * diameter), (0.6 * diameter)) , this.rndPoint(0, (0.2 * diameter))];
    this.circles[i].rndPos[2] = [this.rndPoint((0.8 * diameter), (1 * diameter)) , this.rndPoint((0.4 * diameter), (0.6 * diameter))];
    this.circles[i].rndPos[3] = [this.rndPoint((0.4 * diameter), (0.6 * diameter)) , this.rndPoint((0.8 * diameter), (1 * diameter))];
  }

  draw(canvas, creationStepsPapers) {
    let speed = 150;

    creationStepsPapers[canvas].view.onFrame = () => {

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
    creationStepsPapers[canvas].view.draw();
  }

  clickHandler(i) {

    let {creationSteps} = this.props;
    let content = '';

    creationSteps.forEach(creationStep => {
      if(i === creationStep.step) {
        content = creationStep.content;
      }
    });

    this.setState({
      active: {
        id: i,
        content: content
      }
    });

  }

  renderCreationStep() {

    let {active} = this.state;
    let {creationSteps} = this.props;

    if(isEmpty(active)) { //render first step when no step is active
      for(let i = 0; i < creationSteps.length; i++) { //return doesn't work that well with foreach
        if(creationSteps[i].step === 1) {
          return <CreationStep id={creationSteps[i].step} info={creationSteps[i].content} />;
        }
      }
    } else {
      return <CreationStep id={active.id} info={active.content} />;
    }

  }


  render() {

    let {creationSteps} = this.props;

    return (
      <section className='made-for-me'>
        <section className='morph-btns'>

          {
            creationSteps.map((step, i) => {
              return (
                <button key={i} className='morph-btn' id={`morph-btn${i}`} onClick={() => this.clickHandler(i + 1)}>
                  <span className='morph-btn-content'>{i + 1}</span>
                  <canvas id={`canvas${i}`} className='canvas' data-paper-resize />
                </button>
              );
            })
          }

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
