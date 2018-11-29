import React from 'react';

export class LifeCircle extends React.Component {
    // 倒计时
    
    // constructor(props)
    // 1. Initializing state
    constructor(props) {
        // 初始化：默认 60s
        console.log('--------------------------- constructor -----------------------------');
        super(props);
        this.state= {
            currentSecond: 60
        }
    };

    // componentDidMount()
    // 2. Fetching external data
    // 3. Adding event listeners (or subscriptions)
    componentDidMount() {
        console.log('--------------------------- componentDidMount -----------------------------');
    }

    // static getDerivedStateFromProps(nextProps, prevState)
    // 4. Updating state based on props
    // 7. Fetching external data when props change
    static getDerivedStateFromProps(nextProps, prevState) {
       console.log('--------------------------- getDerivedStateFromProps -----------------------------');
    }

    // shouldComponentUpdate(nextProps, nextState)
    shouldComponentUpdate(nextProps, nextState) {
        console.log('--------------------------- shouldComponentUpdate -----------------------------');
    }

    //  Reading DOM properties before an update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('--------------------------- getSnapshotBeforeUpdate -----------------------------');
    }

    // componentDidUpdate(prevProps, prevState, snapshot)
    // 5. Invoking external callbacks
	// 6. Side effects on props change
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('--------------------------- componentDidUpdate -----------------------------');
    }

    render() {
      return <h1>Hello, class!</h1>;
    }
}