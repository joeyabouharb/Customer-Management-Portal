import { Form } from "react-bootstrap";

const CustomerFormView = ({details, onChangeEvent}: CustomerFormProps) => {
    return (
        <>
            <input type="hidden" readOnly value={details.customerId}/>
            <Form.Group>
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="John"
                    required minLength={1} maxLength={50} pattern="\w+"
                    value={details.firstName}
                    onChange={onChangeEvent}
                    id="firstName"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Surname:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Doe"
                    required minLength={1} maxLength={50} pattern="\w+"
                    value={details.surname}
                    onChange={onChangeEvent}
                    id="surname"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                    type="text" placeholder="1 test street belmore" required minLength={1} maxLength={100}
                    pattern="[\w\s]+"
                    onChange={onChangeEvent}
                    id="homeAddress"
                    value={details.homeAddress}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email" required minLength={1} maxLength={100} pattern="[^\s]+@.+[^\s]*"
                    value={details.email}
                    id="email"
                    onChange={onChangeEvent}
                />
            </Form.Group>
        </>
    )
}

export default CustomerFormView;