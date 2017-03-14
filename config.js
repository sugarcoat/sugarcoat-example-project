var library = {
    settings: {
        title: 'Sugarcoat Pattern Library',
        graphic: 'library/images/sugarcoat-logo.png',
        dest: './documentation',
        template: {
            assets: [
                'sugarcoat',
                'library/images/octicons-external-link.svg',
                'library/images/sugarcoat-logo.png'
            ]
        },
        prefix: {
            assets: [
                'library/dist/*.css'
            ]
        }
    },
    sections: [
        {
            title: 'Colors',
            files: 'library/styles/config/colors.css',
            mode: 'variable',
            template: 'section-color'
        },
        {
            title: 'Typography',
            files: 'library/styles/base/typography.css',
            mode: 'variable',
            template: 'section-typography'
        },
        {
            title: 'Variables',
            files: 'library/styles/config/variables.css',
            mode: 'variable'
        },
        {
            title: 'Mixins',
            files: 'library/styles/config/mixins.css'
        },
        {
            title: 'Elements',
            files: 'library/styles/base/buttons.css'
        },
        {
            title: 'Components',
            files: [
                'library/styles/notification/*.css',
                'components/*.html'
            ]
        }
    ]
};

module.exports = library;