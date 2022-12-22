
class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const listItems = ['Calculator', 'Quotes', 'PomodoroClock', 'Markdown', 'Drums'];
        return (
            <React.Fragment>
                <ul>
                    {listItems.map((item) => {
                        return (<li key={item} onClick={this.props.navigationLocation}>{item}</li>)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
export default Navbar;