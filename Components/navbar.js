var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));
    }

    _createClass(Navbar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var listItems = ['Calculator', 'Quotes', 'PomodoroClock', 'Markdown', 'Drums'];
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'center',
                    null,
                    React.createElement(
                        'ul',
                        null,
                        listItems.map(function (item) {
                            return React.createElement(
                                'li',
                                { style: {
                                        borderColor: _this2.props.currentLocation == item ? "#FF0035" : ""
                                    },
                                    key: item, onClick: _this2.props.navigationLocation },
                                item
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

export default Navbar;