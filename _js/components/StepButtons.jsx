import React, {PropTypes} from 'react';

const StepButtons = ({creationSteps, clickHandler, active}) =>  {

  console.log(active);

  return (
    <section className='step-btns'>

      {
        creationSteps.map((step, i) => {
          return (
            <button key={i} className={`step-btn step-btn-${i} ${active === (i + 1) ? 'active' : ''}`} onClick={() => clickHandler(i + 1)}>
              {i + 1}
            </button>
          );
        })
      }

    </section>
  );

};

StepButtons.propTypes = {
  creationSteps: PropTypes.array,
  clickHandler: PropTypes.func,
  active: PropTypes.number
};

export default StepButtons;
