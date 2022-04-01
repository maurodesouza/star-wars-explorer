import { GetStaticPaths, GetStaticProps } from 'next';
import { swapiApi } from 'services';

import { EntityTemplate } from 'templates';
import { Entities, Entity as EntityType, SWAPIGetAllResponse } from 'types';
import { config } from 'app';

import {
  getEndpointEntityPath,
  getEntityDataFromUrl,
  getEntityRelationships,
  getImageUrl,
  populateEntityRelationships,
  slugfy,
} from 'utils';

type Params = {
  slug: [Entities, string];
};

type Path = {
  params: Params;
};

type Response = EntityType & {
  slug: string;
};

type EntityProps = Response;

const Entity = ({ slug, ...rest }: EntityProps) => {
  return <EntityTemplate key={slug} {...rest} />;
};

export default Entity;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.entries(config['pre-build']).reduce(
    (arr, [entity, slugs]) => {
      const paths = slugs.map(slug => ({
        params: { slug: [entity, slug] as [Entities, string] },
      }));

      return [...arr, ...paths];
    },
    [] as Path[]
  );

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Response> = async ({ params }) => {
  const queries = (params as Params).slug;
  const [entity = '', slug = ''] = queries;

  const isValidEntity = Object.values(Entities).includes(entity as Entities);
  const isValidQueryLength = queries.length === 2;

  const canMakeRequest = isValidEntity && isValidQueryLength && entity && slug;

  if (!canMakeRequest) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  try {
    const [search] = slug.split('-');

    const path = getEndpointEntityPath(entity);

    const { data } = await swapiApi.get<SWAPIGetAllResponse>(`/${path}`, {
      params: {
        search,
      },
    });

    const finded = data.results.find(
      entity => slugfy((entity.name || entity.title)!) === slug
    );

    if (!finded) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }

    const relationships: string[] = getEntityRelationships(entity);

    const urls = relationships.reduce((arr, key) => {
      const item = finded[key];

      const result = Array.isArray(item) ? item : [item];

      return [...arr, ...result];
    }, [] as string[]);

    const fieldsToExclude = [
      'edited',
      'created',
      'name',
      'title',
      'url',
    ].concat(relationships);

    const relations = await populateEntityRelationships(urls);
    const { id } = getEntityDataFromUrl(finded.url);

    const title = (finded.name || finded.title)!;
    const image = getImageUrl(entity, id);

    fieldsToExclude.forEach(field => Reflect.deleteProperty(finded, field));

    console.info(`generate page for slug /${slug}`);

    return {
      props: {
        id,
        entity,
        title,
        image,
        extras: finded,
        relations,
        slug,
      },
    };
  } catch (err) {
    console.error(err);

    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};
