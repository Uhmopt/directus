// Get the API root URL
const path = window.location.pathname;
const parts = path.split('/');
const adminIndex = parts.indexOf('admin');
const apiRootPath = 'https://worksdomain.nl/public/' + parts.slice(0, adminIndex).join('/') + '/';
console.log(apiRootPath, 'apiPath');
// Default state
export default {
	hydrated: false,
	hydratingError: null,
	latency: [],
	currentUser: {},
	bookmarks: [],
	sidebars: {
		nav: false,
		info: false
	},
	queue: [],
	currentProjectKey: null,
	projects: null,
	apiRootPath
};
