require('../assets/css/main.scss');
// Because we need to highlight the code, we make use of highlightjs
require('../assets/css/highlights/github.css');
require('../assets/css/code.css');

var React = require('react'),
      MenuTop = require('./menu-top.jsx'),
      MenuLeft = require('./menu-left.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store');

var Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render: function() {
        var activeClass = this.state.menuActivated ? 'active' : '';
        return (
            <div className={activeClass}>
                <MenuTop {...this.props}/>
                <MenuLeft {...this.props}/>
                <div className="main">
                    <h1 className="header" dangerouslySetInnerHTML={this.props.pageheader} />
                    <div className="content" dangerouslySetInnerHTML={this.props.pagecontent} />
                </div>
            </div>
        );
    }
});

module.exports = Body;