
import { Link } from "react-router-dom";
import { useObservable } from "../services/api-service/clientService";
import CustomersView from "./CustomersView"

const HomeView = () => {
    const { change: customerChange, next: customerNext } = useObservable();
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
                <CustomersView  customerChange={customerChange} customerNext={customerNext} />
            </div>
        </div>
    )
}
export default HomeView;