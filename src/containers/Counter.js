import { connect } from 'react-redux';
import {Counter} from '../components/Counter';

const mapDispatchToProps = () => ({});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    counts: state.app.clickCounts
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Container;
