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
    
    render() {
        return (
            <div className="flex row-full">
                <div id="codeView" style={{width: '50%', height: '100%'}}></div>
                <div id="codeEditor" style={{width: '50%', height: '100%'}}>
                    <CodeMirror 
                        value={this.state.code}
                        />
                </div>
            </div>
        );
    }
}

export default Demo;