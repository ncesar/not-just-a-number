import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {
  PeopleWrapper,
  PeopleImageWrapper,
  PeopleImage,
  Counter,
  PeopleContentWrapper,
} from './styled';
import { PeopleProps } from './types';

export const People: React.FC = () => {
  const [people, setPeople] = useState<PeopleProps[]>([]);
  const [page, setPage] = useState(0);
  const wrapper = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLDivElement>(null);

  const fetchPeopleImages = () => {
    // giving the api some time to breath
    setTimeout(() => {
      axios
        .get(
          `https://randomuser.me/api/?inc=picture&results=57&page=${page}&seed=d`,
        )
        .then((res) => {
          const result = res.data.results;
          setPeople([...people, ...result]);
          setPage((prev) => prev + 1);
        });
    }, 500);
  };

  const handleScroll = () => {
    let eleCounter = 1;
    [...(wrapper.current as HTMLDivElement).querySelectorAll('.people')].find(
      (ele) => {
        let conditionHeight = window.innerHeight - 50;
        let cordinat = ele.getBoundingClientRect().top;
        eleCounter++;
        return conditionHeight < cordinat;
      },
    );
    (counter.current as HTMLDivElement).textContent =
      eleCounter - 1 + ' pessoas';
  };

  useEffect(() => {
    fetchPeopleImages();
    handleScroll();
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
        onScroll={() => handleScroll()}
        hasMore={people.length < 15500 && true}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center', paddingBottom: 50 }}>
            Pois é, em alguns minutos foram mais de 15000 pessoas. 15000
            famílias afetadas, 15000 sonhos interrompidos e{' '}
            <strong>não são apenas números</strong>, eram vidas!
          </p>
        }
      >
        {/* small workaround to try to remove repeated people since randomuser api provide repeated images :( */}
        <PeopleContentWrapper ref={wrapper}>
          {removedDuplicatedPeople.length < 180
            ? removedDuplicatedPeople.map((people, i) => (
                <PeopleImageWrapper key={i} className="people">
                  <PeopleImage
                    src={people.picture.large}
                    alt="Imagem de uma pessoa"
                  />
                </PeopleImageWrapper>
              ))
            : people.map((people, i) => (
                <PeopleImageWrapper key={i} className="people">
                  <PeopleImage
                    src={people.picture.large}
                    alt="Imagem de uma pessoa"
                  />
                </PeopleImageWrapper>
              ))}
        </PeopleContentWrapper>
      </InfiniteScroll>
      <Counter ref={counter}>0</Counter>
    </PeopleWrapper>
  );
};
