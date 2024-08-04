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
import PointFormBlock from '../../blocks/about.pointform.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle=""
					subTitle="Work on a diverse range of software development projects => Machine-level to Application-level"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/profilePic.jpg" alt=""/>
					</div>
					<div className={about.copy} >
						<PointFormBlock 
							title="Personality"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'address-card' ]}
							points={['Growth mindset', 'Problem Solver', 'Team Player', 'Adaptable']}
							//points="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock 
							title="Interest" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="location-dot"
							copy="I really enjoy solving real-life problem. Design & implement solutions to challenging problems makes me feel proud."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'cubes', 		name: 'Finance', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Robotic', 		type: 'fad' },
	{ key: 'window', 			name: 'Full Stack Web Dev', 	type: 'fad' },
	 { key: 'chart-simple', 			name: 'Machine Library', 	type: 'far' },
	// { key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	// { key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]