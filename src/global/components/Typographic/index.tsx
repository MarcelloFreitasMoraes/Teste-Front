import { IcontentProps } from '@/global/@types/type';
import * as S from './styles'


export function TypographicComponent({
  large,
  medium,
  regular,
  small,
  description,
  title,
  text,
  primary
}: IcontentProps) {

  return (
    <>
      {large && <S.Large primary={primary}>{title}</S.Large>}
      {medium && <S.Medium primary={primary}>{title}</S.Medium>}
      {regular && <S.Regular primary={primary}>{title}</S.Regular>}
      {small && <S.Small primary={primary}>{title}</S.Small>}
      {description && <S.Description primary={primary}><S.Color>{title}</S.Color>{text}</S.Description>}
    </>
  );
}
