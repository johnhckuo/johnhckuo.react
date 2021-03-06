import React from "react"
import * as Style from "./style.js"
import Experiences from "./data"
import Container from "../global/Container"
import PropTypes from 'prop-types';

const Experience =(props)=>{
	return (
		<Container
			width="large"
			history={props.history}
			FirstTitle="Experience"
			SecondTitle={<React.Fragment>“ Find a job you enjoy doing, <br />and you will never have to work a day in your life. ” <br /> -Mark Twain</React.Fragment>}
		>
			<Style.Timeline device={props.device}>
				{
					Experiences.map((experience, index)=>{
						return (
							<div key={index}>
								<div>
									<h2> <div>{experience.startDate} ─<br />{experience.endDate}</div> </h2>
									<h1>{experience.title}</h1>
									<h3>@ {experience.company}</h3>

								</div>
								<div>
									{
										experience.description.map((content, index)=><p key={index}>● {content}</p>)
									}
								</div>
							</div>
						);
					})
				}
			</Style.Timeline>
		</Container>
	);
}

Experience.propTypes = {
	device: PropTypes.string.isRequired,
	history: PropTypes.object.isRequired
}

export default Experience;
