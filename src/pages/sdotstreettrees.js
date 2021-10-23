import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONData from "../data/sdotstreettrees.json"
import Layout from '../components/layout'

import { treeName, treeComment, svgStyle } from './sdotst.module.css'
// import styles from './sdotst.module.css'

import Leaf from '../images/leaf.svg';
import Flower from '../images/flower.svg';


// markup
const StreetTrees = () => {
    console.log("in streettrees")
    return (
      <>
        <Layout activelink="StreetTrees">
            <h2>Seattle Department of Transportation – Approved Street Tree List</h2>
                <Table responsive striped bordered size="sm">
                    <thead>
                        <tr>
                            <th className={treeName}>Scientific & Common Name</th>
                            <th>Mature<br /> Height</th>
                            <th>Spread</th>
                            <th>Under<br />Wires?</th>
                            <th>Min Strip<br />Width</th>
                            <th>Flower<br />Color</th>
                            <th>Fall<br />Color</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {JSONData.map(data => (
                            <tr key={data.ScientificName}>
                                <td className={treeName}>{data.ScientificName} <br />{data.CommonName}</td>
                                <td>{data.MatureHeight}</td>
                                <td>{data.Spread}</td>
                                <td style={(data.UnderWires === "No") ? {backgroundColor:'#FF0000'} : {backgroundColor:'#00FF00'} }>{data.UnderWires}</td>
                                <td>{data.MinStripWidth}</td>
                                <td>{(data.FlowerColor === "N/A") ? data.FlowerColor : <Flower className={svgStyle} fill={data.FlowerColor} /> }</td>
                                <td>{(data.FallColor === "N/A") ? data.FallColor : <Leaf className={svgStyle} fill={data.FallColor} /> }</td>
                                <td className={treeComment}>{data.Comments}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </Layout>
      </>
    )
  }
  
export default StreetTrees