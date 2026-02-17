import { useTheme } from '@emotion/react';

import IconRefletiaStarRaw from '@assets/icons/refletia-logo.svg?react';
import { type IconComponentProps } from '@ui/display/icon/types/IconComponent';

type IconRefletiaStarProps = Pick<IconComponentProps, 'size' | 'stroke'>;

export const IconRefletiaStar = (props: IconRefletiaStarProps) => {
  const theme = useTheme();
  const size = props.size ?? 24;
  const stroke = props.stroke ?? theme.icon.stroke.md;

  return <IconRefletiaStarRaw height={size} width={size} strokeWidth={stroke} />;
};
