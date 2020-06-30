import React from 'react';
import { Link } from 'react-router-dom';
import { AboutWrapper, TextWrapper } from './styled';

// import profilerwrapper
import { ProfilerWrapper } from './ProfilerWrapper';

export const About: React.FC = () => {
  return (
    <ProfilerWrapper id="All about components">
      {/* PROFILER - 1. We just need to wrap the component that we want to track and set an ID(name) */}
      <AboutWrapper>
        <Link to="/">Voltar a página inicial</Link>
        <h1>Sobre esse projeto</h1>
        <ProfilerWrapper id="TextWrapper">
          {/* PROFILER - 2. We can even track components that are nested */}
          <TextWrapper>
            <p>
              À medida que observamos a contagem de mortes aumentar a cada dia,
              acabamos ficamos entorpecidos e começamos a ignorar os números.
              Mesmo que seja visível intelectualmente que cada um desses números
              representa uma pessoa real, é absolutamente impossível compreender
              completamente o dano que o COVID-19 vem causando.
            </p>
            <p>
              Um memorial que nomeie todos os mortos, como os criados após a
              Guerra do Vietnã e o 11 de setembro, nunca será possível para o
              COVID. Muitos morreram sozinhos em casa, sem nem ao menos terem
              sido testados. Os registros de óbito do governo fornecem dados
              incompletos e os resultados dos testes de laboratório são anônimos
              ao público em sua grande parte.
            </p>
            <p>
              Como podemos lamentar a morte de pessoas cujos rostos nunca
              veremos e cujos nomes nunca vamos ouvir? Como podemos compreender
              a escala disso?
            </p>
            <p>
              Espero que este site ajude os visitantes a entender melhor a crise
              do COVID e a processar melhor a sua dor.
            </p>
          </TextWrapper>
        </ProfilerWrapper>
        <h1 style={{ textAlign: 'left' }}>Como o site foi criado?</h1>
        <TextWrapper>
          <p>
            Todas as fotos do site são do serviço{' '}
            <a
              href="https://randomuser.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              randomuser.me/
            </a>{' '}
            e cada pessoa retratada foi criada com uma inteligência artificial
            seguindo um algoritmo especifico. Infelizmente, por limitação do
            serviço e por falta de dados do governo, não foi possível tentar
            simular as carecterísticas fenótipas das pessoas, então todas as
            pessoas são totalmente aleatórias.
          </p>
          <p>
            Para criar o site em si, eu utilizei o ReactJS como framework. O
            motivo é que eu acredito que seria mais rápido do que fazer em HTML
            padrão mas nem de longe eu cheguei a utilizar todo o potencial do
            React nesse projeto.
          </p>
        </TextWrapper>
        <h1 style={{ textAlign: 'left' }}>Quem criou?</h1>
        <TextWrapper>
          <p>
            A primeira versão desse site em inglês é{' '}
            <a
              href="https://mkorostoff.github.io/hundred-thousand-faces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              essa(clique aqui)
            </a>
            , que foi criado pelo{' '}
            <a
              href="http://mattkorostoff.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Matt Korostoff
            </a>
            . Assim que eu vi o site dele, achei a ideia genial e quis criar o
            meu terceiro(até essa data) projeto sobre o COVID-19, sendo o
            primeiro o{' '}
            <a
              href="https://liftmaps.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LiftMaps.com
            </a>{' '}
            e o segundo o{' '}
            <a
              href="https://bit.ly/mensagem-info19"
              target="_blank"
              rel="noopener noreferrer"
            >
              INFO-19 WhatsApp chatbot
            </a>
            . E diante dessa situação do COVID-19, eu não busco dinheiro, eu só
            busco ajudar as pessoas e aprimorar o meu conhecimento. Eu busco
            ajudar por que{' '}
            <strong>
              pessoas próximas de mim sabem o poder devastador que o COVID-19
              tem, e consequentemente, eu também.
            </strong>
          </p>
          <p>
            O meu nome é César Nascimento, tenho 22 anos, sou estudante de
            Ciência da Computação e sou apaixonado em criar projetos fora do meu
            horário de trabalho. Eu também crio vídeos para o YouTube de
            programação no{' '}
            <a
              href="https://youtube.com/ncesar"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube.com/ncesar
            </a>{' '}
            e faço postagens no meu blog também sobre programação, no{' '}
            <a
              href="https://ncesar.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ncesar.com
            </a>
          </p>
          <p>
            Este projeto é open-source, contribua ou explore o código em:{' '}
            <a
              href="https://github.com/ncesar/not-just-a-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ncesar/not-just-a-number
            </a>
          </p>
        </TextWrapper>
      </AboutWrapper>
    </ProfilerWrapper>
  );
};
