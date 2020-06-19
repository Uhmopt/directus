import Vue from 'vue';
import markdown from './v-hover.readme.md';
import VIcon from '../v-icon/';
import VHover from './v-hover.vue';

Vue.component('v-hover', VHover);
Vue.component('v-icon', VIcon);

export default {
	title: 'Components / Hover',
	component: VHover,
	parameters: {
		notes: markdown
	}
};

export const basic = () => `
<v-hover v-slot="{ hover }" tag="span">
	<v-icon :color="hover ? '--red' : '--blue'" name="person" x-large />
</v-hover>
`;

export const customMarkup = () => `
<v-hover v-slot="{ hover }" tag="span">
	<template v-if="hover">
		<v-icon name="star" color="--amber" />
		Hovering! 🎉🥳
	</template>
	<template v-else>
		Hover me.
	</template>
</v-hover>
`;
