import React from 'react';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');

class MyCodeMirror extends React.Component {
    render () {
        return (
            <CodeMirror 
                value={this.props.value}
                options={{
                    mode: this.props.mode || 'javascript',
                    lineNumbers: true
                }}
                onChange={this.props.onChange}
                />
        )
    }
}

export default MyCodeMirror;