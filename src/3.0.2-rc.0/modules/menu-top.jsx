require('../assets/css/purecss/menus.css');
require('../assets/css/purecss/grids.css');

require('../assets/css/top-menu.scss');

var LangMenuList = require('./__language_menulist');

var React = require('react'),
      menuURIs = [
        '/'
      ],
      logo = require('../assets/images/itsa-small.png');

var Menu = React.createClass({
    render: function() {
        var classname = {},
            link = {},
            that = this;
        menuURIs.forEach(function(menuURI) {
            classname[menuURI] = 'pure-menu-item' + ((that.props.__path===menuURI) ? ' menu-item-invisible' : '');
            link[menuURI] = that.props.__langprefix+menuURI;
        });
        return (
            <div className="top-menu pure-g pure-menu pure-menu-horizontal pure-menu-fixed">
                <div className="pure-u-5-12">
                    <img src={logo} />
                </div>
                <div className="pure-u-1-6 center">
                    <div className={classname['/']}><a href={link['/']} className="pure-menu-link">&laquo; home</a></div>
                </div>
                <div className="pure-u-5-12 right">
                    <LangMenuList {...this.props}/>
                </div>
            </div>
        );
    }
});

module.exports = Menu;

