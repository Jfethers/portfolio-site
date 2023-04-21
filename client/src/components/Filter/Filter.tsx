import React, { FunctionComponent } from 'react';
import Pill from '../Pill/Pill';
import Project from '../../types/Project';
import Projects from '../../types/Projects'
import projectData from '../../utils/projectData';

interface IFilterProps {
    tiles: Projects[],
    setFiltering: Function,
    setTiles: Function,
}

const Filter: FunctionComponent<IFilterProps> = (props: IFilterProps) => {
    const { setFiltering, setTiles } = props;
    const filters: string[] = ['React', 'Typescript', 'Mongo', 'Node', 'Postgres', 'Redux'];

    const filterProjects = (filter: string) => {
        const filteredProjects = [];
        for (let i = 0; i < projectData.length; i++) {
            if (projectData[i].tech.indexOf(filter) !== -1) {
                filteredProjects.push(projectData[i]);
            }
        }
        setFiltering(true);
        setTiles(filteredProjects);
    }

    const clearFilters = () => {
        setFiltering(false);
        setTiles([])
    }

    return (
        <>
            {filters.map(filter => {
                return (
                    <Pill key={filter} onClick={() => filterProjects(filter)} text={filter} />
                );
            })}
            <Pill text={'Clear'} onClick={() => clearFilters()} />
        </>
    )
}

export default Filter;
