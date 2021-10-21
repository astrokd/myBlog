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
            <h2>Seattle Department of Transportation – Approved Street Tree List</h2>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Tree Type</th>
                            <th>Scientific & Common Name</th>
                            <th>Mature<br /> Height</th>
                            <th>Spread</th>
                            <th>Under<br />Wires?</th>
                            <th>Min Strip<br />Width</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSONData.map(data => (
                            <tr key={data.ScientificName}>
                                <td>{data.TreeType}</td>
                                <td>{data.ScientificName} <br />{data.CommonName}</td>
                                <td>{data.MatureHeight}</td>
                                <td>{data.Spread}</td>
                                <td>{data.UnderWires}</td>
                                <td>{data.MinStripWidth}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </Layout>
      </>
    )
  }
  
export default StreetTrees