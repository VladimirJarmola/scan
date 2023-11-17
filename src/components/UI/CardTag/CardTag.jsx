import React from 'react';

import classes from './CardTag.module.css';

const CardTag = ({attributes, ...props}) => {
    let content = '';

    switch (true) {
        case (attributes.isAnnouncement):
            content += 'Анонсы и события'
            break
        case (attributes.isDigest):
            content += 'Сводки новостей'
            break
        case (attributes.isTechNews):
            content += 'Технические новости'
            break
        // тк сервер на всех новостях возвращает фэлс, на все новости выведу плашку "технические новости"
        default:
            content += 'Технические новости'
            break
    }

    return (
        <div className={classes.content} {...props}>
            {content}
        </div>
    )
}

export default CardTag;
