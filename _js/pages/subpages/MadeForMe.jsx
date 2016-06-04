import React, {Component} from 'react';
import paper, {Point} from 'paper';

class MadeForMe extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      menuItems: [1, 2, 3, 4]
    };
  }

  componentWillMount() {
    paper.install(window);
  }

  componentDidMount() {
    this.paperTest();
  }

  paperTest() {

    this.r = (0.034 * window.innerHeight); //responsive size

    let {menuItems} = this.state;
    let menuItemsPapers = []; //create a paper js scope for every canvas element
    this.circles = [];

    for(let i = 1; i < (menuItems.length + 1); i++) {
      menuItemsPapers[i] = new paper.PaperScope();
      menuItemsPapers[i].setup(`canvas${i}`);

      this.circles[i] = new menuItemsPapers[i].Path.Circle(new Point(this.r, this.r), this.r);
      this.circles[i].fillColor = '#FCCD02';

      this.circles[i].rndPos = [];
      this.generateRndPoints(i);

      this.draw(i, menuItemsPapers);
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

  draw(canvas, menuItemsPapers) {
    let speed = 100;

    menuItemsPapers[canvas].view.onFrame = () => {

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
    menuItemsPapers[canvas].view.draw();
  }


  render() {

    let {menuItems} = this.state;

    return (

      <section className='morph-btns'>

        {
          menuItems.map((menuItem, i) => {
            return (
              <button key={i} className='morph-btn' id={`morph-btn${i}`}>
                <span className='morph-btn-content'>{menuItem}</span>
                <canvas id={`canvas${menuItem}`} className='canvas' data-paper-resize />
              </button>
            );
          })
        }

      </section>

    );

  }

}

export default MadeForMe;
