import { Background, Wrapper, Gap, Menu, Footer } from 'components';

import * as S from './styles';

type BaseProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseProps) => {
  return (
    <Background>
      <Gap>
        <Wrapper>
          <S.Container>
            <Menu />

            <S.Content>{children}</S.Content>

            <Footer />
          </S.Container>
        </Wrapper>
      </Gap>
    </Background>
  );
};

export { BaseTemplate };
