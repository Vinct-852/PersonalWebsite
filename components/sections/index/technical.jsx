// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

import ThreeDmodel from '../../blocks/3D/3d.model'
/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle=""
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<BadgesBlock 
							title="Technologies" 
							copy="I am a problem-solver, diffience technologies are tools for me building solutions."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<ThreeDmodel></ThreeDmodel>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const tech	= [
	{ key: 'c++', 	name: 'C++', 		type: 'devicon' },
	{ key: 'net', 	name: '.Net', 		type: 'devicon' },
	{ key: 'java', 	name: 'Java', 		type: 'devicon' },
	{ key: 'python', 	name: 'Python', 		type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'sql', 		name: 'SQL', 				type: 'devicon' },
]