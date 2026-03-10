// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./component/Directives/Header.jsx";
// import Homepage from "./Pages/Homepage.jsx";
// import "./App.css";
// import Footer from "./component/Directives/Footer.jsx";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />

//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           {/* Add more routes here as your app grows */}
//         </Routes>

//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;






import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Directives/Header.jsx'
import Homepage from './Pages/Homepage.jsx';
import Login from "./Login/Login.jsx";
import Signup from "./Login/Signup.jsx";
import './App.css';
import Footer from "./component/Directives/Footer.jsx";

function App() {
  return (
    <BrowserRouter>

      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  );
}

export default App;