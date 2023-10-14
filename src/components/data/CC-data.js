import { Col, Row } from "react-bootstrap"
import ClientData from "./Client-data"
import CategoryData from "./Category-data"

const CCData = () => {
    return (
        <section>
            <div>
                <Row>
                    <Col>
                        <ClientData/>
                    </Col>
                    <Col>
                        <CategoryData />
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default CCData