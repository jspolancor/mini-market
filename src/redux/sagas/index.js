import { all } from 'redux-saga/effects';

import watchOpenModal, {actionCreators as cartActions} from './cartSaga/cartSagaSaga';

export const actions = {
  cartActions
}

export default function * rootSaga () {
  yield all ([
    watchOpenModal()
  ])
}