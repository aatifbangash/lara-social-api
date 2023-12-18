import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home.jsx"
import Layout from "./pages/layout/Layout.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
const NoMatch = () => <h2>404 not found.</h2>;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </Router>
    )
}

export default App
