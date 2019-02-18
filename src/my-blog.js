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
				:host {
					display: block;
					--app-grid-item-height: 100%;

					margin-top: 32px;
				}
				@media all and (min-width: 0) and (max-width: 360px) {
					:host {
						--app-grid-columns: 1;
						--app-grid-gutter: 16px;
						--app-grid-item-height: auto;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 361px) and (max-width: 640px) {
					:host {
						--app-grid-columns: 1;
						--app-grid-gutter: 16px;
						--app-grid-item-height: auto;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 641px) and (max-width: 960px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-gutter: 32px;
						--app-grid-item-height: auto;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 80vw;
					}
					.item:nth-child(5n+3) {
						@apply --app-grid-expandible-item;
					}
				}
				@media all and (min-width: 961px) {
					:host {
						--app-grid-columns: 4;
						--app-grid-gutter: 32px;
						--app-grid-item-height: auto;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 60vw;
					}
					.item:nth-child(5n+3) {
						@apply --app-grid-expandible-item;
					}
				}
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image class="bg" preload fade sizing="contain" src="../images/assets/social/tumblr.svg" alt="Banner"></iron-image>
			</div>
			<iron-ajax auto url="https://api.tumblr.com/v2/blog/liyasthomas.tumblr.com/posts?api_key=k0Zl9Xz2V8rZ0TiBJmV5mREM9KUEieE0AkAx0cvbKJpbkwxN4p" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
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
				<div class="grid app-grid">
					<template is="dom-repeat" items="[[ajaxResponse0.response.posts]]" as="posts">
						<div class="item">
							<a href="{{posts.post_url}}" target="_blank" rel="noopener">
								<div class="container">
									<div class="block top">
										<div class="title">{{posts.title}}</div>
									</div>
									<div class="block mid">
										<div class="description">{{posts.summary}}</div>
									</div>
									<div class="bg flexchild flex-vertical">
									</div>
									<div class="block bottom">
										<div class="info">
											<div class="flexchild">
											</div>
											<div>
												{{posts.note_count}}<iron-icon class="red-fg" icon="my-icons:favorite"></iron-icon>
											</div>
										</div>
									</div>
								</div>
							</a>
						</div>
					</template>
				</div>
				<div class="grid actions flex-center-center">
					<a href="http://liyasthomas.tumblr.com" target="_blank" rel="noopener">
						<paper-button class="secondary" aria-label="View all">View all {{posts.title}}</paper-button>
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
