import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

export default class StudentList extends Component {
constructor(props) {
super(props);
this.state = {
students: [],
};
}

componentDidMount() {
axios
.get("http://localhost:4000/students/")
.then((res) => {
this.setState({
students: res.data,
});
})
.catch((error) => {
console.log(error);
});
}

deleteStudent = (id) => {
axios
.delete("http://localhost:4000/students/delete-student/" + id)
.then((res) => {
console.log("Student successfully deleted!");
this.setState({
students: this.state.students.filter((s) => s._id !== id),
});
})
.catch((error) => {
console.log(error);
});
};

DataTable = () =>
this.state.students.map((res, i) => (
<tr key={i}>
<td>{res.name}</td>
<td>{res.email}</td>
<td>{res.rollno}</td>
<td>
<Link className="edit-link" to={"/edit-student/" + res._id}>
Edit
</Link>
<Button
size="sm"
variant="danger"
onClick={() => this.deleteStudent(res._id)}
>
Delete
</Button>
</td>
</tr>
));

render() {
return (
<div className="table-wrapper">
<Table striped bordered hover>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Roll No</th>
<th>Action</th>
</tr>
</thead>
<tbody>{this.DataTable()}</tbody>
</Table>
</div>
);
}
}

export class CreateStudent extends Component {
render() {
return (
<div>
<p>React Create Student Component!</p>
</div>
);
}
}

export class StudentTableRow extends Component {
render() {
return (
<tr>
<td>{this.props.obj.name}</td>
<td>{this.props.obj.email}</td>
<td>{this.props.obj.rollno}</td>
<td>
<Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
Edit
</Link>
<Button size="sm" variant="danger" onClick={this.props.onDelete}>
Delete
</Button>
</td>
</tr>
);
}
}