import React from 'react';
import { Link } from 'react-router-dom';

const MediaPanel = (props) => {
    return (
        <div className='section-container'>
            { props.label ? <p className='label-lrg'>{props.label}</p> : null }
            <div className={'media-container-' + props.containerSize + '' }>
                { props.images.map(image => {
                    return (
                        <Link key={image.imageSrc} className='Links' to='/products'>
                        <div className={'image-container-' + props.containerSize + '' }>
                            <img src={image.imageSrc} alt='models' />
                            { image.overlayItems ? image.overlayItems : null }
                            { image.label ? <p className='image-label'>{image.label}</p> : null }
                        </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default MediaPanel;