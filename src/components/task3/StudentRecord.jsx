import "../../App.css"
function StudentRecord(){
     const students = [
    { name: "Omar", age: 20 , id: 1, grade: 20},
    { name: "Salma", age: 21, id: 2, grade: 18},
    { name: "Ahmed", age: 19, id: 3, grade: 15},
    { name: "Nour", age: 22, id: 4, grade: 10}
  ];
    return(
        <div className="card">
        <h2>Student Record</h2>
        {students.length > 0 ?(
            <table>
             <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>age</th>
                <th>grade</th>
              </tr>
            </thead>
            <tbody>
            {students.map((student , index)=>(
            <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>               
            </tr>
            ))}
            </tbody>
            </table>
            ):( 
               <p>No students to display.</p>)

             } </div>
     );
}
export default StudentRecord