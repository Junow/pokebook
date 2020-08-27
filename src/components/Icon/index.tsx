import React from 'react'
import styled from 'styled-components'
import * as icons from './svg'

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[]

export type IconProps = {
  icon: IconType;
  color?: string;
  size?: string | number;
  onClick?: () => void;
};

const S = { Container: styled.div`
    cursor: pointer;
    display: flex;
  ` }
const Icon = ({
  icon,
  color = 'currentColor',
  size = '2rem',
  onClick = undefined,
}: IconProps) => {
  const SVGIcon = icons[icon]
  return (
    <S.Container onClick={onClick}>
      <SVGIcon fill={color} width={size} height={size} />
    </S.Container>
  )
}

export default Icon
