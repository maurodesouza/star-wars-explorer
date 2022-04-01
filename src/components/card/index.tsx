import { TouchEvent, useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { Image, FavoriteHandle } from 'components';
import { slugfy } from 'utils';

import { events } from 'app';
import { Entities, Entity, Partials } from 'types';

import * as S from './styles';

export type CardProps = Omit<
  Partials<Entity, 'entity'>,
  'relations' | 'extras'
>;

const Card = (data: CardProps) => {
  const { entity = Entities.CHARACTERS, image, title } = data;

  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isTouchscreen, setIsTouchscreen] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleRedirect = () => router.push(href);

  const onMouseUp = () => {
    if (isTouchscreen) {
      return;
    }

    handleRedirect();
  };

  const onTouch = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsFocused(false);

      return;
    }

    if (isFocused) {
      events.off('touchend', onTouchEnd);
      handleRedirect();

      return;
    }

    setIsFocused(true);
    events.on('touchend', onTouchEnd);
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (containerRef.current!.contains(e.target as Node)) return;

    handleRemoveFocused();
  };

  const handleRemoveFocused = () => {
    setIsFocused(false);
    events.off('touchend', onTouchEnd);
  };

  useEffect(() => {
    setIsTouchscreen(!!window.matchMedia('(any-pointer: coarse)').matches);
  }, []);

  const href = `/universe/${entity}/${slugfy(title)}`;

  return (
    <S.Container
      ref={containerRef}
      role="link"
      onMouseUp={onMouseUp}
      onTouchEnd={onTouch}
      onTouchMove={() => !isDragging && setIsDragging(true)}
    >
      <Link href={href} passHref>
        <S.Hide />
      </Link>

      <Image image={image} alt={title} />

      <S.Content>
        <S.Label>{title}</S.Label>

        <S.Wrapper>
          <FavoriteHandle {...data} entity={entity} />
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};

export { Card };
