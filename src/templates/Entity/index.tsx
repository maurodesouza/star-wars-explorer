import { useRouter } from 'next/router';
import Head from 'next/head';

import { BaseTemplate } from 'templates';
import { Animation, EntityInfo, Heading, ShowWhen } from 'components';

import { Entity } from 'types';
import * as S from './styles';
import { capitalize } from 'utils';

type EntityTemplateProps = Entity;

const EntityTemplate = (data: EntityTemplateProps) => {
  const { isFallback } = useRouter();

  const title = isFallback
    ? 'We are setting up the page for you, wait!'
    : `${capitalize(data.entity)} - ${data.title}`;

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
