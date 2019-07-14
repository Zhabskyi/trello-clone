import { connect } from 'react-redux';
import {getNotifications} from '../store/notifications/selector';
import {NotificationsBar} from '../components/NotificationsBar';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => {
  return {
    notifications: getNotifications(state)
  }
};

const NotificationsBarContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationsBar);

export default NotificationsBarContainer;
