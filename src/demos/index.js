import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import CodeMirror from '../codeMirror/codeMirror';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        console.log({props}, ReactDOMServer.renderToString(props.template))
        this.state = {
            code: props.code
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return {
            code: nextProps.code
        }
    }

    componentDidMount(){
        this.viewRender(this.props.component)
    }

    viewRender = component => {
        console.log({component})
        const Welcome = component;
        ReactDOM.render(<Welcome />, document.getElementById('codeView'));
    }

    // updateCode = newCode => {
    //     console.log({newCode}, eval(newCode))
    //     this.setState({code: newCode});
    //     this.viewRender(newCode);
    // }
    componentWillUnmount(){
        // document.getElementById('codeView').innerHTML = '';
    }
    
    render() {
        return (
            <div className="flex">
                <div id="codeView" style={{width: '50%'}}></div>
                <div id="codeEditor" style={{width: '50%'}}>
                    <CodeMirror 
                        value={this.state.code}
                        />
                </div>
            </div>
        );
    }
}

export default Demo;