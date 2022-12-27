import Navbar from "./navbar.js";
import PomodoroClock from "./Projects/PomodoroClock/PomodoroClock.js";
import Quotes from "./Projects/Quotes/quotes.js"
import Calculator from "./Projects/Calculator/Calculator.js"
import Drums from "./Projects/Drums/drums.js"
import Markdown from "./Projects/Markdown/markdown.js"
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentTag: ""
        }
        this.navigationLocation = this.navigationLocation.bind(this);
    }

    navigationLocation(event) {
        this.setState({
            CurrentTag: event.target.innerHTML
        })
    }
    render() {
        return(
            <React.Fragment>
            <Navbar navigationLocation = {this.navigationLocation} currentLocation = {this.state.CurrentTag}/>
            {this.state.CurrentTag == "" && 
            <center><p>These are the projects for the FreeCodeCamp Front-end Development certification.</p></center>
            }
            {this.state.CurrentTag == "Calculator" && <Calculator/>}
            {this.state.CurrentTag == "PomodoroClock" && <PomodoroClock/>}
            {this.state.CurrentTag == "Markdown" && <Markdown/>}
            {this.state.CurrentTag == "Drums" && <Drums/>}
            {this.state.CurrentTag == "Quotes" && <Quotes/>}
            </React.Fragment>
        )
    }
}
export default App;