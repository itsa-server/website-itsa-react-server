require('../assets/css/directory-structure.css');

require('../assets/css/main.scss');
// Because we need to highlight the code, we make use of highlightjs
require('../assets/css/highlights/github.css');
require('../assets/css/code.css');

// require('../assets/css/style1.css');
const React = require('react'),
      MenuTop = require('../modules/menu-top.jsx'),
      MenuLeft = require('../modules/menu-left.jsx'),
      Reflux = require('reflux'),
      store = require('../reflux/stores/app-store');

const Body = React.createClass({
    mixins: [Reflux.connect(store)],
    render() {
        const activeClass = this.state.menuActivated ? 'active' : '';
        return (
            <div className={activeClass}>
                <MenuTop {...this.props}/>
                <MenuLeft {...this.props}/>
                <div className="main">
                    <h1 className="header" dangerouslySetInnerHTML={this.props.pageheader} />
                    <div className="content" dangerouslySetInnerHTML={this.props.pagecontent} />
                    <table>
                        <tbody>
                            <tr><td colSpan="2" className="border">public_server</td><td colSpan="5" className="special">&lt;&mdash;this folder should be uploaded to your server</td></tr>
                            <tr><td></td><td className="left-border"></td><td colSpan="5"></td></tr>
                            <tr><td></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;</td><td colSpan="2" className="border">versions</td><td colSpan="3"></td></tr>
                            <tr><td></td><td colSpan="2" className="left-border"></td><td colSpan="4" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="2" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;</td><td className="border special">0.0.0</td><td colSpan="2" className="special">&lt;&mdash;your production version</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">actions</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">assets</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">css</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">images</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">js</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border module">&mdash;favicon.ico</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">languages</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border module">&mdash;en.json</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">markdowns</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">en</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td></td><td className="left-border module">&mdash;index.MD</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">models</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border module">&mdash;index.js</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">modules</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">pageapps</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">pagetitles</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border module">&mdash;en.json</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">reflux</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">actions</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td></td><td className="left-border module">&mdash;app-actions.js</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">constants</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td></td><td className="left-border module">&mdash;app-constants.js</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td colSpan="2" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">stores</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td></td><td className="left-border module">&mdash;app-store.js</td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border">&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;</td><td className="border module">views</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border"></td><td className="left-border module">&mdash;index.jsx</td><td></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td colSpan="3" className="left-border"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;build-stats.json</td><td colSpan="2"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;file404.html</td><td colSpan="2"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;reactserver.config.json</td><td colSpan="2"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;routes.js</td><td colSpan="2"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;package.json</td><td colSpan="2"></td></tr>
                            <tr><td></td><td colSpan="3" className="left-border"></td><td className="left-border module">&mdash;server.js</td><td colSpan="2"></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});

module.exports = Body;