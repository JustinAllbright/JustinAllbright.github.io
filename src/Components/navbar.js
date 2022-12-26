
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const listItems = ['Calculator', 'Quotes', 'PomodoroClock', 'Markdown', 'Drums'];
        return (
            <React.Fragment>
                <center>
                <ul>
                    {listItems.map((item) => {
                        return (<li style={{
                            borderColor: this.props.currentLocation == item ? "#FF0035" : ""
                        }}
                            key={item} onClick={this.props.navigationLocation}>{item}</li>)
                    })}
                </ul>
                </center>
            </React.Fragment>
        )
    }
}
export default Navbar;