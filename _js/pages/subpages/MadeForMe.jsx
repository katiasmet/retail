import React, {PropTypes, Component} from 'react';
import paper from 'paper';
import {isEmpty} from 'lodash';

import {StepButtons, CreationStep, MorphingBg} from '../../components';

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

  clickHandler(i) {

    this.setState({active: i});

  }

  renderCreationStep() {

    let {active} = this.state;
    let {creationSteps} = this.props;

    //let $creationStep = document.querySelector('.creation-step');
    //creationStep.style.animationPlayState='paused';
    //creationStep.style.animationPlayState='running';

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

          <MorphingBg radius={0.18} fillColors={['#668198', '#531339', '#377b62']} amount={3} />

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
