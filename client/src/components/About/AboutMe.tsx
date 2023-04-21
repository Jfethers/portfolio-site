import React, { FunctionComponent} from 'react';
import Avatar from '../Avatar/Avatar';
import { CgZeit } from 'react-icons/cg';

const AboutMe: FunctionComponent = () => {
    return (
        <div className="about-me-wrapper">
            <Avatar />
            <div className="about-me-content">
                <p>I'm Jill Fetherston. I code, I knit, I run, I cycle, I wrangle a toddler. My profieceny on all of these things largely depends on my caffeine intake for that day.</p>
            </div>
            <div className="jump-link">
                <a id="project" href="#project">
                    <CgZeit />
                </a>
            </div>
        </div>
    )
}

export default AboutMe;

