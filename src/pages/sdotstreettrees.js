import React from 'react'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONData from "../data/sdotstreettrees.json"

// const jsondata = [
//     {
//       "TreeType": "Large Columnar Trees",
//       "ScientificName": "Acer nigrum ‘Green Column’",
//       "CommonName": "Green Column Black Sugar Maple",
//     },
//     {
//       "TreeType": "Large Columnar Trees",
//       "ScientificName": "Fraxinus americana 'Empire'",
//       "CommonName": "Empire Ash",
//     },
//     {
//       "TreeType": "Large Columnar Trees",
//       "ScientificName": "Ginko biloba ‘Princeton Sentry’",
//       "CommonName": "Princeton Sentry Ginkgo",
//     }
// ]

// markup
const StreetTrees = () => {
    console.log("in streettrees")
    return (
      <>
            <section className="Product">
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
            </section>
      </>
    )
  }
  
export default StreetTrees