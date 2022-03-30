import Lottie, { LottieProps } from 'react-lottie';

import { animations } from './animations';
import * as S from './styles';

export type AnimationProps = Omit<LottieProps, 'options'> & {
  animation: keyof typeof animations;
  label?: string;
};

const Animation = ({ animation, label, ...rest }: AnimationProps) => {
  return (
    <S.Container>
      <Lottie
        {...rest}
        options={{
          animationData: animations[animation],
          autoplay: true,
        }}
      />

      {label && <S.Label>{label}</S.Label>}
    </S.Container>
  );
};

export { Animation };
