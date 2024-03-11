import { useParams } from "react-router-dom"


export default function Employee() {
    const {empId} = useParams();


  return (
    <div>
        <h1>Employee.No: {empId}</h1>
        {/* <h3>Employee Name: {name}</h3> */}
    </div>
  )
}
