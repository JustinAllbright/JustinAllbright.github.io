
export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuoteNumber: Math.floor(Math.random() * (6))
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
            this.setState({
            QuoteNumber: Math.floor(Math.random() * (6))
            })
    }

    render() {
        const QuotesList = [['he dodged the bullet like how women dodge me', 'Christian Huff'],
        ['oligarchy? yeah, thats what they call the manager of olive garden', 'Christian Huff'],
        ['9+4 is even', 'Jeff'],
        ['khakis are the new bitcoin', 'Christian Huff'],
        ['woah dude outside theres like a reverse sun set! ...no wait thats a sunrise FUCK', "Clayton Bonigut"],
        ['i cant really snack and eat', 'Vinny Gefre']]

        return(
            <center>
            <div id="quote-box"
            style={{
                height: 10 + "%"
            }}>
                <h1>Random Quote Generator</h1>
                <h2>FreeCodeCamp Project</h2>
                <div>
                <p id="text">{QuotesList[this.state.QuoteNumber][0]}</p>
                <p id="author">-{QuotesList[this.state.QuoteNumber][1]}</p>
                </div>
                <button onClick={this.increment} id="new-quote">Next Quote</button>
                <a id= "tweet-quote" href={"http://twitter.com/intent/tweet?text=" +
                 QuotesList[this.state.QuoteNumber][0] + " -" + QuotesList[this.state.QuoteNumber][1]
                 } data-show-count="false">
                Tweet
                </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                
            </div>
            </center>
        )
    }
}