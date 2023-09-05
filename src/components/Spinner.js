
import React   from 'react';
import loading from './loading.gif';

 const Spinner  = () => {
   
    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" style={{width: "3rem"}} />
      </div>
    )
   
}

export default Spinner



// Class base component
// import React, { Component } from 'react';
// import loading from './loading.gif';

// export class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img className="my-3" src={loading} alt="loading" style={{width: "3rem"}} />
//       </div>
//     )
//   }
// }

// export default Spinner

