import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import { ImageNotSupported as NoImageIcon } from '@styled-icons/material';

import { Entities } from 'types';
import * as S from './styles';

export type CardProps = {
  id: string;
  label: string;
  image: string;
  entity?: Entities;
};

const Card = ({ entity = Entities.CHARACTERS, image, label }: CardProps) => {
  const { push } = useRouter();

  const [noHasImage, setNoNasImage] = useState(false);

  useEffect(() => {
    setNoNasImage(false);
  }, [image]);

  return (
    <S.Container onClick={() => push(`/${entity}/${label}`)}>
      {!noHasImage ? (
        <Image
          onError={() => setNoNasImage(true)}
          src={image}
          layout="fill"
          objectFit="cover"
          alt={label}
        />
      ) : (
        <S.Wrapper>
          <NoImageIcon size={56} />
          <S.Text>
            Image
            <br />
            no found
          </S.Text>
        </S.Wrapper>
      )}

      <S.Content>
        <S.Label>{label}</S.Label>
      </S.Content>
    </S.Container>
  );
};

export { Card };
