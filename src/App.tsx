import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Wrapper from "./components/Wrapper.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import OneBlog from "./pages/OneBlog.tsx";

function App() {

  return (
      <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/register'} element={<Register />} />
                    <Route path={'/create'} element={<CreateBlog />} />
                    <Route path={'/oneBlog'} element={<OneBlog />} />
                </Routes>
            </BrowserRouter>
        </Wrapper>
      </>
  )
}

export default App
