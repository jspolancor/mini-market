import { all } from 'redux-saga/effects';

import { watchCartIsActive, watchWindowWidth, actionCreators as cartActions} from './cartSaga/cartSagaSaga';
import { watchSetSelectedProductId, actionCreators as storeActions} from './storeSaga/storeSagaSaga';

export const actions = {
  cartActions,
  storeActions
}

export default function * rootSaga () {
  yield all ([
    watchCartIsActive(),
    watchWindowWidth(),
    watchSetSelectedProductId()
  ])
}