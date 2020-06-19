import VueCompositionAPI, { watch } from '@vue/composition-api';
import useWindowSize from './window-size';
import mountComposition from '../../.jest/mount-composition';

describe('Compositions / Window Size', () => {
	it('Adds passed event listener onMounted', async () => {
		let testWidth: number = 0;

		const component = mountComposition(() => {
			const { width } = useWindowSize();

			watch(width, (val: number) => (testWidth = val));
		});

		expect(testWidth).toBe(0);

		// @ts-ignore
		window.innerWidth = 1024;
		window.dispatchEvent(new Event('resize'));

		await component.vm.$nextTick();

		expect(testWidth).toBe(1024);
	});

	it('Adds / removes resize event handler on mount / unmount', async () => {
		const map: any = {};

		window.addEventListener = jest.fn((event, cb) => {
			map[event] = cb;
		});

		window.removeEventListener = jest.fn((event, cb) => {
			delete map[event];
		});

		const component = mountComposition(() => {
			const { width } = useWindowSize();
		});

		expect(map.resize).toBeTruthy();

		component.destroy();

		expect(map.keydown).toBe(undefined);
	});
});
