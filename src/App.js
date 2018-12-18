import React,  {Component }from 'react'; 
import './App.css'; 
import Welcome from "./Welcome";

class App extends Component {
render() {
return ( < div className = "App" >  < h2 > 欢迎来到菜鸟教程 </h2 >  < p className = "App-intro" > 
你可以在 < code > src/App.js </code > 文件中修改。 </p >  
<Welcome/>
</div > 
); 
}
}



export default App; 
