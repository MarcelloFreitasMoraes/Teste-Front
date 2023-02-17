import MapaBR from "@/global/utils/mapaBrasil";
import { CardComponent } from "@/global/components/Card";
import axios from "axios";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import * as S from "@/styles/styles";
import { TypographicComponent } from "@/global/components/Typographic";

export default function Home() {
    const [data, setData] = useState<unknown | ArrayLike<unknown>>([]);
    const [resposta, setResposta] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios
            .get(`https://temperatura-brasil-default-rtdb.firebaseio.com/state.json/`)
            .then((response) => {
                setData(Object.entries(response.data));
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }, []);

    const onStates = (id: string) => {
        axios
            .get(
                `https://temperatura-brasil-default-rtdb.firebaseio.com/state/${id}.json/`
            )
            .then((response) => {
                setResposta(response.data);
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    };

    return (
        <S.Container>
            <Head>
                <title>Mapa Brasil | Home</title>
                <meta name="description" content="Teste Projeto" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <S.Content>
                <div onClick={() => setOpen(false)}>
                    <TypographicComponent title={"Temperaturas Brasil"} large />
                    <MapaBR data={data} onStates={onStates} />
                    {open && resposta && (
                        <S.CardContainer>
                            <CardComponent data={resposta} />
                        </S.CardContainer>
                    )}
                </div>
            </S.Content>
        </S.Container>
    );
}
