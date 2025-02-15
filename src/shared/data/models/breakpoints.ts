export const screens = {
	'x-large-desktop': 1920,
	'medium-desktop': 1150,
	'handset-landscape': 568,
	'handset-portrait': 320,
};

export const breakpoints = {
	// > 1920
	screenXLargeDesktops: `(min-width: ${screens['x-large-desktop']}px)`,

	// 1150 - 1919
	screenMediumDesktops: `(min-width: ${screens['medium-desktop']}px) and (max-width: ${screens['x-large-desktop']}px) `,

	// > 1150 portrait and > 1150 landscape
	screenAllDesktops: `(min-width: ${screens['medium-desktop']}px)`,

	// < 1149 portrait and < 1149 landscape
	screenAllMobiles: `(max-width: ${screens['medium-desktop'] - 1}px)`,

	// < 1149 portrait
	screenAllMobilesPortrait: `(min-width: ${screens['handset-portrait']}px) and (max-width: ${screens['medium-desktop'] - 1}px) and (orientation: portrait)`,

	// < 1149 landscape
	screenAllMobilesLandscape: `(min-width: ${screens['handset-landscape']}px) and (max-width: ${screens['medium-desktop'] - 1}px) and (orientation: landscape)`,
};

export const breakpointMap = [
	breakpoints.screenAllDesktops,
	breakpoints.screenAllMobiles,
	breakpoints.screenAllMobilesLandscape,
	breakpoints.screenAllMobilesPortrait,
	breakpoints.screenMediumDesktops,
	breakpoints.screenXLargeDesktops,
]
