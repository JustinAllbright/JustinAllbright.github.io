
export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QuoteNumber: Math.floor(Math.random() * (5))
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
            this.setState({
            QuoteNumber: Math.floor(Math.random() * (5))
            })
    }

    render() {
        const QuotesList = ['he dodged the bullet like how women dodge me',
        'oligarchy? yeah, thats what they call the manager of olive garden',
        '9+4 is even',
        'khakis are the new bitcoin',
        'woah dude outside theres like a reverse sun set! ...no wait thats a sunrise FUCK']
        return(
            <center>
            <div id="quote-box">
                <p id="text">{QuotesList[this.state.QuoteNumber]}</p>
                <p id="author">-Author</p>
                <button onClick={this.increment} id="new-quote">New Quote</button>
                <a id="tweet-quote">Tweet</a>

            </div>
            </center>
        )
    }
}