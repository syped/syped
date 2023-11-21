import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Vision Solar',
		description:
			'Attended many appointments as a representative of Vision Solar that was able to help give  information as well as answer questions for clients and handle transactions for clean renewable energy panels.',
		contract: ContractType.FullTime,
		type: 'Full-time',
		location: 'Blackwood, NJ',
		period: { from: new Date() },
		skills: getSkills('ts'),
		name: 'Sales Representative',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Goodyear',
		description:
			'Handled general maintenance for a variety of automotive vehicles as well as doing vehicle inspections to ensure customer safety.',
		contract: ContractType.PartTime,
		type: 'Part-time',
		location: 'South Plainfield, NJ',
		period: { from: new Date() },
		skills: getSkills('svelte', 'ts', 'sass'),
		name: 'General Maintenence Technician',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
