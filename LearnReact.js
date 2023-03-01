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

class LogoSpin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 6
        }
    }

    render(){

        return (
            <div>
            <img onMouseEnter={()=> this.setState({speed: 0.3})}
             onMouseOut={()=> this.setState({speed: 6})} 
             style={{animation: `spin ${this.state.speed}s linear infinite`}} 
             className="imgheader" src="imgs/logo.png" alt="img"/>
            <h1>Julien Senopati</h1>
            </div>
        )
    }
}