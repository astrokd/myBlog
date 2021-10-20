import React from 'react'
import { Table } from 'react-bootstrap'
// import { graphql } from "gatsby"

const jsondata = [
    {
      "TreeType": "Large Columnar Trees",
      "ScientificName": "Acer nigrum ‘Green Column’",
      "CommonName": "Green Column Black Sugar Maple",
    },
    {
      "TreeType": "Large Columnar Trees",
      "ScientificName": "Fraxinus americana 'Empire'",
      "CommonName": "Empire Ash",
    },
    {
      "TreeType": "Large Columnar Trees",
      "ScientificName": "Ginko biloba ‘Princeton Sentry’",
      "CommonName": "Princeton Sentry Ginkgo",
    }
]

// markup
const StreetTrees = () => {
    console.log("in streettrees")
    return (
      <>
            <section className="Product">
                <Table>
                    <thead>
                        <tr>
                            <th>Tree Type</th>
                            <th>Scientific Name</th>
                            <th>Common Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsondata.map(data => (
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