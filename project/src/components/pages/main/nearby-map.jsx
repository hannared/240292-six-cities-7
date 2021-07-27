import { connect } from 'react-redux';
import { Map } from './map';

const mapStateToProps = (state) => ({
  offers: state.nearbyOffers,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
