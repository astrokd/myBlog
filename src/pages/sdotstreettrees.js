import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONData from "../data/sdotstreettrees.json"
import Layout from '../components/layout'

// markup
const StreetTrees = () => {
    console.log("in streettrees")
    return (
      <>
        <Layout activelink="StreetTrees">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Tree Type</th>
                            <th>Scientific Name</th>
                            <th>Common Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSONData.map(data => (
                            <tr key={data.ScientificName}>
                                <td>{data.TreeType}</td>
                                <td>{data.ScientificName}</td>
                                <td>{data.CommonName}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </Layout>
      </>
    )
  }
  
export default StreetTrees