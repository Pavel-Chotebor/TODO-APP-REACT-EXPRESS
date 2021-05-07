import React from 'react';
import { connect } from 'react-redux'
import './popUpMessage.scss';
import Fade from 'react-reveal/Fade';

function PopMessage({ message, visibility }) {
  return (
    <div className={'popMessage ' + visibility}>
      <Fade>
        <div className="textBox">
        <img src="/images/bell.png"></img>
          <p> {message} </p>
        </div>
      </Fade>
    </div>
  );
}

const mapStateToProps = (store) => {
  console.log(store)
  console.log(store.visibility.POP_UP_MESSAGE)
  return {
    visibility: store.visibility.POP_UP_MESSAGE,
    message: store.message,
  }
}

export default connect(mapStateToProps, null)(PopMessage)