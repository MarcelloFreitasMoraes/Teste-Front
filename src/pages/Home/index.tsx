import MapaBR from "@/global/utils/mapaBrasil";
import { CardComponent } from "@/global/components/Card";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as S from "@/styles/styles";
import { TypographicComponent } from "@/global/components/Typographic";
import { API } from "@/global/config";

export default function Home() {
    const [data, setData] = useState<unknown | ArrayLike<unknown>>([]);
    const [resposta, setResposta] = useState();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        API.get(`/state.json/`)
            .then((response) => {
                setData(Object.entries(response.data));
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error.toJSON());
            });
    }, []);

    const onStates = (id: string) => {
        API.get(`/state/${id}.json/`)
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
                <div>
                    <TypographicComponent title={"Temperaturas Brasil"} large />
                    <MapaBR data={data} onStates={onStates} />
                </div>
                {open && resposta && (
                    <S.CardContainer>
                        <CardComponent data={resposta} />
                    </S.CardContainer>
                )}
            </S.Content>
        </S.Container>
    );
}
