class Markdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: ""
        }
    }
    updateText(markdown) {
        this.setState(
            {markdown}
        )
    }
    render() {
        return(
            <div id="Markdown-Previewer">
                <h1>Markdown-Previewer</h1>
                <h2>FreeCodeCamp Project</h2>
                <div>
                    <div id="input">
                        <textarea
                        value = {this.state.markdown}
                        onChange ={ (x) => {
                            this.updateText(x.target.value)
                        }}
                        >

                        </textarea>
                    </div>
                    <div id="output"
                    dangerouslySetInnerHTML={{
                        __html: marked.parse(this.state.markdown)
                    }}
                    >

                    </div>
                </div>

            </div>
        )
    }
}
export default Markdown;