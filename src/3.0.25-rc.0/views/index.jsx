require('../assets/css/purecss/grids.css');
require('../assets/css/purecss/grids-responsive.css');
require('../assets/css/purecss/buttons.css');

require('../assets/css/main.scss');
require('../assets/css/index.scss');

var React = require('react'),
      MenuTop = require('../modules/menu-top.jsx'),
      MenuLeft = require('../modules/menu-left.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store'),
      logo = require('../assets/images/itsa.png');

var Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render: function() {
        var activeClass = this.state.menuActivated ? 'active' : '';
        return (
            <div className={activeClass}>
                <MenuTop {...this.props}/>
                <MenuLeft {...this.props}/>
                <div className="main">
                    <div className="splash-container">
                        <div className="splash">
                            <img className="logo-large" src={logo} />
                            <h1 className="splash-head">Itsa react-server</h1>
                            <p className="splash-subhead">
                                {this.props.messages.intro_react_server}
                            </p>
                            <p>
                                <a href="https://www.npmjs.com/package/itsa-cli" className="pure-button pure-button-primary">{this.props.messages.install} itsa-cli 2.4.16</a>
                                <a href="https://github.com/itsa-server/website-itsa-react-server/tree/master/src/3.0.25" className="pure-button pure-button-primary">{this.props.messages.viewthis} website-code</a>
                            </p>
                        </div>
                    </div>
                    <div className="content-wrapper">
                        <div className="content">
                            <h1>{this.props.messages.features}:</h1>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2">
                                    <ul>
                                        {this.props.messages.features_first.map(function(feature, i) {
                                            return (
                                                <li key={i}><i className="fa fa-rocket" />{feature}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2">
                                    <ul>
                                        {this.props.messages.features_second.map(function(feature, i) {
                                            return (
                                                <li key={i}><i className="fa fa-rocket" />{feature}</li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <h1>{this.props.messages.why_this_framework}?</h1>
                            <div>{this.props.messages.why_this_framework_content}</div>
                        </div>
                        <div className="footer l-box is-center">
                            {this.props.messages.designedby} <a href="http://itsasbreuk.nl">Marco Asbreuk</a>, Itsa react-server {this.props.messages.licenced} <a href="http://choosealicense.com/licenses/bsd-3-clause/">New BSD License</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Body;