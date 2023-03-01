//React below for jolan.dev/react.html
class LearnReact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickMe: false
        }
    }

    render(){

        if(this.state.clickMe){
            return (
            <h2>Powered by React.js</h2>
            )
        }

        return (
            <button onClick={()=> this.setState({clickMe: true})}>Click Me!</button>

        )
    }
}