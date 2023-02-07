import React, { useState, useRef } from 'react'

import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { ButtonSection } from './utils/StyledComponent'
import { CheckButton, CloseButton } from './utils'

export default function VideoCropper({
  videoSrc,
  height,
  width,
  className,
  cropAspect = undefined,
  onCheckButton,
  onCloseButton,
  CloseButtonIcon,
  CheckButtonIcon,
  CloseButtonColor = '#3da4ed',
  CheckButtonColor = '#3da4ed',
  CloseButtonBackgroundColor = 'white',
  CheckButtonBackGroundColor = 'white',
  ButtonSize = '20px'
}) {
  const [imgSrc, setImgSrc] = useState()
  const videoRef = useRef(null)
  const [controls, setControls] = useState(true)
  const [crop, setCrop] = useState()
  const [innerHeight, setInnerHeight] = useState(0)
  const onComplete = (c) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const video = videoRef.current
    const scaleX = video.videoWidth / video.clientWidth
    const scaleY = video.videoHeight / video.clientHeight

    canvas.width = c.width * scaleX
    canvas.height = c.height * scaleY
    const pixelRatio = window.devicePixelRatio
    context.scale(pixelRatio, pixelRatio)
    const cropX = c.x * scaleX
    const cropY = c.y * scaleY
    context.drawImage(
      video,
      cropX,
      cropY,
      c.width * scaleX,
      c.height * scaleY,
      0,
      0,
      c.width * scaleX,
      c.height * scaleY
    )
    const imageData = canvas.toDataURL()
    setImgSrc(imageData)
  }

  const renderSelectionAddon = (state) => {
    if (state.newCropIsBeingDrawn) {
      return
    }
    const checkButtomClick = () => {
      setCrop(undefined)
      setControls(true)
      videoRef.current.play()
      if (typeof onCheckButton === 'function') onCheckButton(imgSrc)
    }
    const closeButtonClick = () => {
      setCrop(undefined)
      setControls(true)
      videoRef.current.play()
      if (typeof onCloseButton === 'function') onCheckButton()
    }

    return (
      <ButtonSection height={innerHeight}>
        <CloseButton
          onClick={closeButtonClick}
          size={ButtonSize}
          color={CloseButtonColor}
          backGroundColor={CloseButtonBackgroundColor}
          icon={CloseButtonIcon}
        />
        <CheckButton
          onClick={checkButtomClick}
          size={ButtonSize}
          color={CheckButtonColor}
          backGroundColor={CheckButtonBackGroundColor}
          icon={CheckButtonIcon}
        />
      </ButtonSection>
    )
  }
  return (
    <ReactCrop
      className={className}
      crop={crop}
      onChange={(_, percentCrop) => {
        setCrop(percentCrop)
        setInnerHeight(`${_.height}px`)
      }}
      onComplete={(c) => onComplete(c)}
      aspect={cropAspect}
      disabled={controls}
      renderSelectionAddon={renderSelectionAddon}
    >
      <video
        disablePictureInPicture={true}
        controls={controls}
        onPause={() => setControls(false)}
        height={height}
        width={width}
        ref={videoRef}
        src={videoSrc}
      />
    </ReactCrop>
  )
}
