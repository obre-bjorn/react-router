import { Link, Outlet } from "react-router-dom";



const Catalog = () => {

    const items = [1,2,5,7,3]

    return (
        <div className="container">
            <h1>Catalog</h1>
            {items.map( item => 
                <Link key={item} to={item}>Item {item}</Link>
            )}
            <Outlet />
        </div>
    );
}

export default Catalog;
