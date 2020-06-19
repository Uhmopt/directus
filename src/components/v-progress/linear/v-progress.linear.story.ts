import {
	withKnobs,
	color,
	optionsKnob as options,
	number,
	text,
	boolean
} from '@storybook/addon-knobs';

import Vue from 'vue';
import VProgressLinear from './v-progress-linear.vue';
import markdown from './v-progress-linear.readme.md';

Vue.component('v-progress-linear', VProgressLinear);

export default {
	title: 'Components / Progress (linear)',
	component: VProgressLinear,
	decorators: [withKnobs],
	parameters: {
		notes: markdown
	}
};

export const interactive = () => ({
	props: {
		absolute: {
			default: boolean('Absolute', false)
		},
		backgroundColor: {
			default: color('Background Color', '#cfd8dc')
		},
		bottom: {
			default: boolean('Bottom', false)
		},
		color: {
			default: color('Color', '#263238')
		},
		fixed: {
			default: boolean('Fixed', false)
		},
		height: {
			default: number('Height', 4)
		},
		indeterminate: {
			default: boolean('Indeterminate', false)
		},
		rounded: {
			default: boolean('Rounded', false)
		},
		top: {
			default: boolean('Top', false)
		},
		value: {
			default: number('Value (percentage)', 50)
		}
	},
	template: `
	<v-progress-linear
		:absolute="absolute"
		:backgroundColor="backgroundColor"
		:bottom="bottom"
		:color="color"
		:fixed="fixed"
		:height="height"
		:indeterminate="indeterminate"
		:rounded="rounded"
		:top="top"
		:value="value"
	/>`
});

export const withSlot = () => `
<v-progress-linear :height="25" :value="25" rounded>25%</v-progress-linear>
`;
