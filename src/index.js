import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);







// /* Add basic styling for NavLinks */
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };

// function NavBar() {
//   return (
//     <div>
//       <NavLink
//       to="/"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue"
//       }}
//       >
//         Home
//         </NavLink>
//         <NavLink 
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue"
//         }}
//         >
//           About
//         </NavLink>
//         <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: "darkblue"
//         }}
//         >
//           Login
//         </NavLink>
//     </div>
//   )
// }


// function Home() {
//   return <h1>Home!</h1> 
// }

// function About() {
//   return <h1>This is my about component!</h1>
// }

// function Login() {
//   return (
//     <div> 
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username"/>
//           </div>
//           <div>
//             <input type="password" name="password" placeholder="Password"/>
//           </div>
//           <input type="submit" value="submit"/>
//       </form>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Switch>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

