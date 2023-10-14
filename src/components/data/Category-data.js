import {Col, Container, FloatingLabel, Form, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {MdDelete} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'
import {FaUserEdit} from 'react-icons/fa'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from "react"
import CategoryForm from "../forms/Category-Form"
import { categoryDelete, getCategories} from "../redux/actions/CC-actions"
import CategoryEditForm from "../edit-forms/category-edit"
import { confirmDelete } from "../helpers/swal"


const CategoryData = () => {
    const [categoryData, setCategoryData] = useState('')
    const [categoryShow, setCategoryShow] = useState(false)
    const [categoryEditShow, setCategoryEditShow] = useState(false)
    const [editObj, setEditObj] = useState({})
    const dispatch = useDispatch()
    const data = useSelector((state) => {
        return state.data.data
    })

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const filteredCategories = () => {
        const result = data.categories.filter((category) => {
            return category.name.toLowerCase().includes(categoryData) 
        })
        return result
    }
    const categories = filteredCategories()

    const tokenData = jwtDecode(localStorage.getItem('token'))

   

    const handleCategoriesDelete = (id) => {
        const confirm = confirmDelete()
        if(confirm) {
            dispatch(categoryDelete(id))
        }
    }

    const handleCategoryClick = (e) => {
        e.preventDefault()
        setCategoryShow(true)
    }

    const handleCategoryEdit = (obj) => {
        setEditObj(obj)
        setCategoryEditShow(true)
    }

    const handleCategoryChange = (e) => {
        e.preventDefault()
        setCategoryData(e.target.value)
    }

    return (
        <section>
            <div>
            <Container fluid>
                <div>
                <CategoryForm
                    show={categoryShow}
                    onHide={() => setCategoryShow(false)}
                />
                <CategoryEditForm 
                    show={categoryEditShow}
                    onHide={() => setCategoryEditShow(false)} 
                    category={editObj}
                />
                </div>
                <div className="container-fluid mt-2">
                    <Form>
                        <Row className="justify-content-end">
                            <Col>
                                <FloatingLabel controlId="floatingSearch" label="Search">
                                    <Form.Control type="text" placeholder="Search" value={categoryData} onChange={handleCategoryChange} style={{width: "200px", height:"30px"}}/>
                                </FloatingLabel>
                            </Col>
                            { tokenData.role === "admin" ? <Col className="d-flex justify-content-end">
                                <button className="btn btn-sm btn-light mt-2" style={{width:"45px", height: "45px"}} onClick={handleCategoryClick}><GrAdd  style={{width: "30px", height:"30px"}}/></button>
                            </Col> :null }
                        </Row>
                    </Form>
                </div>
                    <div className="container-fluid mt-3">
                        <Table responsive className="table table-bordered table-sm table-hover align-middle text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => {
                                    return (
                                        <tr key={category._id}>
                                            <td>{index + 1}</td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td><button onClick={() => {handleCategoryEdit(category)}}> <FaUserEdit style={{width:'25px', height:'25px', color: "#FF7F50"}}/> </button>
                                            <button className="mt-1" onClick={() => {handleCategoriesDelete(category._id)}}><MdDelete style={{width:'25px', height:'25px', color: "#FF3333"}}/></button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div> 
            </Container>
            </div>
        </section>
    )
}

export default CategoryData