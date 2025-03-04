// import React from "react";
// import Comp1  from "./Components/Comp1";

// function App(){
//   return(
//     <div>
//       {/* <Comp1 value="React is Awesom">
//       <h1>Today is Monday</h1>
//       <p>Good Morning ,Everyone </p>
//       </Comp1> */}

//       <Comp1 value="React is Awesome"></Comp1>
//       <Comp1 children="Hello">
//       <h1>Today is Monday</h1>
//       <p>Good Morning ,Everyone </p>
//       </Comp1>

//     </div>
//   )
// }
// export default App;

import React from "react";
import PasswaordShowHide from "./Components/PasswordShowHide";
import PasswordInput from  "./Components/PasswordInput";

function App(){
  return(
    <div>
      {/* <PasswaordShowHide/> */}
      <PasswordInput/>
      
    </div>
  )
}
export default App;