//react
import React, { Component, Fragment } from 'react';

//redux
import { connect } from 'react-redux';

//propTypes
import PropTypes from 'prop-types';

//alerts
import { withAlert } from 'react-alert';

class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
	};

	componentDidUpdate(prevProps) {
		const { error, alert } = this.props;

		if (error !== prevProps.error) {
			error.email !== undefined
				? alert.error(error.email)
				: alert.error(error.msg);
		}
	}

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (state) => ({
	error: state.errors,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
