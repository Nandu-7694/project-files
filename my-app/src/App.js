
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         <h1>HEllO!</h1>
//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import {INCREMENT,DECREMENT} from './actions'
import { connect } from 'react-redux';
function App({local_Variable,INCREMENT,DECREMENT}) {
  return (
    <div >
            <h2>HELLO WORLD</h2>
          <h1>{local_Variable}</h1>
         <button onClick={INCREMENT}>Increment</button>
          <button onClick={DECREMENT}>Increment</button>
       </div>
  );
}

// export default App;

// import './App.css';
// import React from 'react';
// import {connect} from 'react-redux';
// import {INCREMENT,DECREMENT} from './actions'
// const App=({local_Variable,INCREMENT,DECREMENT})=> {
//   return (
//     <div >
//         <h2>HELLO WORLD</h2>
//         <h1>{local_Variable}</h1>
//        <button onClick={INCREMENT}>Increment</button>
//        <button onClick={DECREMENT}>Increment</button>
//     </div>
//   );
// }

const mapStateToProps = (state)=>({
      local_Variable:state
})

export default connect(mapStateToProps,{INCREMENT,DECREMENT})(App);

