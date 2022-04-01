import axios from 'axios';

import { SWAPIEntity } from 'types';
import { getEntityDataFromUrl, getImageUrl } from 'utils';

const populateEntityRelationships = async (urls: string[]) => {
  const results = await Promise.all(
    urls.map(async url => {
      const { id, entity } = getEntityDataFromUrl(url);

      const { data } = await axios.get<SWAPIEntity>(url);

      const formatedData = {
        id,
        entity: entity,
        title: (data.name || data.title)!,
        image: getImageUrl(entity, id),
      };

      return formatedData;
    })
  );

  return results;
};

export { populateEntityRelationships };
