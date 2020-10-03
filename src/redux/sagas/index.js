import { all } from 'redux-saga/effects';

import { watchCartIsActive, watchWindowWidth, actionCreators as cartActions} from './cartSaga/cartSagaSaga';

export const actions = {
  cartActions
}

export default function * rootSaga () {
  yield all ([
    watchCartIsActive(),
    watchWindowWidth()
  ])
}