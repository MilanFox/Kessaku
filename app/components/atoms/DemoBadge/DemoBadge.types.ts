export const BADGE_TONES = ['neutral', 'success', 'warning', 'danger'] as const;

export type BadgeTone = typeof BADGE_TONES[number];

export interface DemoBadgeProps {
  label?: string
  tone?: BadgeTone
  pill?: boolean
}
