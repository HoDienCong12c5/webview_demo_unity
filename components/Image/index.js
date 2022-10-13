import React from 'react'
import Image from 'next/image'
const ImageBase = ({
  src,
  alt = 'Picture of the author',
  quality = 50,
  width = 50,
  height = 50,
  fullSize = false,
  ...props
}) => {
  return (
    <div
      style={{
        width: fullSize ? '100%' : width,
        height: fullSize ? '100%' : height,
      }}
    >
      <Image
        // loader={imgLoading}
        src={src}
        alt={alt}
        quality={quality}
        width={'100%'}
        height={'100%'}
        sizes={'min-width: 100%'}
        {...props}
      />
    </div>

  // <div>sdfghsd
  //   <img src={src}/>
  // </div>
  )
}
export default ImageBase
