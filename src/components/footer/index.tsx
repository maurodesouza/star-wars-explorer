import * as S from './styles';

const Footer = () => (
  <S.Container>
    <S.Copy>Data provided by SWAPI</S.Copy>

    <S.MadeBy>
      Made with ❤ by{' '}
      <a
        href="https://www.linkedin.com/in/maurodesouzaa/"
        target="_blank"
        rel="noreferrer"
      >
        Mauro de Souza
      </a>{' '}
    </S.MadeBy>
  </S.Container>
);

export { Footer };
