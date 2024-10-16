import React, {Component} from 'react';

class ErrorBounding extends Component<{children: any}, {hasError: any}> {
    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: any) {
        console.log("getDerivedStateFromError", error)

        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log("ddddddd", error, "ddddd2")
    }

    render() {
        if(this.state.hasError) {
            return <div>222</div>
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default ErrorBounding;
