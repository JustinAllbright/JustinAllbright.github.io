import Navbar from "./navbar.js";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentTag: "None"
        }
    }
    render() {
        return(
            <div>
            <Navbar/>
            <p>Current selected tag: {this.state.CurrentTag}</p>
            </div>
        )
    }
}
export default App;