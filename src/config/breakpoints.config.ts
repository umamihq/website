/**
 * 480px
 * 640px
 * 768px
 * 1024px
 * 1280px
 * 1366px
 */

interface Size {
    mobile: string
    tablet: string
    tabletM: string
    laptop: string
    desktop: string
}

export const deviceBreakpoints: Size = {
    mobile: '480px',
    tablet: '768px',
    tabletM: '1024px',
    laptop: '1600px',
    desktop: '1800px',
}

export const device = {
    mobile: `(max-width: ${deviceBreakpoints.mobile})`,
    tablet: `(max-width: ${deviceBreakpoints.tablet})`,
    tabletM: `(max-width: ${deviceBreakpoints.tabletM})`,
    laptop: `(max-width: ${deviceBreakpoints.laptop})`,
    desktop: `(max-width: ${deviceBreakpoints.desktop})`,
}

