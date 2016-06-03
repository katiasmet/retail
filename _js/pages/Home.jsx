import React, {Component} from 'react';

class Home extends Component {

  constructor(props, context){

    super(props, context);



  }

  componentDidMount() {

  }

  

  render() {

    return (

      <section className='home'>

      <svg x='0px' y='0px' width='195.5px' height='200px' viewBox='0 0 195.5 200'>

        <path id='shape' className='morphing_nav_item'
          d='M109.2,199.8c18.7-2.1,79.3-36,85.7-92C201.2,51.7,160.5,0,105.4,0S3.6,43.3,0.2,86.5S34.6,204.8,109.2,199.8z'>
        </path>
      </svg>

      </section>

    );

  }

}

export default Home;
