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
import {
	setPassiveTouchGestures,
	setRootPath
} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-fab/paper-fab.js';
import './shared-styles.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
	static get template() {
		return html `
      <style include="shared-styles">
        :host {
          display: block;
					--primary-color: #fff;
					--light-primary-color: rgba(0, 0, 0, .05);
					--dark-primary-color: rgba(0, 0, 0, .54);
					--accent-color: var(--paper-pink-a400);
					--light-accent-color: var(--paper-pink-a200);
					--dark-accent-color: var(--paper-pink-500);
					--primary-text-color: rgba(0, 0, 0, .87);
					--secondary-text-color: rgba(0, 0, 0, .38);
					--light-text-color: rgba(0, 0, 0, .12);
					--paper-tabs-selection-bar-color: var(--accent-color);
					--paper-tab-ink: var(--light-text-color);
					--paper-fab-keyboard-focus-background: var(--accent-color);
					--paper-progress-active-color: var(--accent-color);
//					--paper-progress-secondary-color: var(--dark-accent-color);
//					--paper-progress-container-color: var(--light-accent-color);
					color: var(--primary-text-color);
					--iron-icon-height: 26px;
					--iron-icon-width: 26px;
        }
				[hidden] {
					display: none !important;
				}
				app-drawer {
					--app-drawer-scrim-background: rgba(0,0,0,.4);
					font-weight: 700;
					color: var(--secondary-text-color);
					--app-drawer-content-container: {
						@apply --shadow-elevation-12dp;
					}
				}
				.drawer-contents {
					height: 100%;
					overflow-y: auto;
					-webkit-overflow-scrolling: touch;
				}
				paper-icon-item {
					font-weight: 700;
					font-size: 18px;
				}
				span.expand {
					width: calc(100% - 80px);
				}
				.category {
					border-top: 1px solid #eee;
				}
				#home.iron-selected {
					color: #FF2F2F;
				}
				#projects.iron-selected {
					color: #6700DF;
				}
				#about.iron-selected {
					color: #00A3E6;
				}
				app-header {
					background-color: var(--primary-color);
					color: var(--secondary-text-color);
					--app-header-shadow: {
						box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
					};
				}
				app-toolbar paper-icon-button {
					margin: 0 4px;
				}
				[main-title] {
					color: var(--accent-color);
					font-size: 44px;
					font-weight: 700;
					margin-left: 12px;
				}
				[condensed-title] {
					color: var(--accent-color);
					font-size: 22px;
					overflow: hidden;
					text-overflow: ellipsis;
					font-weight: 700;
					margin-left: 16px;
				}
				paper-tabs {
					height: 100%;
					--paper-tab-content-unselected: {
						opacity: 1;
					}
				}
				paper-tab {
        	font-family: "Product Sans", "Roboto", "Noto", sans-serif;
					text-transform: capitalize;
					padding: 0;
					font-size: 18px;
					font-weight: 700;
					padding: 0 16px;
				}
				paper-tab a {
					@apply --layout-horizontal;
					@apply --layout-center-center;
				}
				paper-tab span {
					margin-left: 12px;
				}
				.pages {
					@apply --layout-flex;
				}
				paper-progress {
					display: block;
					width: 100%;
				}
				paper-toast {
					@apply --layout-horizontal;
					@apply --layout-center;
					@apply --layout-justified;
					border-radius: 16px;
				}
				.toast-button {
					text-transform: none;
					margin: 8px;
				}
				#fab {
					@apply --shadow-elevation-4dp;
					position: fixed;
					z-index: 6;
					right: 20px;
					bottom: 20px;
				}
				#sharehome {
					max-width: 320px;
					background-color: #fff !important;
					color: var(--secondary-text-color);
				}
				@media (max-width: 640px) {
					app-drawer {
						--app-drawer-width: 80%;
					}
					paper-toast {
						max-width: none;
						width: calc(100% - 16px);
					}
					#sharehome {
						max-width: none;
					}
					.toast-button {
						margin: 16px 8px;
					}
				}
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>

			<paper-toast id="updateToast" duration="0" text="New update is here!">
				<paper-button onclick="window.location.reload(true)">Update</paper-button>
			</paper-toast>
			<paper-toast id="sharehome" duration="0">
				<div class="flex-vertical">
					<div class="flex-horizontal">
						<div class="flexchild">Share via</div>
						<paper-icon-button icon="my-icons:close" on-tap="openShare"></paper-icon-button>
					</div>
					<div on-tap="openShare">
						<template is="dom-repeat" items="[[social]]">
							<a href="{{item.link}}" target="_blank">
								<paper-icon-button class="toast-button" src="../images/assets/social/{{item.icon}}.svg"></paper-icon-button>
							</a>
						</template>
						<a href="mailto:liyascthomas@gmail.com?&subject=Hello%20Liyas!&body=Hi," target="_blank">
							<paper-icon-button class="toast-button" icon="my-icons:mail"></paper-icon-button>
						</a>
						<a href="tel:+919539653962">
							<paper-icon-button class="toast-button" icon="my-icons:phone"></paper-icon-button>
						</a>
						<a href="about">
							<paper-icon-button class="toast-button" icon="my-icons:more-horiz"></paper-icon-button>
						</a>
					</div>
				</div>
			</paper-toast>
      <app-drawer-layout fullbleed narrow="{{narrow}}" force-narrow>
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="{{!wideLayout}}">
					<div class="drawer-contents">
          <app-toolbar>Liyas Thomas</app-toolbar>
					<paper-listbox selected="[[page]]" attr-for-selected="id" class="listbox" role="listbox" on-click="scrollTop">
						<a id="home" href="[[rootPath]]" tabindex="-1">
							<paper-icon-item>
								<iron-icon icon="my-icons:home" slot="item-icon"></iron-icon>
								<span>Home</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<a id="projects" tabindex="-1">
							<paper-icon-item on-click="toggle" aria-expanded\$="[[opened]]" aria-controls="collapse">
								<iron-icon icon="my-icons:work" slot="item-icon"></iron-icon>
								<span class="expand">Projects</span>
								<iron-icon icon="my-icons:[[_getIcon(opened)]]"></iron-icon>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<iron-collapse id="collapse" opened="{{opened}}" tabindex="-1">
							<a href="projects" tabindex="-1">
								<paper-icon-item class="category">
									<iron-icon icon="my-icons:lightbulb-outline" slot="item-icon"></iron-icon>
										<span class="expand">View all projects</span>
										<iron-icon icon="my-icons:chevron-right"></iron-icon>
									<paper-ripple></paper-ripple>
								</paper-icon-item>
							</a>
							<iron-ajax auto id="ajax" url="../data/projects.json" loading="{{loading}}" handle-as="json" progress="{{progress}}" last-response="{{ajaxResponse}}" last-error="{{error}}" debounce-duration="500"></iron-ajax>
							<template is="dom-if" if="{{loading}}">
								<div class="actions flex-center-center" hidden\$="[[!loading]]">
									<paper-spinner-lite active\$="[[loading]]"></paper-spinner-lite>
								</div>
							</template>
							<template is="dom-if" if="{{error}}">
								<div class="error">
									<div>Failed to load projects list. Make sure you're connected to internet.</div>
									<span>🙁😢😒</span>
									<a href="javascript:location.reload();"><paper-icon-button icon="my-icons:refresh"></paper-icon-button></a>
								</div>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.android]]" as="android">
								<a href="android" tabindex="-1">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[android.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{android.title}}</span>
										<iron-icon icon="my-icons:chevron-right"></iron-icon>
										<paper-ripple></paper-ripple>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[android.sub]]" as="sub">
									<a href="[[sub.link]]" tabindex="-1">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.web]]" as="web">
								<a href="web" tabindex="-1">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[web.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{web.title}}</span>
										<iron-icon icon="my-icons:chevron-right"></iron-icon>
										<paper-ripple></paper-ripple>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[web.sub]]" as="sub">
									<a href="[[sub.link]]" tabindex="-1">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.others]]" as="others">
								<a href="others" tabindex="-1">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[others.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{others.title}}</span>
										<iron-icon icon="my-icons:chevron-right"></iron-icon>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[others.sub]]" as="sub">
									<a href="[[sub.link]]" tabindex="-1">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
						</iron-collapse>
						<a id="about" href="about" tabindex="-1">
							<paper-icon-item>
								<iron-icon icon="my-icons:face" slot="item-icon"></iron-icon>
								<span>About</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
					</paper-listbox>
					</div>
        </app-drawer>
        <!-- Main content -->
        <app-header-layout>
          <app-header slot="header" fixed condenses effects="waterfall resize-title">
            <app-toolbar sticky>
              <paper-icon-button icon="my-icons:menu" drawer-toggle hidden\$="{{wideLayout}}"></paper-icon-button>
              <div condensed-title>Liyas Thomas</div>
							<template is="dom-if" if="{{loading}}">
								<paper-progress value="{{progress}}" indeterminate active\$="[[loading]]" top-item></paper-progress>
							</template>
            </app-toolbar>
            <app-toolbar>
              <div main-title>Liyas Thomas</div>
							<paper-tabs selected="[[page]]" attr-for-selected="id" autoselect no-bar on-click="scrollTop" hidden\$="{{!wideLayout}}">
								<paper-tab id="home">
									<a href="[[rootPath]]" tabindex="-1">
										<iron-icon icon="my-icons:home"></iron-icon>
										<span>Home</span>
									</a>
								</paper-tab>
								<paper-tab id="projects">
									<a href="projects" tabindex="-1">
										<iron-icon icon="my-icons:work"></iron-icon>
										<span>Projects</span>
									</a>
								</paper-tab>
								<paper-tab id="about">
									<a href="about" tabindex="-1">
										<iron-icon icon="my-icons:face"></iron-icon>
										<span>About</span>
									</a>
								</paper-tab>
							</paper-tabs>
							<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi," taget="_blank">
								<paper-icon-button icon="my-icons:mail"></paper-icon-button>
							</a>
						<paper-icon-button icon="my-icons:share" on-tap="openShare"></paper-icon-button>
            </app-toolbar>
          </app-header>
					<iron-pages selected="[[page]]" attr-for-selected="name" role="main">
						<my-home name="home"></my-home>
						<my-projects name="projects"></my-projects>
						<my-about name="about"></my-about>
						<my-android name="android"></my-android>
						<my-web name="web"></my-web>
						<my-others name="others"></my-others>
						<my-saap name="saap"></my-saap>
						<my-view4 name="view4"></my-view4>
						<my-404 name="404"></my-404>
					</iron-pages>
					<div class="content">
						<div class="title">
							<span>Contact</span> me
						</div>
						<p>
							<a href="mailto:liyascthomas@gmail.com?&subject=Hello%20Liyas!&body=Hi,"><paper-button class="primary">Email<iron-icon icon="my-icons:mail"></iron-icon></paper-button></a>
							<a href="about"><paper-button class="secondary">Read more<iron-icon icon="my-icons:face"></iron-icon></paper-button></a>
						</p>
					</div>
					<paper-fab id="fab" icon="my-icons:arrow-upward" on-click="scrollTop"></paper-fab>
        </app-header-layout>
      </app-drawer-layout>
    `;
	}

	static get properties() {
		return {
			wideLayout: {
				type: Boolean,
				value: false,
				observer: 'onLayoutChange',
			},
			page: {
				type: String,
				reflectToAttribute: true,
				observer: '_pageChanged'
			},
			opened: {
				type: Boolean,
				reflectToAttribute: true
			},
			social: {
				type: Array,
				value: function () {
					return [{
							link: "https://www.facebook.com/liyasthomas",
							icon: "facebook"
						},
						{
							link: "https://twitter.com/liyasthomas",
							icon: "twitter"
						},
						{
							link: "https://plus.google.com/liyasthomas",
							icon: "google-plus"
						},
						{
							link: "https://github.com/liyasthomas",
							icon: "github"
						},
						{
							link: "https://www.linkedin.com/in/liyasthomas",
							icon: "linkedin"
						},
						{
							link: "https://www.linkedin.com/in/liyasthomas",
							icon: "behance"
						},
						{
							link: "https://www.linkedin.com/in/liyasthomas",
							icon: "dribbble"
						},
						{
							link: "https://api.whatsapp.com/send?phone=919539653962&text=Hi%20Liyas,",
							icon: "whatsapp"
						}
					]
				}
			},
			routeData: Object,
			subroute: Object
		};
	}

	onLayoutChange(wide) {
		var drawer = this.$.drawer;

		if (wide && drawer.opened) {
			drawer.opened = false;
		}
	}

	update(worker) {
		this.$.updateToast.show();
	}

	toggle() {
		this.$.collapse.toggle();
	}

	openShare() {
		this.$.sharehome.toggle();
	}

	_getIcon(opened) {
		return opened ? 'expand-less' : 'expand-more';
	}

	scrollTop() {
		var scrollDuration = 300;
		var scrollStep = -window.scrollY / (scrollDuration / 15),
			scrollInterval = setInterval(function () {
				if (window.scrollY != 0) {
					window.scrollBy(0, scrollStep);
				} else clearInterval(scrollInterval);
			}, 15);
	}

	static get observers() {
		return [
      '_routePageChanged(routeData.page)'
    ];
	}

	_routePageChanged(page) {
		// Show the corresponding page according to the route.
		//
		// If no page was found in the route data, page will be an empty string.
		// Show 'home' in that case. And if the page doesn't exist, show '404'.
		if (!page) {
			this.page = 'home';
		} else if (['home', 'projects', 'about', 'android', 'web', 'others', 'saap', 'view4'].indexOf(page) !== -1) {
			this.page = page;
		} else {
			this.page = '404';
		}

		// Close a non-persistent drawer when the page & route are changed.
		if (!this.$.drawer.persistent) {
			this.$.drawer.close();
		}
	}

	_pageChanged(page) {
		// Import the page component on demand.
		//
		// Note: `polymer build` doesn't like string concatenation in the import
		// statement, so break it up.
		switch (page) {
			case 'home':
				import('./my-home.js');
				break;
			case 'projects':
				import('./my-projects.js');
				break;
			case 'about':
				import('./my-about.js');
				break;
			case 'android':
				import('./my-android.js');
				break;
			case 'web':
				import('./my-web.js');
				break;
			case 'others':
				import('./my-others.js');
				break;
			case 'saap':
				import('./my-saap.js');
				break;
			case 'view4':
				import('./my-view4.js');
				break;
			case '404':
				import('./my-404.js');
				break;
		}
	}
}

window.customElements.define('my-app', MyApp);
