var library = {
    dest: './documentation',
    copy: [
        'sugarcoat',
        'library/images/**'
    ],
    include: {
        css: [
            'library/dist/*.css'
        ]
    },
    display: {
        graphic: 'library/images/sugarcoat-logo.png',
        title: 'Sugarcoat Pattern Library',
        headingText: 'Pattern Library'
    },
    template: {
        selectorPrefix: '.hello',
        partials: {
            'head': 'documentation/template/head.hbs'
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