import select from 'select-dom';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager';

function init(): void {
	for (const author of select.all('.js-navigation-container a.commit-author')) {
		author.pathname = location.pathname;
	}
}

void features.add(import.meta.url, {
	include: [
		pageDetect.isRepoCommitList,
	],
	init,
});
