
import './App.css';
import { createGlobalStyle } from 'styled-components';
import {NavBar} from "./Components/NavBar";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
}

*,
*::before,
*::after{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color:inherit;
}

body{
  margin:0;
  background-color: #f0f0f0;
  font-family: Roboto;
  font-size:20px;
  color:black;
}

ul{
  list-style:none;
  padding:0;
  margin:0;
}
h2,h3,h1{
  padding:0;
  margin:0;
  font-family: Pacifico;
}

p{
  margin:0;
  padding:0;
}

img{
  max-width: 100%;
  height:auto;
}
button{
  cursor:pointer;
}
`;

function App() {
  return (
      <>
          <GlobalStyle/>
          <NavBar/>
          <div className="App">

          </div>
      </>

  );
}

export default App;
