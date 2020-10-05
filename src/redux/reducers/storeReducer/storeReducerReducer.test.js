import storeReducerReducer, { actions, actionCreators } from './storeReducerReducer'

it('should dispatch the SET_SELECTED_PRODUCT_ID action when setSelectedProductId() is called', () => {
    expect(actionCreators.setSelectedProductId(45))
        .toEqual({
            type: actions.SET_SELECTED_PRODUCT_ID,
            payload: 45
        })
})

it('should dispatch the SET_PRODUCT_MODAL_OPEN action when setProductModalOpen() is called', () => {
    expect(actionCreators.setProductModalOpen(true))
        .toEqual({ type: actions.SET_PRODUCT_MODAL_OPEN, payload: true })

    expect(actionCreators.setProductModalOpen(false))
        .toEqual({ type: actions.SET_PRODUCT_MODAL_OPEN, payload: false })
})

it('should dispatch the SET_ANIMATING_PRODUCT_MODAL action when setAnimatingProductModal() is called', () => {
    expect(actionCreators.setAnimatingProductModal(true))
        .toEqual({ type: actions.SET_ANIMATING_PRODUCT_MODAL, payload: true })
    expect(actionCreators.setAnimatingProductModal(false))
        .toEqual({ type: actions.SET_ANIMATING_PRODUCT_MODAL, payload: false })
})

it('should set the selected product id', () => {
    expect(storeReducerReducer({ selectedProductId: null }, actionCreators.setSelectedProductId(50)))
        .toEqual({ selectedProductId: 50 })
})

it('should open and close the product modal', () => {
    expect(storeReducerReducer({ productModalOpen: false }, actionCreators.setProductModalOpen(true)))
        .toEqual({ productModalOpen: true })

    expect(storeReducerReducer({ productModalOpen: true }, actionCreators.setProductModalOpen(false)))
        .toEqual({ productModalOpen: false })
})

it('should set the animatingProductModal variable', () => {
    expect(storeReducerReducer({ animatingProductModal: false }, actionCreators.setAnimatingProductModal(true)))
        .toEqual({ animatingProductModal: true })

    expect(storeReducerReducer({ animatingProductModal: true }, actionCreators.setAnimatingProductModal(false)))
        .toEqual({ animatingProductModal: false })
})