var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_React$Component) {
    _inherits(Markdown, _React$Component);

    function Markdown(props) {
        _classCallCheck(this, Markdown);

        var _this = _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, props));

        _this.state = {
            markdown: ""
        };
        return _this;
    }

    _createClass(Markdown, [{
        key: "updateText",
        value: function updateText(markdown) {
            this.setState({ markdown: markdown });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { id: "Markdown-Previewer" },
                React.createElement(
                    "h1",
                    null,
                    "Markdown-Previewer"
                ),
                React.createElement(
                    "h2",
                    null,
                    "FreeCodeCamp Project"
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "div",
                        { id: "input" },
                        React.createElement("textarea", {
                            value: this.state.markdown,
                            onChange: function onChange(x) {
                                _this2.updateText(x.target.value);
                            }
                        })
                    ),
                    React.createElement("div", { id: "output",
                        dangerouslySetInnerHTML: {
                            __html: marked.parse(this.state.markdown)
                        }
                    })
                )
            );
        }
    }]);

    return Markdown;
}(React.Component);

export default Markdown;