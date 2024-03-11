import { Link, Outlet } from "react-router-dom";


const Employees = () => {
    const employees = [
        {id:0,name:'Chris'},
        {id:1,name:'Brian'},
        {id:2,name:'Tom'},
        {id:3,name:'Jack'},

    ]


    return (
        <div>
         <div className="employees">
            {employees.map(employee => (<div key={employee.id}><Link  to={`employee${employee.id}`}>{employee.name}</Link> <br/> </div>))}
         </div>
         <div className="output">
            <Outlet/>
         </div>
        </div>
    );
}

export default Employees;
