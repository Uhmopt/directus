# Input

```html
<v-input v-model="value" />
```

## Attributes & Events

The HTML `<input>` element supports a huge amount of attributes and events. In order to support all of these, all props that aren't specially handled (see list below) will be passed on to the `<input>` element directly. This allows you to change anything you want on the input.

## Prefixes / Suffixes

You can add any custom (text) prefix/suffix to the value in the input using the `prefix` and `suffix` slots.

## Props
| Prop        | Description                                    | Default |
|-------------|------------------------------------------------|---------|
| `autofocus` | Autofocusses the input on render               | `false` |
| `disabled`  | Set the disabled state for the input           | `false` |
| `monospace` | Render the entered value in the monospace font | `false` |
| `prefix`    | Prefix the users value with a value            | --      |
| `suffix`    | Show a value at the end of the input           | --      |

Note: all other attached attributes are bound to the input HTMLELement in the component. This allows you to attach any of the standard HTML attributes like `min`, `length`, or `pattern`.

## Slots

| Slot            | Description                                       | Data                                             |
|-----------------|---------------------------------------------------|--------------------------------------------------|
| `prepend-outer` | Before the input                                  | `{ disabled: boolean, value: string | number; }` |
| `prepend`       | In the input, before the value, before the prefix | `{ disabled: boolean, value: string | number; }` |
| `append`        | In the input, after the value, after the suffix   | `{ disabled: boolean, value: string | number; }` |
| `append-outer`  | After the input                                   | `{ disabled: boolean, value: string | number; }` |

## Events

| Events                | Description                                  | Value |
|-----------------------|----------------------------------------------|-------|
| `input`               | Updates `v-model`                            | `any` |
| `click:prepend-outer` | User clicks on content of outer prepend slot | --    |
| `click:prepend`       | User clicks on content of inner prepend slot | --    |
| `click:append`        | User clicks on content of inner append slot  | --    |
| `click:append-outer`  | User clicks on content of outer append slot  | --    |

Note: all other listeners are bound to the input HTMLElement, allowing you to handle everything from `keydown` to `emptied`.
