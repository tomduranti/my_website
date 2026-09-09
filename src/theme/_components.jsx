export const components = {
    MuiCssBaseline: {
        styleOverrides: {
            button: {
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
            },
            a: {
                textDecoration: 'none',
                color: 'inherit',
            },
            'ul, ol': {
                listStyle: 'none',
                margin: 0,
                padding: 0,
            },
        },
    },
    MuiTypography: {
        defaultProps: {
            variantMapping: {
                detailedProjectName: 'h3',
                detailedSectionTitle: 'h3',
                subtitle1: 'h4',
                detailedProjectDescription: 'p',
                detailedStackDescription: 'span',
            },
        },
    }
}