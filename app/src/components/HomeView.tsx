
import { Link } from "react-router-dom";
import { CustomerClientProps } from "../services/api-service/clientService";
import CustomersView from "./CustomersView"

const HomeView = ({ UpdateCustomer, DeleteCustomer, AddCustomer, GetCustomer, customerChange, customerNext }: CustomerClientProps) => {
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
                <CustomersView
                    UpdateCustomer={UpdateCustomer}
                    DeleteCustomer={DeleteCustomer}
                    AddCustomer={AddCustomer}
                    GetCustomer={GetCustomer}
                    customerChange={customerChange}
                    customerNext={customerNext}
                />
            </div>
        </div>
    )
}
export default HomeView;