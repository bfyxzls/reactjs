import React from 'react'; 

class Welcome extends React.Component {
    constructor() {
        super();
        this.props = {
          value: null,
        };
      }
    
render() {
return (
<h1> Hello, {this.props.value} </h1 >

);
}
}
export default Welcome; 
