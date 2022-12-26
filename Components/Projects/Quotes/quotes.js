var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quotes = function (_React$Component) {
    _inherits(Quotes, _React$Component);

    function Quotes(props) {
        _classCallCheck(this, Quotes);

        var _this = _possibleConstructorReturn(this, (Quotes.__proto__ || Object.getPrototypeOf(Quotes)).call(this, props));

        _this.state = {
            QuoteNumber: Math.floor(Math.random() * 6)
        };
        _this.increment = _this.increment.bind(_this);
        return _this;
    }

    _createClass(Quotes, [{
        key: 'increment',
        value: function increment() {
            this.setState({
                QuoteNumber: Math.floor(Math.random() * 6)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var QuotesList = [['he dodged the bullet like how women dodge me', 'Christian Huff'], ['oligarchy? yeah, thats what they call the manager of olive garden', 'Christian Huff'], ['9+4 is even', 'Jeff'], ['khakis are the new bitcoin', 'Christian Huff'], ['woah dude outside theres like a reverse sun set! ...no wait thats a sunrise FUCK', "Clayton Bonigut"], ['i cant really snack and eat', 'Vinny Gefre']];

            return React.createElement(
                'center',
                null,
                React.createElement(
                    'div',
                    { id: 'quote-box',
                        style: {
                            height: 10 + "%"
                        } },
                    React.createElement(
                        'h1',
                        null,
                        'Random Quote Generator'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        'FreeCodeCamp Project'
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'p',
                            { id: 'text' },
                            QuotesList[this.state.QuoteNumber][0]
                        ),
                        React.createElement(
                            'p',
                            { id: 'author' },
                            '-',
                            QuotesList[this.state.QuoteNumber][1]
                        )
                    ),
                    React.createElement(
                        'button',
                        { onClick: this.increment, id: 'new-quote' },
                        'Next Quote'
                    ),
                    React.createElement(
                        'a',
                        { id: 'tweet-quote' },
                        'Tweet'
                    )
                )
            );
        }
    }]);

    return Quotes;
}(React.Component);

export default Quotes;