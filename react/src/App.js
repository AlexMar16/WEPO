import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import '../styles/site.less';

class App extends React.Component {
    getChildContext() {
        return {
            user: {
                loginId: 'arnarl',
                displayName: 'Arnar Leifsson'
            }
        }
    }
    render() {
        return (
            <div>
                <MainContent />
            </div>
        );
    };
}

App.childContextTypes = {
    user: PropTypes.shape({
        loginId: PropTypes.string,
        displayName: PropTypes.string
    })
};

// Define childContextTypes and use contextTypes for navigation bar

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
