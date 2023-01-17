
class Drums extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const drumpad = [
            ['Q', 'heater1'],
            ['W', 'heater2'],
            ['E', 'heater3'],
            ['A', 'heater4'],
            ['S', 'clap'],
            ['D', 'open-hh'],
            ['Z', 'kick-n-hat'],
            ['X', 'kick'],
            ['C', 'closed-hh']
        ]
        return(
            
            <div>
                <h1>Drum Machine</h1>
                <h2>FreeCodeCamp Project</h2>
                <center>
                <div id="drum-machine">
                    <div id="display"></div>
                    {drumpad.map((key) => {
                        return (<div id={key} class="drum-pad">
                            {key[0]}
                            </div>)
                    }
                    )}
            </div>
            </center>

            </div>
        )
    }
}
export default Drums;