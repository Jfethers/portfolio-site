import React, { FunctionComponent } from "react";
import Avatar from "../Avatar/Avatar";
import { CgZeit } from "react-icons/cg";

const AboutMe: FunctionComponent = () => {
	return (
		<div className='about-me-wrapper'>
			<Avatar />
			<div className='about-me-content'>
				<p>
					I'm Jill Fetherston. I code, I knit, I run, I cycle, I wrangle a
					toddler. My proficiency on all of these things largely depends on my
					caffeine intake for that day.
				</p>
				<p>
					Check out some projects I've worked on at prior companies (or just on
					my own) down below or drop me an email in the contact form up at the
					top.
				</p>
			</div>
			<div className='jump-link'>
				<a id='project' href='#project'>
					<CgZeit />
				</a>
			</div>
		</div>
	);
};

export default AboutMe;
