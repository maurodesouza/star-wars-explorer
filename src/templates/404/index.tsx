import { BaseTemplate } from 'templates/Base';
import { Animation } from 'components';

import * as S from './styles';

const Template404 = () => {
  return (
    <BaseTemplate>
      <S.Center>
        <S.Wrapper>
          <Animation
            animation="404"
            label="Oops ... this page you tried to access does not exist."
          />
        </S.Wrapper>
      </S.Center>
    </BaseTemplate>
  );
};

export { Template404 };
