import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScriptTag from 'react-script-tag';

import { actionCreators } from '../../redux/reducers/cartReducer/cartReducerReducer';

const WompiWidget = ({ total }) => {
    return (
        <form>
            {total > 0 && 
                <ScriptTag
                    type="text/javascript"
                    src="https://checkout.wompi.co/widget.js"
                    data-render="button"
                    data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
                    data-currency="COP"
                    data-amount-in-cents={total}
                    data-reference="4XMPGKWWPKWQ" />
            }
        </form>
    )
}

const mapStateToProps = ({ cartReducer }) => ({
    total: cartReducer.total
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setProcessingPayment: actionCreators.setProcessingPayment
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WompiWidget);