import {Container, Row, Col, Form, FloatingLabel} from 'react-bootstrap'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
//import { Link } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FreeTrail = () => {
    //const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [companyWebsite, setCompanyWebsite] = useState('')
    const [companyAddress, setCompanyAddress] = useState({
      place: '',
      city: '',
      state:'',
      pincode: '',
      landmark:''
    })
    //const {updater} = useContext(UserContext)
    //console.log(updater)

    const navigate = useNavigate()

    const handleMobileChange = (value) => {
      setMobile(value)
    }
    const handleChange = (e) => {
      if(e.target.name === "username") {
        setUsername(e.target.value)
      } else if(e.target.name === "email") {
        setEmail(e.target.value)
      } else if(e.target.name === "mobile") {
        setMobile(e.target.value)
      } else if(e.target.name === "password") {
        setPassword(e.target.value)
      } else if(e.target.name === 'companyname'){
        setCompanyName(e.target.value)
      } else if(e.target.name === 'companywebsite') {
          setCompanyWebsite(e.target.value)
      } else if(e.target.name === 'place') {
          setCompanyAddress({...companyAddress, place: e.target.value})
      } else if(e.target.name === 'city') {
          setCompanyAddress({...companyAddress, city: e.target.value})
      } else if(e.target.name === 'state') {
          setCompanyAddress({...companyAddress, state: e.target.value})
      } else if(e.target.name === 'pincode') {
          setCompanyAddress({...companyAddress, pincode: e.target.value})
      } else if(e.target.name === 'landmark') {
          setCompanyAddress({...companyAddress, landmark: e.target.value})
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
        const formData = {
          username,
          email,
          mobile,
          password, companyName, companyWebsite, companyAddress
        }
        const loader = async () => {
          try{
            const response = await axios.post('https://falt.onrender.com/api/user/register', formData)
            console.log(response)
            if(response.data.hasOwnProperty("user")) {
              alert('successfully registered with us')
              navigate("/login")  
            } else {
              alert(response.data.error ? response.data.error : "something went wrong")
            }
          } catch(e) {
            alert(e.message)
          }
        }
        loader()
    }

    return (
        <div className='d-flex justify-content-center'>
          <Container fluid className="border border-1 border-primary rounded-2 mt-3 bg-gradient-dark">
          <h3 className="text-center text-success text-decoration-underline mt-3 ">Register with us</h3><br />
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingUsername"
                  label="username"
                  className="mb-2"
                >
                <Form.Control type="text" 
                    placeholder="enter your username" 
                    name="username" 
                    defaultValue={username} 
                    onChange={handleChange} 
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter username.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>  
                <FloatingLabel controlId="floatingEmail" label="Email">
                <Form.Control type="text" 
                    placeholder="enter your email"
                    name="email"
                    defaultValue={email} 
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter username.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
          </Row>
          <Row>
            <Col>
              <PhoneInput
                country={"in"}
                placeholder="phone number"
                value={mobile}
                onChange={handleMobileChange}
              />     
            </Col>
            <Col>  
              <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password"
                   placeholder="enter your password"
                   name="password"
                   defaultValue={password}
                   onChange={handleChange}
                   required />
              <Form.Control.Feedback> Looks good </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                  Please enter a valid password.
              </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <h5 className="text-info">Company Details</h5>
          <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingCName"
                  label="company name"
                  className="mb-2"
                >
                <Form.Control type="text" 
                    placeholder="enter company name"
                    name="companyname"
                    defaultValue={companyName}
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter company name.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>  
                <FloatingLabel controlId="floatingCWebsite" label="company website">
                <Form.Control type="text" 
                    placeholder="enter company website"
                    name="companywebsite"
                    defaultValue={companyWebsite}
                    onChange={handleChange}
                    required  />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter company website.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
          </Row>
          <h5 className="text-info"> Company Address </h5>
          <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingPlace"
                  label="place"
                  className="mb-2"
                >
                <Form.Control type="text" 
                    placeholder="enter a valid place"
                    name="place"
                    defaultValue={companyAddress.place}
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter a place.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>  
                <FloatingLabel controlId="floatingLandmark" label="landmark">
                <Form.Control type="text" 
                    placeholder="enter landmark"
                    name="landmark"
                    defaultValue={companyAddress.landmark}
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter a landmark.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
          </Row>
          <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingCity"
                  label="City"
                  className="mb-2"
                >
                <Form.Control type="text" 
                    placeholder="enter a valid City"
                    name="city"
                    defaultValue={companyAddress.city}
                    onChange={handleChange} 
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter a city.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>  
                <FloatingLabel controlId="floatingState" label="State">
                <Form.Control type="text" 
                    placeholder="enter a valid State"
                    name="state"
                    defaultValue={companyAddress.state}
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter a State.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
              <Col>  
                <FloatingLabel controlId="floatingPincode" label="pincode">
                <Form.Control type="text" 
                    placeholder="enter a valid pincode"
                    name="pincode"
                    defaultValue={companyAddress.pincode}
                    onChange={handleChange}
                    required />
                <Form.Control.Feedback> Looks good </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    Please enter a valid pincode.
                </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
          </Row>
          <Row className="mt-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            style={{marginLeft: "40%", marginBottom: "4px"}}
              
          />
          </Row>
          <div className="d-grid gap-2 col-2 mx-auto">
            <button type="submit" className="btn btn-outline-primary btn-sm">Submit</button>
          </div>
            <p style={{marginLeft: "40%", marginBottom: "4px"}}>Already have an account? <a href="/login">SignIn</a></p>
          </Form>
          </Container>
        </div>
    )
}

export default FreeTrail