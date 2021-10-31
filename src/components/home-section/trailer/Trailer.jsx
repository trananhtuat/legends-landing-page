import { useRef, useEffect } from 'react'

import { bg3, trailerImg } from '../../../assets/images'
import HomeSection from '../HomeSection'

import './trailer.scss'

const Trailer = props => {

    const iframeRef = useRef(null)

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    }, [])

    return (
        <HomeSection
            className={`trailer ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay trailer__content"
            bgImage={bg3}
        >
            <div className="trailer__content__img">
                <img src={trailerImg} alt="" />
            </div>
            <div className="trailer__content__info">
                <div className="title">
                    <span>Compete With</span>
                    <h2 className="main-color">Friends</h2>
                </div>
                <div className="video">
                    <iframe
                        ref={iframeRef}
                        width="100%"
                        title="trailer"
                        src="https://www.youtube.com/embed/TFzkbos0oeo"
                    ></iframe>
                </div>
            </div>
        </HomeSection>
    )
}

export default Trailer
