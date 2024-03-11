import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            <Link to={`catalog`}>Catalog</Link>
          </li>
          <li>
             <Link to={`employees`}>Look at Our Employees</Link>
          </li>
        </ul>
      </nav>
    </div>
        </div>
    );
}

export default Homepage;
