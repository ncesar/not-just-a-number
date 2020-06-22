import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './styled';
import { CurrentProps } from './types';

export const Header: React.FC = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [date, setDate] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state`,
      )
      .then((res) => {
        const totalBrazilDeaths = res.data.results.reduce(
          (prev: string, curr: CurrentProps) => prev + curr.deaths,
          0,
        );
        const date = res.data.results[20].date;
        const objDate = new Date(date);
        setConfirmed(totalBrazilDeaths);
        setDate(objDate.toLocaleDateString());
      });
  }, []);
  return (
    <HeaderWrapper>
      <h1>Não são apenas números</h1>
      <p>
        O COVID-19 já matou mais de{' '}
        <strong>
          {confirmed.toLocaleString()} mil brasileiros(atualizado em {date}
          <span style={{ fontSize: 11 }}>
            {' '}
            via{' '}
            <a
              href="https://bit.ly/mensagem-info19"
              target="_blank"
              rel="noopener noreferrer"
            >
              INFO-19 WhatsApp chatbot
            </a>
          </span>
          )
        </strong>
        , um número que desafia a compreensão humana. Este site foi criado com o
        objetivo de ajudar os visitantes a entenderem a{' '}
        <strong>escala massiva</strong> desse evento, colocando a foto de uma
        pessoa, simulando que a mesma foi vítima do COVID-19. É o meu objetivo
        tentar fazer que o visitantes vejam a escala do vírus como mais que um
        simples número.
      </p>
      <p>
        <strong>
          Todas as imagens utilizadas neste site foram geradas por um computador
          e nenhuma delas existe ou já existiu como ser humano.{' '}
        </strong>
        Elas foram geradas de forma aleatória, sem seguir nenhuma regra de cor,
        gênero ou qualquer outra condição. Saiba mais da inspiração para a
        criação deste site e como ele foi criado{' '}
        <Link to="/about">clicando aqui.</Link>
      </p>
      <p>
        Conforme você for rolando a página para baixo,{' '}
        <strong>tente suspender sua descrença</strong> em pensar que são apenas
        imagens virtuais e considere cada pessoa como real e o significado que
        ela pode ter simbolizado - a vida em que viveram, a maneira como
        morreram e a família que deixaram para trás.
      </p>
    </HeaderWrapper>
  );
};
