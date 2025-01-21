import React from 'react';
import {Heading, ScrollableScreen} from '../../styles';
import {MoviesCarousel} from '../../components/MoviesCarousel';
import {CategorySection} from './styled';
import {DefaultTheme} from 'styled-components/native';
import {FontContext} from './FontContext';

const discoverScreenData: {
  title: string;
  genreId: number;
  style: keyof DefaultTheme['fonts'];
}[] = [
  {
    title: 'Adventures',
    genreId: 12,
    style: 'anton',
  },
  {
    title: 'Animation',
    genreId: 16,
    style: 'jersey15',
  },
  {
    title: 'Drama',
    genreId: 18,
    style: 'smoochSans',
  },
];

export const Discover = () => {
  return (
    <ScrollableScreen>
      {discoverScreenData.map(section => (
        <FontContext.Provider value={section.style} key={section.genreId}>
          <CategorySection>
            <Heading>{section.title}</Heading>
            <MoviesCarousel genreId={section.genreId} />
          </CategorySection>
        </FontContext.Provider>
      ))}
    </ScrollableScreen>
  );
};
