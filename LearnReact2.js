//React below for jolan.dev/react2.html

//toggle left or center justification of most text. some CSS classes like h1's and other headers have their own text align CSS which overrides this.
class ChangeJust extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isChanged: !state.isChanged
        }));
    }
  
    render() {
        const { isChanged } = this.state;
        
        return (
        <div>
            <button onClick={this.handleClick}>
                {isChanged ? "Center-Justification" : "Left-Justification"}
            </button>
            <style>{`body {text-align: ${isChanged ? "left" : "center"};}`}
            </style>
        </div>
        );
    }
}

//toggle drop shadow on all text.
class ChangeShadow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.setState(state => ({
            isChanged: !state.isChanged
        }));
    }

    render() {
        const { isChanged } = this.state;
        
        return (
        <div>
            <button onClick={this.handleClick}>
                {isChanged ? "Drop Shadow On" : "Drop Shadow Off"}
            </button>
            <style>{`body {text-shadow: ${isChanged ? "none" : "2px 2px 3px black"};}`}
            </style>
        </div>
        );
    }
}

//toggle dark mode / background color.
class ChangeBackColour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        //screwed around for like 3 hours and looks like using some good ol' vanilla JS is the best way to do it here.

        const { isChanged } = this.state;

        if (isChanged) {
            document.body.style.background = "linear-gradient(to bottom, #614385, #516395)";

        } else {
            document.body.style.background = "#313b4b"
        }

        this.setState(state => ({
            isChanged: !state.isChanged
        }));
    }

    render() {
        const { isChanged } = this.state;
        
        return ( //added style line for changing highlights when dark mode is on.
        <div>
            <button onClick={this.handleClick}>
                {isChanged ? "Dark Mode Off" : "Dark Mode On"}
            </button>
            <style>
                {`mark {background-color: ${isChanged ? "#FFC57D" : "black"};
                    color: ${isChanged ? "black" : "white"};`}
            </style>
        </div>
        );
    }
}


//original toggle dark mode / background color component. wrote new one following conventions of other components since this one puts inlne CSS inside the body tag instead of the button div.
/*class ChangeBackColour extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChanged: false
      };
    }
  
    handleColorChange = () => {
      const { isChanged } = this.state;
      if (!isChanged) {
        document.body.style.background = '#313b4b';
      } else {
        document.body.style.background = 'linear-gradient(to bottom, #614385, #516395)';
      }
      this.setState({ isChanged: !isChanged });
    }
  
    render() {
      const { isChanged } = this.state;
      return (
        <div>
          <button onClick={this.handleColorChange}>
            {isChanged ? 'Dark Mode Off' : 'Dark Mode On'}
          </button>
        </div>
      );
    }
  }
  */

  /*
  //Attempt #2. follows structure and conventions of earlier components but doesnt work. inline CSS for body background doesnt work... And i can't figure out why.
  //My best guess is because the external CSS file has the linear gradient alrady defined but then the other components have their elements defined the same way.
  //I don't  know, man. Javascript makes me wanna rip my hair out.
  class ChangeBackColour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChanged: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        //screwed aroudn for liek 3 hours and looks like using some good ol' vanilla JS is the best way to do it here.
        this.setState(state => ({
            isChanged: !state.isChanged
        }));
    }

    render() {
        const { isChanged } = this.state;
        
        return (
        <div>
            <button onClick={this.handleClick}>
                {isChanged ? "Dark Mode Off" : "Dark Mode On"}
            </button>
            <style>{`body {background-image: ${isChanged ? "#313b4b" : "linear-gradient(to bottom, #614385, #516395)"};}`}</style> //<<<<<<<<<<<<< WHY DOES THIS LINE NOT WORK?
        </div>
        );
    }
}
*/