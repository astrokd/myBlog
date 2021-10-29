import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONData from "../data/sdotstreettrees.json"
import Layout from '../components/layout'

import { treeType, treeName, treeComment, svgStyle } from './sdotst.module.css'

import Leaf from '../images/leaf.svg';
import Flower from '../images/flower.svg';

function TableHeader(props) {
    return (
        <tr>
            <th className={treeType}>Tree Type</th>
            <th className={treeName}>Scientific & Common Name</th>
            <th>Mature<br /> Height</th>
            <th>Spread</th>
            <th>Under<br />Wires?</th>
            <th>Min Strip<br />Width</th>
            <th>Flower<br />Color</th>
            <th>Fall<br />Color</th>
            <th>Comments</th>
        </tr>
    );
}

function TreeTypeRow({ type }) {
    return (
        <tr>
            <th colSpan="8">
                {type}
            </th>
        </tr>
    );
}

function TreeRow({ tree, currentType }) {
    return (
        <tr key={tree.ScientificName}>
            <td className={treeType}>{(tree.TreeType !== currentType) ? (currentType = tree.TreeType) : null}</td>
            <td className={treeName}>{tree.ScientificName} <br />{tree.CommonName}</td>
            <td>{tree.MatureHeight}</td>
            <td>{tree.Spread}</td>
            <td style={(tree.UnderWires === "No") ? {backgroundColor:'#FF0000'} : {backgroundColor:'#00FF00'} }>{tree.UnderWires}</td>
            <td>{tree.MinStripWidth}</td>
            <td>{(tree.FlowerColor === "N/A") ? tree.FlowerColor : <Flower className={svgStyle} fill={tree.FlowerColor} /> }</td>
            <td>{(tree.FallColor === "N/A") ? tree.FallColor : <Leaf className={svgStyle} fill={tree.FallColor} /> }</td>
            <td className={treeComment}><Comments Comments={tree.Comments} Warnings={tree.Warnings || false} GPPLink={tree.GPPLink || false}/></td>
        </tr>
    );
}



const Comments = (props) => {
    return (
        <div style={(props.Warnings) ? {backgroundColor:'yellow'} : {backgroundColor:'transparent'} } >
            {props.Comments}
            {(props.Warnings) ? (<b> - {props.Warnings}</b>) : ""}
            {(props.GPPLink) ? ( <a href={props.GPPLink} rel='noopener'><b> Great Plant Pick</b></a>) : ""}
        </div>
    )
}


class StreetTrees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: JSONData,
            currentType: null,
        }
    }

    render() {
        return (
            <>
              <Layout activelink="StreetTrees">
                  <h2>Seattle Department of Transportation – Approved Street Tree List</h2>
                      <Table responsive striped bordered size="sm">
                          <thead>
                              <TableHeader />
                          </thead>
                          <tbody>
                              {this.state.listData.map(data => (
                                  <TreeRow tree={data} currentType={this.state.currentType}/>
                              ))}
                          </tbody>
                      </Table>
              </Layout>
            </>
          )
    }
}

// const StreetTrees = () => {
//     return (
//       <>
//         <Layout activelink="StreetTrees">
//             <h2>Seattle Department of Transportation – Approved Street Tree List</h2>
//                 <Table responsive striped bordered size="sm">
//                     <thead>
//                         <tr>
//                             <th className={treeName}>Scientific & Common Name</th>
//                             <th>Mature<br /> Height</th>
//                             <th>Spread</th>
//                             <th>Under<br />Wires?</th>
//                             <th>Min Strip<br />Width</th>
//                             <th>Flower<br />Color</th>
//                             <th>Fall<br />Color</th>
//                             <th>Comments</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {JSONData.map(data => (
//                             <tr key={data.ScientificName}>
//                                 <td className={treeName}>{data.ScientificName} <br />{data.CommonName}</td>
//                                 <td>{data.MatureHeight}</td>
//                                 <td>{data.Spread}</td>
//                                 <td style={(data.UnderWires === "No") ? {backgroundColor:'#FF0000'} : {backgroundColor:'#00FF00'} }>{data.UnderWires}</td>
//                                 <td>{data.MinStripWidth}</td>
//                                 <td>{(data.FlowerColor === "N/A") ? data.FlowerColor : <Flower className={svgStyle} fill={data.FlowerColor} /> }</td>
//                                 <td>{(data.FallColor === "N/A") ? data.FallColor : <Leaf className={svgStyle} fill={data.FallColor} /> }</td>
//                                 <td className={treeComment}><Comments Comments={data.Comments} Warnings={data.Warnings || false} GPPLink={data.GPPLink || false}/></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//         </Layout>
//       </>
//     )
//   }
  
export default StreetTrees