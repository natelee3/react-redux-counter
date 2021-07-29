import Decrement from '../components/Decrement';
import { connect } from 'react-redux';
import { actionDecrement } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionDecrement());
        }
    }
}

export default connect(null, mapDispatchToProps)(Decrement);