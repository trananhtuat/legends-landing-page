import './section.scss'

const Section = props => {
    return (
        <div className={`section ${props.className}`}>
            {props.children}
        </div>
    )
}

export const SectionContent = props => {

    const bgImage = props.bgImage ? {
        backgroundImage: `url(${props.bgImage})`
    } : {}

    return (
        <div
            className={`section__content ${props.className}`}
            style={bgImage}
        >
            {props.children}
        </div>
    )
}

export default Section
