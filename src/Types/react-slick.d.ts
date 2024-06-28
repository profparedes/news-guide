declare module 'react-slick' {
  import { FC } from 'react'

  export interface SliderSettings {
    dots?: boolean
    slidesToShow?: number
    slidesToScroll?: number
    arrows?: boolean
    customPaging?: (i: number) => JSX.Element
  }

  const Slider: FC<SliderSettings>

  export default Slider
}
