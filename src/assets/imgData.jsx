import hero from './imgs/hero.jpg'

const ImgData = (img) => {
    const images = {
        hero,
    }
    return images[img]
}

export default ImgData;