import React, {PropTypes, Component} from 'react';
import paper from 'paper';
import {isEmpty} from 'lodash';

import {StoreHeader, Navigation, RelatedStores, CreationStep, CreationSteps} from '../components';
import {selectItemsByStoreId} from '../api/stores';

class MadeForMe extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      active: 1,
      creationSteps: []
    };

    this.clickHandler = ::this.clickHandler;
  }

  componentWillMount() {
    paper.install(window);
  }

  clickHandler(i) {

    console.log('clickhandler');
    this.setState({active: i});

  }

  getCreationSteps() {
    let {id} = this.props;

    selectItemsByStoreId(id, 'creation_steps')
      .then(creationSteps => this.setState({creationSteps: creationSteps}));
  }

  renderCreationSteps() {
    let {creationSteps, active} = this.state;

    if(isEmpty(creationSteps)) { //after receiving props
      this.getCreationSteps();
    } else {
      return <CreationSteps creationSteps={creationSteps} active={active} clickHandler={this.clickHandler} />;
    }

  }

  renderCreationStep() {

    let {active, creationSteps} = this.state;

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

    let {name, craft, tags, icon, pathname, stores} = this.props;
    let {active} = this.state;

    return (
      <section className='left-screen about-me-container'>

        <StoreHeader name={name} craft={craft} tags={tags} icon={icon} />
        <Navigation pathname={pathname} />

        <section className='made-for-me'>

          <h2>#madeforme</h2>

          { this.renderCreationSteps() }

          { this.renderCreationStep() }

        </section>

        <RelatedStores stores={stores} />

      </section>

    );
  }
}

MadeForMe.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  craft: PropTypes.string,
  tags: PropTypes.array,
  icon: PropTypes.string,
  pathname: PropTypes.string,
  portrait: PropTypes.string,
  quote: PropTypes.string,
  stores: PropTypes.array
};

export default MadeForMe;
