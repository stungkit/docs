# Theming

### Creating the theme file

1. Create a new file in `./src/assets/design-system/themes`, e.g. `halloween.scss`
2. Copy the contents of the file `./src/assets/design-system/themes/dark.scss` and paste them into your theme file
3. Change the root class name to `.halloween`
4. Replace the values of the variables with your new values

```css
/**
 Variable Nomenclature:
 1. Brand (global namespace)
 2. Application (css property or purpose)
 3. Brand Variation (primary, warning, danger, success, inverse, default)
 4. Emphasis (optional)
 5. State (optional)
*/

:root.halloween {
    /* Brand Variations */
    --primary: #de4300;
    --neutral: #{palette-color-level('neutral', 7)};
    --success: #{palette-color-level('success', 7)};
    --info: #{palette-color-level('info', 7)};
    --warning: #{palette-color-level('warning', 7)};
    --danger: #{palette-color-level('danger', 7)};

    /* Background Colors */
    --bg-default-high: #{palette-color-level('neutral', 10)};
    --bg-default-medium: #{palette-color-level('neutral', 9)};
    --bg-default-low: #{palette-color-level('neutral', 8)};
    --bg-inverse-high: #{palette-color-level('neutral', 1)};
    --bg-inverse-medium: #{palette-color-level('neutral', 2)};
    --bg-inverse-low: #{palette-color-level('neutral', 3)};

    /* Surface Colors */
    --surface-default-high: #{palette-color-level('neutral', 9)};
    --surface-default-medium: #{palette-color-level('neutral', 8)};
    --surface-default-low: #{palette-color-level('neutral', 7)};
    --surface-inverse-high: #{palette-color-level('neutral', 0)};
    --surface-inverse-medium: #{palette-color-level('neutral', 1)};
    --surface-inverse-low: #{palette-color-level('neutral', 2)};
    --surface-info-high: #{palette-color-level('info', 8)};
    --surface-info-medium: #{palette-color-level('info', 9)};
    --surface-info-low: #{palette-color-level('info', 10)};
    --surface-danger-high: #{palette-color-level('danger', 8)};
    --surface-danger-medium: #{palette-color-level('danger', 9)};
    --surface-danger-low: #{palette-color-level('danger', 10)};
    --surface-warning-high: #{palette-color-level('warning', 8)};
    --surface-warning-medium: #{palette-color-level('warning', 9)};
    --surface-warning-low: #{palette-color-level('warning', 10)};
    --surface-success-high: #{palette-color-level('success', 8)};
    --surface-success-medium: #{palette-color-level('success', 9)};
    --surface-success-low: #{palette-color-level('success', 10)};

    /* Border Colors */
    --border-default-high: #{palette-color-level('neutral', 6)};
    --border-default-medium: #{palette-color-level('neutral', 7)};
    --border-default-low: #{palette-color-level('neutral', 8)};
    --border-inverse-high: #{palette-color-level('neutral', 9)};
    --border-inverse-medium: #{palette-color-level('neutral', 8)};
    --border-inverse-low: #{palette-color-level('neutral', 7)};
    --border-info-high: #{palette-color-level('info', 6)};
    --border-info-medium: #{palette-color-level('info', 7)};
    --border-info-low: #{palette-color-level('info', 8)};
    --border-danger-high: #{palette-color-level('danger', 6)};
    --border-danger-medium: #{palette-color-level('danger', 7)};
    --border-danger-low: #{palette-color-level('danger', 8)};
    --border-warning-high: #{palette-color-level('warning', 6)};
    --border-warning-medium: #{palette-color-level('warning', 7)};
    --border-warning-low: #{palette-color-level('warning', 8)};
    --border-success-high: #{palette-color-level('success', 6)};
    --border-success-medium: #{palette-color-level('success', 7)};
    --border-success-low: #{palette-color-level('success', 8)};

    /* Text Colors */
    --text-default-high: #{palette-color-level('neutral', 0)};
    --text-default-medium: #{palette-color-level('neutral', 2)};
    --text-default-low: #{palette-color-level('neutral', 4)};
    --text-inverse-high: #{palette-color-level('neutral', 10)};
    --text-inverse-medium: #{palette-color-level('neutral', 7)};
    --text-inverse-low: #{palette-color-level('neutral', 6)};
    --text-info: #{palette-color-level('info', 7)};
    --text-danger: #{palette-color-level('danger', 7)};
    --text-warning: #{palette-color-level('warning', 7)};
    --text-success: #{palette-color-level('success', 7)};
    --text-link: #{palette-color-level('info', 4)};
    --text-light: #{palette-color-level('neutral', 0)};
    --text-dark: #{palette-color-level('neutral', 10)};

    /* Interaction Colors */
    --interaction-primary-enabled: #ff4d00;
    --interaction-primary-hovered: #ff7036;
    --interaction-primary-activated: #de4300;

    --interaction-neutral-enabled: #{palette-color-level('neutral', 9)};
    --interaction-neutral-hovered: #{palette-color-level('neutral', 8)};
    --interaction-neutral-activated: #{palette-color-level('neutral', 10)};

    --interaction-danger-enabled: #{palette-color-level('danger', 6)};
    --interaction-danger-hovered: #{palette-color-level('danger', 5)};
    --interaction-danger-activated: #{palette-color-level('danger', 7)};

    --interaction-warning-enabled: #{palette-color-level('warning', 6)};
    --interaction-warning-hovered: #{palette-color-level('warning', 5)};
    --interaction-warning-activated: #{palette-color-level('warning', 7)};

    --interaction-success-enabled: #{palette-color-level('success', 6)};
    --interaction-success-hovered: #{palette-color-level('success', 5)};
    --interaction-success-activated: #{palette-color-level('success', 7)};

    --interaction-secondary-enabled: #{palette-color-level('info', 1)};
    --interaction-secondary-hovered: #{palette-color-level('info', 2)};
    --interaction-secondary-activated: #{palette-color-level('info', 3)};

    /* UTILS */
    /* Elevation */
    --elevation-1: 0px 1px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
    --elevation-2: 0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1);
    --elevation-3: 0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    --elevation-4: 0px 8px 10px -6px rgba(0, 0, 0, 0.1), 0px 20px 25px -5px rgba(0, 0, 0, 0.1);

    /* A11y */
    --focused: 0 0 0 #{$space-2} #{palette-color-level('neutral', 10)},
    0 0 0 #{$space-4} #de4300;

    /* Animation Language */
    --transition-duration: 250ms;
    --easing-curve: cubic-bezier(0.17, 0.67, 0.83, 0.67);
    --fade-animation-transition: opacity var(--transition-duration) var(--easing-curve);
}

```

### Let SASS know about the new theme

1. Open `./src/assets/global.scss` and import your theme file

```css
@import 'design-system/mixins/mixins';
@import 'design-system/variables/variables';
@import 'design-system/themes/light';
@import 'design-system/themes/dark';
@import 'design-system/themes/halloween'; /* new theme */
```

2. Search for occurrences of `add-theme-variable` (e.g. `./src/assets/global.scss`) and add the new theme

```css
@include add-theme-variable(
  'landing-hero-link-color',
  (
    'light': palette-color-level('info', 4),
    'dark': palette-color-level('info', 6),
    'halloween': palette-color-level('info', 6), /* new theme */
  )
);
```

### Let Storybook know about the new theme

1. Open `./.storybook/preview.js`
2. Add new theme

```js
export const parameters = {
    ...
    themeSwitcher: {
        themes: [
          ...
          { label: 'Halloween Theme', value: 'halloween' },
        ],
    },
    ...
};
```

### Let your application know about the new theme

1. Open `./src/layouts/default.vue`
2. Add new theme

```js
const themes = computed(() => [
    { label: 'System', value: 'system' },
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
    { label: 'Halloween', value: 'halloween' }, /* new theme */
]);
```

