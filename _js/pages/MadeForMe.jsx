import React, {PropTypes, Component} from 'react';
import paper from 'paper';
import {isEmpty} from 'lodash';

import {CreationStep, CreationSteps} from '../components';
import {selectItemsByStoreId} from '../api/stores';

class MadeForMe extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      active: 1,
      activeStepImages: []
    };

    this.clickHandler = ::this.clickHandler;
  }

  componentWillMount() {
    paper.install(window);
  }

  clickHandler(i) {

    this.setState({
      active: i,
      trigger: false
    });
    this.getActiveStepImages(i);
  }

  getCreationSteps() {
    let {id} = this.props;
    let {active} = this.state;

    selectItemsByStoreId(id, 'creation_steps')
      .then(creationSteps => this.setState({...creationSteps}))
      .then(() => this.getActiveStepImages(active));
  }

  getActiveStepImages(active) {

    let {images} = this.state;
    let activeStepImages = [];

    images.forEach(image => {
      if(image.step === active) {
        activeStepImages.push(image);
      }
    });

    this.setState({
      activeStepImages: activeStepImages});
  }

  renderCreationSteps() {
    let {steps, activeStepImages, active} = this.state;

    if(isEmpty(steps)) { //after receiving props
      this.getCreationSteps();
    } else {
      return <CreationSteps steps={steps} images={activeStepImages} active={active} clickHandler={this.clickHandler} />;
    }

  }

  renderCreationStep() {

    let {active, steps} = this.state;

    if(isEmpty(steps)) {
      return false;
    } else {
      return <CreationStep id={active} info={steps[active - 1].content} />;
    }

  }

  render() {

    return (
      <section className='made-for-me'>

        <h2>#madeforme</h2>

        { this.renderCreationSteps() }

        { this.renderCreationStep() }

      </section>
    );
  }
}

MadeForMe.propTypes = {
  id: PropTypes.number
};

export default MadeForMe;
