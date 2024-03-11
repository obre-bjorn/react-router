import { Link } from "react-router-dom";

const Catalog = () => {

    const items = [1,2,5,7,3]
    return (
        <div>
            <h1>Catalog</h1>
            {items.map( item => <Link key={item} to={`catalog${item}`}>Item {item}</Link>)}

        </div>
    );
}

export default Catalog;
