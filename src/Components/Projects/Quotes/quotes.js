
export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="quote-box">
                <p id="text">text</p>
                <p id="author">Author</p>
                <button id="new-quote">New Quote</button>
            </div>
        )
    }
}