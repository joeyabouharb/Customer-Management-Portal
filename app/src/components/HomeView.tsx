
import { Link } from "react-router-dom";
import CustomersView from "./CustomersView"

const HomeView = () => {
    return (
        <div>
            <div className="d-flex">
                <div className="m-2">
                    <h1>Customer Management Tool</h1>
                </div>
                <div className="ml-2 align-self-center">
                <Link to="/add" className="btn btn-primary">Add</Link>
                </div>


            </div>
        <div>
          <CustomersView/>
        </div>
      </div>
    )
}
export default HomeView;