import IconRefletiaStarFilledRaw from '@assets/icons/refletia-logo.svg?react';
import { type IconComponentProps } from '@ui/display/icon/types/IconComponent';
import { THEME_COMMON } from '@ui/theme';

type IconRefletiaStarFilledProps = Pick<IconComponentProps, 'size' | 'stroke'>;

const iconStrokeMd = THEME_COMMON.icon.stroke.md;

export const IconRefletiaStarFilled = (props: IconRefletiaStarFilledProps) => {
  const size = props.size ?? 24;
  const stroke = props.stroke ?? iconStrokeMd;

  return (
    <IconRefletiaStarFilledRaw height={size} width={size} strokeWidth={stroke} />
  );
};
