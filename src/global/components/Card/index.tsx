import { CardProps } from '@/global/@types/type';
import React from 'react'
import { TypographicComponent } from '../Typographic';
import * as S from './styles'

export function CardComponent({ data }: CardProps) {

    return (
        <S.Container >
            <S.Border>
                <TypographicComponent
                    title={'Estado: '}
                    text={`${data?.name}`}
                    description />
                <TypographicComponent
                    title={'Sigla: '}
                    text={`${data?.sigla}`}
                    description />
                <TypographicComponent
                    title={'Temperatura: '}
                    text={`${data?.t_2mC}`}
                    description />
            </S.Border>
        </S.Container>
    )
}