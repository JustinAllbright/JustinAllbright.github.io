
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(event) {
        this.setState({
            CurrentTag: event.li.getAttribute('keyname')
        })
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.handleClick}>Calculator</li>
                    <li onClick={this.handleClick}>Quotes</li>
                    <li onClick={this.handleClick}>Pomodoro Clock</li>
                    <li onClick={this.handleClick}>Markdown</li>
                    <li onClick={this.handleClick}>Drums</li>
                </ul>
            </div>
        )
    }
}
export default Navbar;