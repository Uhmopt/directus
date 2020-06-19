import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);

import VProgressLinear from './v-progress-linear.vue';

describe('Progress (Linear)', () => {
	let component: Wrapper<Vue>;

	beforeEach(() => {
		component = mount(VProgressLinear, { localVue });
	});

	it('Calculates the correct inline styles', async () => {
		component.setProps({
			color: 'red',
			backgroundColor: '--blue-grey-50',
			height: 55
		});

		await component.vm.$nextTick();

		expect((component.vm as any).styles).toEqual({
			'--_v-progress-linear-color': 'red',
			'--_v-progress-linear-background-color': 'var(--blue-grey-50)',
			'--_v-progress-linear-height': '55px'
		});
	});

	it('Sets the correct classes based on the props', async () => {
		component.setProps({
			absolute: true,
			bottom: false,
			fixed: false,
			indeterminate: false,
			rounded: false,
			top: true
		});

		await component.vm.$nextTick();

		expect(component.classes()).toEqual(['v-progress-linear', 'absolute', 'top']);

		component.setProps({
			absolute: false,
			bottom: true,
			fixed: true,
			indeterminate: false,
			rounded: false,
			top: false
		});

		await component.vm.$nextTick();

		expect(component.classes()).toEqual(['v-progress-linear', 'bottom', 'fixed']);

		component.setProps({
			absolute: false,
			bottom: false,
			fixed: false,
			indeterminate: true,
			rounded: true,
			top: false
		});

		await component.vm.$nextTick();

		expect(component.classes()).toEqual(['v-progress-linear', 'indeterminate', 'rounded']);
	});
});
