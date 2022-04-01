import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils/test/helpers';

import { Entities } from 'types';

import { mock } from './mock';
import { EntityDetails, EntityDetailsProps } from '.';

const dataMock: EntityDetailsProps = {
  ...mock,
  id: '1',
  title: 'label',
  entity: Entities.CHARACTERS,
};

describe('<EntityDetails />', () => {
  it('should render the entity details styles correct', () => {
    const { container } = renderWithProviders(<EntityDetails {...dataMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the entity details component correct', () => {
    renderWithProviders(<EntityDetails {...dataMock} />);

    const image = screen.getByRole('img', { name: dataMock.title });

    expect(image).toBeInTheDocument();

    Object.entries(mock.extras)
      .reduce((arr, [key, value]) => [...arr, `${key}:`, value], [] as string[])
      .forEach(text => {
        const el = screen.getByText(text);

        expect(el).toBeInTheDocument();
      });
  });

  it('should no render content if no extras was passed', () => {
    const { container } = renderWithProviders(
      <EntityDetails {...dataMock} extras={undefined} />
    );

    const component = container.children[0];
    const content = component.children[1];

    expect(content.children.length).toBe(0);
  });
});
