import { BaseTemplate } from 'templates';
import { Heading, Search, CardList, ShowWhen, Animation } from 'components';

import { useSearch } from 'hooks';

import * as S from './styles';

const HomeTemplate = () => {
  const { data, isFetching } = useSearch();

  return (
    <BaseTemplate>
      <Heading>Explore the Star Wars Universe</Heading>
      <Search label="Explore by" placeholder="Ex: Luke" />

      <S.Results>
        <ShowWhen condition={isFetching}>
          <S.Wrapper>
            <Animation label="Fetching..." animation="loading" speed={3} />
          </S.Wrapper>
        </ShowWhen>

        <ShowWhen condition={!isFetching && !data.length}>
          <S.Wrapper>
            <Animation label="No results" animation="no-result" />
          </S.Wrapper>
        </ShowWhen>

        <ShowWhen condition={!isFetching && !!data.length}>
          <CardList items={data} />
        </ShowWhen>
      </S.Results>
    </BaseTemplate>
  );
};

export { HomeTemplate };
