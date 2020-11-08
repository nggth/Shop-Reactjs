class Hello extends React.Component {
    constructor(props) {
        super(props);
    }
     
    render() {
        return(
            <div>
                Hello {props}
            </div>
        )
    }
}


const Hello = ({name}) => (<div>Hello, {name}!</div>);