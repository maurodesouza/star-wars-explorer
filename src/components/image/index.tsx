import { useEffect, useState } from 'react';
import { ImageNotSupported as NoImageIcon } from '@styled-icons/material';

import NextImage from 'next/image';

import * as S from './styles';

export type ImageProps = {
  image: string;
  alt: string;
};

const Image = ({ image, alt }: ImageProps) => {
  const [noHasImage, setNoNasImage] = useState(false);

  useEffect(() => {
    setNoNasImage(false);
  }, [image]);

  return (
    <>
      {!noHasImage ? (
        <NextImage
          onError={() => setNoNasImage(true)}
          src={image}
          layout="fill"
          objectFit="cover"
          alt={alt}
        />
      ) : (
        <S.Container>
          <S.Wrapper>
            <NoImageIcon size={56} />
            <S.Text>
              Image
              <br />
              no found
            </S.Text>
          </S.Wrapper>
        </S.Container>
      )}
    </>
  );
};

export { Image };
