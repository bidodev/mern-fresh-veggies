import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

const withScrollIntoView = (WrappedComponent) => {
  return withRouter(
    class extends PureComponent {
      componentDidMount = () => {
        window.scrollTo(0, 0);
      };

      componentDidUpdate = (prevProps) => {
        if (this.props.location !== prevProps.location) {
          window.scrollTo(0, 0);
        }
      };

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  );
};

export default withScrollIntoView;
