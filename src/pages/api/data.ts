import { NextApiRequest, NextApiResponse } from 'next';
import { swapiApi } from 'services';
import { Entities } from 'types';
import { getEndpointEntityPath, getImageUrl } from 'utils';

type RequestQuery = {
  search: string;
  entity: Entities;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search, entity } = req.query as RequestQuery;

  if (req.method !== 'GET')
    return res.status(405).json({
      error: `The method ${req.method} is not supported`,
    });

  if (!entity)
    return res.status(400).json({
      error: 'Please submit the type of content you are looking for!',
    });

  if (!Object.values(Entities).includes(entity))
    return res.status(400).json({
      error: 'Please submit a valid content type!',
    });

  if (!search) return res.status(422).json({ error: 'Please type something!' });

  try {
    const path = getEndpointEntityPath(entity);

    const { data } = await swapiApi.get(`/${path}`, {
      params: {
        search,
      },
    });

    const formatedData = data.results.map(item => {
      const id = item.url.replace(/\D/g, '');

      return {
        id,
        entity,
        label: item.name || item.title,
        image: getImageUrl(entity, id),
      };
    });

    res.json(formatedData);
  } catch (err) {
    console.error(err);

    res
      .status(500)
      .json({ error: 'An error has occurred, try again or come back soon' });
  }
};

export default handler;
