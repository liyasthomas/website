import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyBlog extends PolymerElement {
	static get template() {
		return html `
			<style include="app-grid-style">
			</style>
			<style include="shared-styles">
				@media all and (min-width: 961px) {
					:host {
						--app-grid-columns: 4;
						--app-grid-expandible-item-columns: 2;
					}
					.item:nth-child(5n+3) {
						@apply --app-grid-expandible-item;
					}
				}
				.item, .item:hover {
					box-shadow: none;
				}
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<iron-ajax auto url="https://api.tumblr.com/v2/blog/liyasthomas.tumblr.com/posts/photo?api_key=k0Zl9Xz2V8rZ0TiBJmV5mREM9KUEieE0AkAx0cvbKJpbkwxN4p" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class="grid actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class="grid error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-if" if="{{!error0}}">
				<div class="grid">
					<div class="actions flex-justified">
						<div class="title">
							tumblr
						</div>
					</div>
				</div>
				<div class="grid app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[ajaxResponse0.response.posts]]" as="posts">
						<a class="item" href="{{posts.post_url}}" target="_blank" rel="noopener">
							<div class="container">
								<div class="flexchild flex-vertical" hidden="{{posts.photos.0.original_size.url}}">
									<iron-image class="bg" preload fade sizing="contain" src="{{posts.photos.0.original_size.url}}" alt="{{sub.title}}" hidden="{{!posts.photos.0.original_size.url}}"></iron-image>
								</div>
							</div>
							<paper-ripple></paper-ripple>
						</a>
					</template>
				</div>
				<div class="grid actions flex-center-center">
					<a href="http://liyasthomas.tumblr.com" target="_blank" rel="noopener">
						<paper-button class="secondary" raised aria-label="View all">Visit tumblr</paper-button>
					</a>
				</div>
			</template>
		`;
	}

	attached() {
		this._updateGridStyles = this._updateGridStyles || function () {
			this.updateStyles();
		}.bind(this);
		window.addEventListener('resize', this._updateGridStyles);
	}

	detached() {
		window.removeEventListener('resize', this._updateGridStyles);
	}

	tryAgain() {
		this.$.ajax0.generateRequest();
	}
}

window.customElements.define('my-blog', MyBlog);
