import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Button } from './StyledComponent'
import React from 'react'

export const CheckButton = ({
  onClick,
  size,
  color,
  backGroundColor,
  icon
}) => {
  return (
    <Button
      size={size}
      onClick={onClick}
      color={color}
      backGroundColor={backGroundColor}
    >
      {icon ? icon : <AiOutlineCheck size={size} />}
    </Button>
  )
}

export const CloseButton = ({
  onClick,
  size,
  color,
  backGroundColor,
  icon
}) => (
  <Button
    size={size}
    onClick={onClick}
    color={color}
    backGroundColor={backGroundColor}
  >
    {icon ? icon : <AiOutlineClose size={size} />}
  </Button>
)
