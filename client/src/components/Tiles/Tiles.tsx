import React, { FunctionComponent, useEffect, useState } from 'react';
import projectData from '../../utils/projectData';
import Tile from '../Tile/Tile';
import Filter from '../Filter/Filter'

const Tiles = () => {
    const [ filtering, setFiltering ] = useState(false);
    const [ tiles, setTiles ] = useState([])
    const dataObject = filtering ? tiles : projectData;

    return (
        <div id="projects">
            <div id="project-copy" className="project-copy">
                <h1>Projects</h1>
                <p>Feel free to look through some projects and features I've worked on over the years at different companies throughout my career. Filters below can help you narrow down to technologies you're most interested in.</p>
            </div>
            <div className="filters">
                <Filter setTiles={setTiles} tiles={tiles} setFiltering={setFiltering} />
            </div>
            <div className="tiles">
                {dataObject.map(object =>  <Tile project={object} key={object.key} />)}
            </div>
        </div>
    )
}

export default Tiles;
