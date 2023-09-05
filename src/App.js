 
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const pageSize = 5;
  const countryName = 'in';
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={2.5} color='#f11946' progress={progress} />
        <Routes>
          <Route path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country={countryName} category='general' />} />
          <Route path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country={countryName} category='business' />} />
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country={countryName} category='entertainment' />} />
          <Route path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country={countryName} category='health' />} />
          <Route path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country={countryName} category='science' />} />
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country={countryName} category='sports' />} />
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country={countryName} category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}








// import './App.css';
// import React, { Component } from 'react';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   pageSize = 5;
   
//   countryName = 'in';
//   state = {
//     progress: 0,
//   };

//   setProgress = (progress) => {
//     this.setState({ progress: progress });
//   };

//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar />
//           <LoadingBar height={2.5} color='#f11946' progress={this.state.progress} />
//           <Routes>
//             <Route path='/' element={<News  setProgress= {this.setProgress}      key='general' pageSize={this.pageSize}  country={this.countryName} category='general' />}></Route>
//             <Route path='/business' element={<News  setProgress= {this.setProgress}    key='business' pageSize={this.pageSize}  country={this.countryName} category='business' />}></Route>
//             <Route path='/entertainment' element={<News  setProgress= {this.setProgress}    key='entertainment' pageSize={this.pageSize}  country={this.countryName} category='entertainment' />}></Route>
//             <Route path='/health' element={<News  setProgress= {this.setProgress}    key='health' pageSize={this.pageSize}  country={this.countryName} category='health' />}></Route>
//             <Route path='/science' element={<News  setProgress= {this.setProgress}    key='science' pageSize={this.pageSize}  country={this.countryName} category='science' />}></Route>
//             <Route path='/sports' element={<News  setProgress= {this.setProgress}    key='sports' pageSize={this.pageSize}  country={this.countryName} category='sports' />}></Route>
//             <Route path='/technology' element={<News  setProgress= {this.setProgress}    key='technology' pageSize={this.pageSize}  country={this.countryName} category='technology' />}></Route>
  
            
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
