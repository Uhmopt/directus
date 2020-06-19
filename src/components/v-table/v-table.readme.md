# Table

```html
<v-table
	:headers="[
		{
			text: 'Name',
			value: 'name'
		},
		{
			text: 'Phone Number',
			value: 'tel'
		},
		{
			text: 'Contact',
			value: 'person'
		}
	]"

	:items="[
		{
			name: 'Amsterdam',
			tel: '020-1122334',
			person: 'Mariann Rumble'
		},
		{
			name: 'New Haven',
			tel: '(203) 687-9900',
			person: 'Helenka Killely'
		}
	]"
/>
```

## Headers

| Property   | Description                                                  | Default |
|------------|--------------------------------------------------------------|---------|
| `text`*    | Text displayed in the column                                 | --      |
| `value`*   | Name of the object property that holds the value of the item | --      |
| `align`    | Text alignment of value. One of `left`, `center`, `right`    | `left`  |
| `sortable` | If the column can be sorted on                               | `true`  |
| `width`    | Custom width of the column in px                             | --      |

## Custom element / component for header

You can override the displayed header name by using the dynamic `header.[name]` slot. `[name]` is the `value` property in the header item for this column sent to `headers`.

```html
<v-table
	:headers="headers"
	:items="items"
>
	<template #header.name="{ header }">
		<v-button>{{ header.text }}</v-button>
	</template>
</v-table>
```

In this slot, you have access to the `header` through the scoped slot binding.

## Custom element / component for cell value

You can override the columns in a row by using the dynamic `item.[name]` slot. `[name]` is the `value` property in the header item for this column sent to `headers`.

```html
<v-table
	:headers="headers"
	:items="items"
>
	<template #item.name="{ item }">
		<v-button>{{ item.name }}</v-button>
	</template>
</v-table>
```

In this slot, you have access to the `item` through the scoped slot binding.

## Resizable rows

Adding the `show-resize` prop allows the user to resize the columns at will. You can keep your headers updated by using the `.sync` modifier or listening to the `update:headers` event:

```html
<template>
	<v-table :headers.sync="headers" :items="[]" show-resize>
</template>

<script>
import { createComponent, ref } from '@vue/composition-api';
import { HeaderRaw } from '@/components/v-table/types';

export default createComponent({
	setup() {
		const headers = ref<HeaderRaw[]>([
			{
				text: 'Column 1',
				value: 'col1',
				width: 150
			},
			{
				text: 'Column 1',
				value: 'col1',
				width: 300
			}
		]);

		return { headers };
	}
});
</script>
```

## Props

| Prop           | Description                                                         | Default |
|----------------|---------------------------------------------------------------------|---------|
| `headers`*     | What columns to show in the table. Supports the `.sync` modifier    | --      |
| `items`*       | The individual items to render as rows                              | --      |
| `item-key`     | Primary key of the item. Used for keys / selections                 | `id`    |
| `sort-by`      | What column / order to sort by. Supports the `.sync` modifier       | --      |
| `show-select`  | Show checkboxes                                                     | `false` |
| `show-resize`  | Show resize handlers                                                | `false` |
| `selection`    | What items are selected. Can be used with `v-model` as well         | `[]`    |
| `fixed-header` | Make the header fixed                                               | `false` |
| `height`       | A fixed height (in px) for the table                                | --      |

## Events

| Event            | Description                                    | Value                           |
|------------------|------------------------------------------------|---------------------------------|
| `update:sort`    | `.sync` event for `sort` prop                  | `{ by: string, desc: boolean }` |
| `update:headers` | `.sync` event for `headers` prop               | `HeaderRaw[]`                   |
| `item-selected`  | Emitted when an item is selected or deselected | `{ item: any, value: boolean }` |
| `select`         | Emitted when selected items change             | `any[]`                         |

## Slots

| Slot             | Description                      |
|------------------|----------------------------------|
| `header.[value]` | Override individual header cells |
| `item.[value]`   | Override individual row cells    |
