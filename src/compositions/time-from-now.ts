import { onMounted, onUnmounted, ref } from '@vue/composition-api';
import formatDistance from 'date-fns/formatDistance';

export default function useFormatDistance(date: Date | number, autoUpdate: number = 60000) {
	let interval: number;

	const formatOptions = {
		addSuffix: true
	};

	const formattedDate = ref(formatDistance(date, new Date(), formatOptions));

	if (autoUpdate !== 0) {
		onMounted(() => {
			interval = setInterval(() => {
				formattedDate.value = formatDistance(date, new Date(), formatOptions);
			}, autoUpdate);
		});

		onUnmounted(() => {
			clearInterval(interval);
		});
	}

	return formattedDate;
}
