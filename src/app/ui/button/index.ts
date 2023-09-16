import type { DirectiveHook } from 'vue'

type ButtonColors = 'primary' | 'secondary'
type ButtonSizes = 'small' | 'medium'

interface IButtonDirectiveProps {
    color: ButtonColors
    size?: ButtonSizes
}

const COLORS_CLASSNAMES: Record<ButtonColors, string> = {
    primary: 'button_primary',
    secondary: 'button_secondary',
}

const SIZES_CLASSNAMES: Record<ButtonSizes, string | null> = {
    medium: null,
    small: 'button_small',
}

export const ButtonDirective: DirectiveHook<HTMLButtonElement> = (el, props) => {
    const { color, size = 'medium' } = props.value as IButtonDirectiveProps
    const {color: oldColor, size: oldSize} = (props.oldValue ?? {}) as IButtonDirectiveProps

    el.classList.remove('button')
    if (oldColor !== undefined) el.classList.remove(COLORS_CLASSNAMES[oldColor])
    if (oldSize !== undefined) el.classList.remove(SIZES_CLASSNAMES[oldSize] as string)

    const classnames = [
        'button', 
        COLORS_CLASSNAMES[color], 
        SIZES_CLASSNAMES[size],
    ].filter(item => typeof item === 'string')

    for (const cls of classnames) {
        el.classList.add(cls as string)
    }
}