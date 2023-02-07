# react-video-cropper

> react video cropper which crop images from videos

[![NPM](https://img.shields.io/npm/v/react-video-cropper.svg)](https://www.npmjs.com/package/react-video-cropper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-video-cropper
```

## Usage

### 1. Basic usage

```jsx
import VideoCropper from 'react-video-cropper'
import React, { useState } from 'react'
import video from './data/1.mp4'
const App = () => {
  const [imgList, setImgList] = useState([])
  return (
    <>
      <VideoCropper
        videoSrc={video}
        ButtonSize='20px'
        onCheckButton={(i) => {
          setImgList((prev) => [...prev, i])
        }}
      />
      {imgList.map((image) => (
        <img src={image} />
      ))}
    </>
  )
}

export default App
```

## Props

| Name                       |                                Description                                | Default      |
| :------------------------- | :-----------------------------------------------------------------------: | :----------- |
| videoSrc                   |                        video source to play video                         | undefined    |
| height                     |                            Height of compenent                            | video height |
| width                      |                            Width of component                             | video width  |
| className                  |                              css class name                               | undefined    |
| cropAspect                 |                      Aspect ratio for crop selection                      | undefined    |
| onCheckButton              | call back function triger on check button with cropped image as parameter | undefined    |
| onCloseButton              |                call back function trigger on close button                 | undefined    |
| CloseButtonIcon            |              icon/text to show on close button (jsx element)              | cross icon   |
| CheckButtonIcon            |              icon/text to show on check button (jsx element)              | check icon   |
| CloseButtonColor           |                       close button icon/font color                        | `#3da4ed`    |
| CheckButtonColor           |                       check button icon/font color                        | `#3da4ed`    |
| CloseButtonBackgroundColor |                       clode button background color                       | `white`      |
| CheckButtonBackGroundColor |                       check button background color                       | `white`      |
| ButtonSize                 |                      size of close and check button                       | `20px`       |

## License

MIT © [srjchauhan](https://github.com/srjchauhan)
