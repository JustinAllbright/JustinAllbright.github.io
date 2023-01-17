var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drums = function (_React$Component) {
    _inherits(Drums, _React$Component);

    function Drums(props) {
        _classCallCheck(this, Drums);

        return _possibleConstructorReturn(this, (Drums.__proto__ || Object.getPrototypeOf(Drums)).call(this, props));
    }

    _createClass(Drums, [{
        key: 'render',
        value: function render() {
            var drumpad = [['Q', 'heater1'], ['W', 'heater2'], ['E', 'heater3'], ['A', 'heater4'], ['S', 'clap'], ['D', 'open-hh'], ['Z', 'kick-n-hat'], ['X', 'kick'], ['C', 'closed-hh']];
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Drum Machine'
                ),
                React.createElement(
                    'h2',
                    null,
                    'FreeCodeCamp Project'
                ),
                React.createElement(
                    'center',
                    null,
                    React.createElement(
                        'div',
                        { id: 'drum-machine' },
                        React.createElement('div', { id: 'display' }),
                        drumpad.map(function (key) {
                            return React.createElement(
                                'div',
                                { id: key, 'class': 'drum-pad' },
                                key[0]
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Drums;
}(React.Component);

export default Drums;