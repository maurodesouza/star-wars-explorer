import { useRouter } from 'next/router';

import { Image } from 'components';
import { slugfy } from 'utils';

import { Entities } from 'types';
import * as S from './styles';

export type CardProps = {
  id: string;
  label: string;
  image: string;
  entity?: Entities;
};

const Card = ({ entity = Entities.CHARACTERS, image, label }: CardProps) => {
  const router = useRouter();

  const handleRedirect = async (e: React.MouseEvent) => {
    e.preventDefault();

    router.push(href);
  };

  const href = `/universe/${entity}/${slugfy(label)}`;

  return (
    <S.Container role="link" onClick={handleRedirect}>
      <Image image={image} alt={label} />

      <S.Content>
        <S.Label>{label}</S.Label>
      </S.Content>
    </S.Container>
  );
};

export { Card };
