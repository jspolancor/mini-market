import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './App.scss';
import TopBar from './components/TopBar/TopBar';
import { actionCreators } from './redux/sagas/cartSaga/cartSagaSaga';

function App({ setWindowWidth }) {
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [setWindowWidth]);
  return (
    <div>
      <TopBar />
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setWindowWidth: actionCreators.setWindowWidth
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(App);