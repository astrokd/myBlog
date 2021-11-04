import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css'
import JSONData from "../data/sdotstreettrees.json"
import Layout from '../components/layout'
import If from '../components/if'

import { treeType, treeName, treeComment, svgStyle, button, bigButton } from './sdotst.module.css'

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

// ***********  Function for page  ************

function StreetTreeslist() {
    const orgList = JSONData
    let [formKey, setFormKey] = useState(0)
    const [list, setList] = useState(orgList);
    let currentType = useState(null);
    let [searchText, setSearch] = useState(null)

// Data Display Functions

    // Clear Display to original default state
    function handleClickClear() {
        const nextList = [...orgList];
        setSearch(null)
        searchText = null
        setList(nextList)
        formKey = formKey+1
        setFormKey(formKey++)
    }
    
    // Reverse Display of data
    function handleClickReverse() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList)
    }

    // Sort Functions for Mature Height to Fall Color
    function handleClickSortHeight() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.MatureHeight < b.MatureHeight ){
              return -1;
            }
            if ( a.MatureHeight > b.MatureHeight ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    function handleClickSortSpread() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.Spread < b.Spread ){
              return -1;
            }
            if ( a.Spread > b.Spread ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    function handleClickSortWires() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.UnderWires < b.UnderWires ){
              return -1;
            }
            if ( a.UnderWires > b.UnderWires ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    function handleClickSortStrip() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.MinStripWidth < b.MinStripWidth ){
              return -1;
            }
            if ( a.MinStripWidth > b.MinStripWidth ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    function handleClickSortFlowers() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.FlowerColor < b.FlowerColor ){
              return -1;
            }
            if ( a.FlowerColor > b.FlowerColor ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    function handleClickSortFall() {
        const nextList = [...list];
        function compare( a, b ) {
            if ( a.FallColor < b.FallColor ){
              return -1;
            }
            if ( a.FallColor > b.FallColor ){
              return 1;
            }
            return 0;
        }
        nextList.sort(compare);
        setList(nextList)
    }

    // Search Scientific & Common Name column
    function handleChangeSearch(event) {
        const changeSearch = event.target.value
        setSearch(changeSearch)

    }

    function handleClickSearchName() {
        const search = searchText.toLowerCase();
        let nextList = [...list];
        
        function searchList( row ) {
            return row.ScientificName.toLowerCase().includes(search) || row.CommonName.toLowerCase().includes(search)
        }

        setList(nextList.filter(searchList))
    }

    //JSX for page
    return (
        <>
          <Layout activelink="StreetTrees">
              <h2>Seattle Department of Transportation – Approved Street Tree List</h2>
                <Button className={bigButton} variant="outline-secondary" onClick={handleClickClear} key={formKey}>Clear</Button>
                <Button className={bigButton} variant="outline-secondary" onClick={handleClickReverse}>Reverse</Button>
                  <Table responsive bordered size="sm">
                      <tbody>
                        <tr>
                            <th>
                                <InputGroup size="sm">
                                    <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                                    <Form.Control aria-describedby="inputGroup-sizing-sm" placeholder="enter search term..." type="text" aria-label="Search name" value={searchText} onChange={handleChangeSearch} key={formKey} />
                                    <Button className={button} variant="outline-secondary" type='submit' onClick={handleClickSearchName}>Search</Button>
                                </InputGroup>
                            </th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortHeight}>Sort</Button></th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortSpread}>Sort</Button></th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortWires}>Sort</Button></th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortStrip}>Sort</Button></th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortFlowers}>Sort</Button></th>
                            <th><Button className={button} variant="secondary" size="sm" active onClick={handleClickSortFall}>Sort</Button></th>
                            <th>search</th>
                        </tr>
                          {list.map(data => (
                              <>
                                <If condition={data.TreeType !== currentType}>
                                    <TreeTypeRow type={currentType = data.TreeType}/>
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
  
export default StreetTreeslist