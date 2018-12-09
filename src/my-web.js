/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyWeb extends PolymerElement {
	static get template() {
		return html `
      <style include="app-grid-style">
      </style>
      <style include="shared-styles">
        :host {
          display: block;
          --app-grid-item-height: 100%;
        }
				@media all and (min-width: 0) and (max-width: 360px) {
					:host {
						--app-grid-columns: 1;
						--app-grid-gutter: 16px;
						--app-grid-item-height: 90vw;
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
						--app-grid-item-height: 80vw;
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
						--app-grid-item-height: 40vw;
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
						--app-grid-item-height: 20vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 60vw;
					}
					.item:nth-child(9n+2) {
						@apply --app-grid-expandible-item;
					}
					.item:nth-child(9n+4) {
						@apply --app-grid-expandible-item;
					}
					.item:nth-child(9n+9) {
						@apply --app-grid-expandible-item;
					}
				}
      </style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image class="bg" preload fade sizing="contain" src="../images/assets/projects/web.svg"  alt="Banner"></iron-image>
			</div>
			<iron-ajax auto url="../data/web_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class\$="[[getUIType(UI)]] actions flex-center-center" hidden\$="[[!loading0]]">
					<paper-spinner-lite active\$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class\$="[[getUIType(UI)]] error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.web]]" as="web">
				<div class\$="[[getUIType(UI)]] actions flex-justified">
					<div class="title">
						<iron-icon class\$="[[_computeFgClass(web.color)]] big" icon="my-icons:{{web.icon}}"></iron-icon>{{web.title}}<span> ({{web.sub.length}})</span>
					</div>
					<paper-icon-button
							hidden\$="{{!wideLayout}}"
							toggles
							active="{{UI}}"
							icon\$="my-icons:[[getUIIcon(UI)]]"
							aria-label="Toggle Grid/List">
					</paper-icon-button>
				</div>
				<div class\$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[web.sub]]" as="sub">
						<div class\$="[[_computeBgClass(sub.color)]] item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button aria-label="Info">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button icon="my-icons:{{sub.icon}}" aria-label="Icon">{{sub.info}}</paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class\$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{web.link}}">
						<paper-button class\$="[[_computeBgClass(web.color)]]" aria-label="View all">View all projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.similar]]" as="similar">
				<div class\$="[[getUIType(UI)]] actions">
					<div class="title">
						<iron-icon class\$="[[_computeFgClass(similar.color)]] big" icon="my-icons:{{similar.icon}}"></iron-icon>{{similar.title}}
					</div>
				</div>
				<div class\$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[similar.sub]]" as="sub">
						<div class\$="[[_computeBgClass(sub.color)]] item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button aria-label="Info">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button icon="my-icons:{{sub.icon}}" aria-label="Icon">{{sub.info}}</paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</div>
				<div class\$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{similar.link}}">
						<paper-button class\$="[[_computeBgClass(similar.color)]]" aria-label="View all">View all {{similar.title}} projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
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

	getUIType(UI) {
		return UI ? 'list' : 'grid';
	}

	getUIIcon(icon) {
		return icon ? 'dashboard' : 'view-agenda';
	}

	_computeBgClass(color) {
		return color + '-bg';
	}

	_computeFgClass(color) {
		return color + '-fg';
	}
}

window.customElements.define('my-web', MyWeb);
