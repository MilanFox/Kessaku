export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export const BUTTON_VARIANTS = ['primary', 'secondary', 'ghost'] as const;

export type ButtonSize = typeof BUTTON_SIZES[number];
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

export interface DemoButtonProps {
  label: string
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
}
