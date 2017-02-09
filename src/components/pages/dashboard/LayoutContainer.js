import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from 'components/pages/dashboard/Layout';
function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
