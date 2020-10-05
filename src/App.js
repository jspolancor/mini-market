import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppStyles from './App.module.scss';
import TopBar from './components/TopBar/TopBar';
import Modal from './components/Modal/Modal';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import { actionCreators } from './redux/sagas/cartSaga/cartSagaSaga';
import DetailsContainer from './components/DetailsContainer/DetailsContainer';
import { breakpoints } from './constants';

function App({ setWindowWidth, windowWidth }) {

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [setWindowWidth]);

  return (
    <div>
      <TopBar />
      <div className={AppStyles.grid}>
        <div className={AppStyles.leftColumn}>
          <ProductsContainer />
        </div>
        {windowWidth > breakpoints.mobile &&
          <div className={AppStyles.rightColumn}>
            <DetailsContainer />
          </div>
        }
      </div>
      <Modal title={'asdlfkj'} open={true} onClose={() => console.log('close')}>
        <p>I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys are just imitating. So won't the real Slim Shady please stand up. Please stand up, please stand up?. 'Cause I'm Slim Shady, yes, I'm the real Shady. All you other Slim Shadys are just imitating. So won't the real Slim Shady please stand up. Please stand up, please stand up?</p>
      </Modal>
    </div>
  );
}

const mapStateToProps = ({ cartReducer }) => ({
  windowWidth: cartReducer.windowWidth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setWindowWidth: actionCreators.setWindowWidth
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);