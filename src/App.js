import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
// import { PersonProp } from './types';
// import { useInfiniteScroll } from 'react-infinite-scroll-hook';

function App() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPeopleImages = () => {
    axios.get(`https://randomuser.me/api/?results=5&nat=br`).then((res) => {
      const result = res.data.results;
      setPeople([...people, ...result]);
      setLoading(false);
    });
    const removedDuplicatedPeople = people.filter(
      (ele, ind) =>
        ind ===
        people.findIndex((elem) => elem.picture.medium === ele.picture.medium),
    );
    setFilteredPeople(removedDuplicatedPeople);
    console.log(removedDuplicatedPeople, 'pp');
  };
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={people.length}
        next={() => fetchPeopleImages()}
        hasMore={true}
        loader={<h4>Carregando...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      ></InfiniteScroll>
      {filteredPeople.map((people, i) => (
        <img
          key={`${people.gender}+${i}`}
          src={people.picture.medium}
          alt="Imagem de uma pessoa"
        />
      ))}
      {/* {fetchPeopleImages()} */}
      <button onClick={() => fetchPeopleImages()}>click</button>
    </div>
  );
}

export default App;
