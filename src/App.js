
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from "./Services";

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="mb-4">Welcome to the Home Page</h2>
      <div className="alert alert-info w-75 mx-auto">This is a demo React app with navigation and downloads.</div>
      <p>
        <a className="btn btn-primary m-2" href="https://react.dev" target="_blank" rel="noreferrer">Go to React Docs</a>
      </p>
      <p>
  <a className="btn btn-success m-2" href="/files/guide.pdf" download>Download Guide (PDF)</a>
  <a className="btn btn-secondary m-2" href="/files/manual.docx" download>Download Manual (DOCX)</a>
      </p>
      <p>
        <a className="btn btn-outline-info m-2" href="#section1">Jump to Section 1</a>
        <a className="btn btn-outline-info m-2" href="#section2">Jump to Section 2</a>
      </p>
      <div style={{ marginTop: "200px" }} id="section1" className="alert alert-warning w-75 mx-auto">
        <h3>Section 1</h3>
        <p>This is a specific point in the page.</p>
      </div>
      <div style={{ marginTop: "200px" }} id="section2" className="alert alert-success w-75 mx-auto">
        <h3>Section 2</h3>
        <p>This is another section you can jump to.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My React Lab</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}