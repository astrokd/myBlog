import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONData from "../data/sdotstreettrees.json"
import Layout from '../components/layout'
import If from '../components/if'

import { treeType, treeName, treeComment, svgStyle } from './sdotst.module.css'

import Leaf from '../images/leaf.svg';
import Flower from '../images/flower.svg';

function TableHeader() {
    return (
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
    );
}

function TreeTypeRow({ type }) {
    return (
        <tr>
            <td className={treeType} colSpan="8">
                {type}
            </td>
        </tr>
    );
}

function TreeRow({ tree }) {
    return (
        <tr key={tree.ScientificName}>
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
                      <Table responsive bordered size="sm">
                          <tbody>
                              {this.state.listData.map(data => (
                                  <>
                                    <If condition={data.TreeType !== this.state.currentType}>
                                        <TreeTypeRow type={this.state.currentType = data.TreeType}/>
                                        <TableHeader />
                                    </If>
                                    <TreeRow tree={data} />
                                  </>
                              ))}
                          </tbody>
                      </Table>
              </Layout>
            </>
          )
    }
}
  
export default StreetTrees