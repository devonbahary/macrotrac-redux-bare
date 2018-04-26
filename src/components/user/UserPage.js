import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user';
import UserForm from './UserForm';

class UserPage extends React.Component {
    state = {
      updatedUser: false
    };

    render() {
        return (
            <div>
                <h3>Your Settings</h3>
                {this.state.updatedUser && <p className="confirmed">Saved user settings.</p>}
                <UserForm
                  user={this.props.user}
                  onSubmit={(user) => {
                    this.props.dispatch(updateUser(user));
                    this.setState(() => ({ updatedUser: true }));
                  }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(UserPage);
