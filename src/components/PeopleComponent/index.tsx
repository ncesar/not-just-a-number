import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {
  PeopleWrapper,
  PeopleImageWrapper,
  PeopleImage,
  Counter,
} from './styled';
import { PeopleProps } from './types';

export const People: React.FC = () => {
  const [people, setPeople] = useState<PeopleProps[]>([]);
  const [page, setPage] = useState(0);

  const fetchPeopleImages = () => {
    axios
      .get(
        `https://randomuser.me/api/?inc=picture&results=57&page=${page}&seed=d`,
      )
      .then((res) => {
        const result = res.data.results;
        setPeople([...people, ...result]);
        setPage((prev) => prev + 1);
      });
  };

  useEffect(() => {
    fetchPeopleImages();
    // eslint-disable-next-line
  }, []);

  const removedDuplicatedPeople = people.filter(
    (ele, ind) =>
      ind ===
      people.findIndex(
        (elem): boolean => elem.picture.large === ele.picture.large,
      ),
  );

  return (
    <PeopleWrapper>
      <InfiniteScroll
        dataLength={people.length}
        next={() => fetchPeopleImages()}
        hasMore={people.length < 15500 && true}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center', paddingBottom: 50 }}>
            Pois é, em alguns minutos foram mais de 15000 pessoas. 15000
            famílias afetadas, 15000 sonhos interrompidos e{' '}
            <strong>não são apenas números</strong>, são muito mais que isso!
          </p>
        }
      >
        {/* small workaround to try to remove repeated people since randomuser api provide repeated images :( */}
        {people.length < 200
          ? removedDuplicatedPeople.map((people, i) => (
              <PeopleImageWrapper key={i}>
                <PeopleImage
                  src={people.picture.large}
                  alt="Imagem de uma pessoa"
                />
              </PeopleImageWrapper>
            ))
          : people.map((people, i) => (
              <PeopleImageWrapper key={i}>
                <PeopleImage
                  src={people.picture.large}
                  alt="Imagem de uma pessoa"
                />
              </PeopleImageWrapper>
            ))}
      </InfiniteScroll>
      <Counter>{`${people.length.toLocaleString()} pessoas`}</Counter>
    </PeopleWrapper>
  );
};
