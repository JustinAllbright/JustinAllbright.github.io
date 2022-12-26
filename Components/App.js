var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Navbar from "./navbar.js";
import PomodoroClock from "./Projects/PomodoroClock/PomodoroClock.js";
import Quotes from "./Projects/Quotes/quotes.js";
import Calculator from "./Projects/Calculator/Calculator.js";
import Drums from "./Projects/Drums/drums.js";
import Markdown from "./Projects/Markdown/markdown.js";

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            CurrentTag: ""
        };
        _this.navigationLocation = _this.navigationLocation.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: "navigationLocation",
        value: function navigationLocation(event) {
            this.setState({
                CurrentTag: event.target.innerHTML
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(Navbar, { navigationLocation: this.navigationLocation, currentLocation: this.state.CurrentTag }),
                React.createElement(
                    "p",
                    null,
                    "Current selected tag: ",
                    this.state.CurrentTag
                ),
                this.state.CurrentTag == "Calculator" && React.createElement(Calculator, null),
                this.state.CurrentTag == "PomodoroClock" && React.createElement(PomodoroClock, null),
                this.state.CurrentTag == "Markdown" && React.createElement(Markdown, null),
                this.state.CurrentTag == "Drums" && React.createElement(Drums, null),
                this.state.CurrentTag == "Quotes" && React.createElement(Quotes, null)
            );
        }
    }]);

    return App;
}(React.Component);

export default App;