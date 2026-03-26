import type { DemoBadgeProps } from '@atoms/DemoBadge/DemoBadge.types';
import type { DemoButtonProps } from '@atoms/DemoButton/DemoButton.types';

export interface DemoMoleculeProps {
  title?: string
  description?: string
  badgeLabel?: DemoBadgeProps['label']
  badgeTone?: DemoBadgeProps['tone']
  badgePill?: DemoBadgeProps['pill']
  buttonLabel?: DemoButtonProps['label']
  buttonSize?: DemoButtonProps['size']
  buttonVariant?: DemoButtonProps['variant']
  buttonDisabled?: DemoButtonProps['disabled']
}
