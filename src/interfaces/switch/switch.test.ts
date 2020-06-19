import { mount, createLocalVue, Wrapper } from '@vue/test-utils';
import VueCompositionAPI from '@vue/composition-api';
import VCheckbox from '@/components/v-checkbox/';
import VSwitch from '@/components/v-switch/';
import VIcon from '@/components/v-icon/';
import Input from './input.vue';
import Display from './input.vue';

const localVue = createLocalVue();
localVue.use(VueCompositionAPI);
localVue.component('v-checkbox', VCheckbox);
localVue.component('v-switch', VSwitch);
localVue.component('v-icon', VIcon);
localVue.component('input-switch', Input);

describe('Interfaces / Switch', () => {
	describe('Input', () => {
		let component: Wrapper<Vue>;

		beforeEach(() => {
			component = mount(Input, {
				localVue,
				propsData: {
					value: false,
					readonly: false,
					options: {
						checkbox: false
					}
				}
			});
		});

		it('Renders the correct component for switch vs checkbox', async () => {
			expect(component.find(VSwitch).exists()).toBe(true);

			component.setProps({ options: { checkbox: true } });
			await component.vm.$nextTick();
			expect(component.find(VCheckbox).exists()).toBe(true);
		});

		it('Passes the on/off label correctly', async () => {
			component.setProps({
				options: {
					labelOff: 'off',
					labelOn: 'on'
				}
			});

			await component.vm.$nextTick();

			expect((component.vm as any).label).toBe('off');

			component.setProps({ value: true });
			await component.vm.$nextTick();

			expect((component.vm as any).label).toBe('on');
		});

		it('Emits the value through input', () => {
			component.find(VSwitch).trigger('click');

			expect(component.emitted('input')[0]).toEqual([true]);
		});
	});
});
