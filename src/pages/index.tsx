import { TypographicComponent } from '@/global/components/Typographic'
import Head from 'next/head'
import * as S from "@/styles/styles";
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function MyInfo() {
  const { push } = useRouter()

  return (
    <Fragment>
      <Head>
        <title>Mapa Brasil | Clima</title>
        <meta name="description" content="Teste Projeto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Title>
        <TypographicComponent title={'Teste Front-End'} large />
        <S.DescriptGroup>
          <TypographicComponent title={'Fazer um mapa do Brasil Aquele que só mostra os estados'} description />
          <TypographicComponent title={'- Ao clicar em qualquer estado do mapa do Brasil, enviar um GET para alguma API de clima / tempo'} description />
          <TypographicComponent title={'- Exibir na tela as informações do tempo para a região clicada'} description />
        </S.DescriptGroup>
        <S.Button onClick={() => push('/Home')}>
          Continuar
        </S.Button>
      </S.Title>
    </Fragment>
  )
}
