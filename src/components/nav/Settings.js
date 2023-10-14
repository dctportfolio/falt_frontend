import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Settings = () => {
    return (
        <section>
            <div className="container mt-1">
                <Row className="container mt-2">
                    <Col className="ms-auto">
                        ResetPassword
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-secondary" style={{width: "200px"}} as={Link} to="/reset-password">ResetPassword</Button>
                    </Col>
                </Row>
                <Row className="container mt-2">
                    <Col className="ms-auto">
                        UpdateProfile
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-secondary" style={{width: "200px"}}>UpdateProfile</Button>
                    </Col>
                </Row>
                <Row className="container mt-2">
                    <Col className="ms-auto">
                        updateCompanyDetails
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-secondary" style={{width: "200px"}}>UpdateCompany</Button>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Settings