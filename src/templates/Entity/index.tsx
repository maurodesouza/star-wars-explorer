import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import Head from 'next/head';

import { BaseTemplate } from 'templates';
import { Animation, EntityInfo, Heading, ShowWhen } from 'components';

import { capitalize } from 'utils';
import { events } from 'app';

import { Entity } from 'types';
import * as S from './styles';

type EntityTemplateProps = Entity;

const EntityTemplate = (data: EntityTemplateProps) => {
  const { isFallback } = useRouter();

  const title = isFallback
    ? 'We are setting up the page for you, wait!'
    : `${capitalize(data.entity)} - ${data.title}`;

  useEffect(() => {
    events.achievements.add(data);

    toast.dismiss();
  }, [data]);

  return (
    <BaseTemplate>
      <Head>
        <title>{title}</title>
      </Head>

      <Heading>{title}</Heading>

      <ShowWhen condition={!isFallback && !!data}>
        <EntityInfo {...data} />
      </ShowWhen>

      <ShowWhen condition={isFallback}>
        <S.Results>
          <S.WrapperLoading>
            <Animation animation="loading" speed={3} />
          </S.WrapperLoading>
        </S.Results>
      </ShowWhen>
    </BaseTemplate>
  );
};

export { EntityTemplate };
