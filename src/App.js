import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'

import * as serviceWorker from './serviceWorker'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-student'} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-student'} className="nav-link">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

serviceWorker.unregister();

export default App;
