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
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-dialog/paper-dialog.js';
import './shared-styles.js';
import './my-icons.js';
import {
	afterNextRender
} from '@polymer/polymer/lib/utils/render-status.js';
import {
	timeOut
} from '@polymer/polymer/lib/utils/async.js';
import {
	Debouncer
} from '@polymer/polymer/lib/utils/debounce.js';
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
					--accent-color: var(--paper-deep-purple-a200);
					--light-accent-color: var(--paper-deep-purple-a100);
					--dark-accent-color: var(--paper-deep-purple-a400);
					--paper-tabs-selection-bar-color: var(--accent-color);
					--paper-tab-ink: var(--divider-color);
					--paper-fab-keyboard-focus-background: var(--accent-color);
					--paper-progress-active-color: var(--accent-color);
					--paper-spinner-color: var(--accent-color);
					--paper-progress-secondary-color: var(--dark-accent-color);
					--paper-progress-container-color: var(--divider-color);
					--paper-toggle-button-unchecked-bar-color: var(--secondary-text-color);
					--paper-toggle-button-checked-bar-color: var(--dark-accent-color);
					--paper-toggle-button-checked-button-color: var(--light-accent-color);
					--paper-toggle-button-checked-ink-color: var(--accent-color);
					background-color: var(--primary-background-color);
					color: var(--primary-text-color);
				}
				:host(.dark) {
					--primary-color: var(--dark-theme-background-color);
					--primary-background-color: var(--dark-theme-background-color);
					--primary-text-color: var(--dark-theme-text-color);
					--secondary-text-color: var(--dark-theme-secondary-color);
					--divider-color: var(--dark-primary-color);
					--accent-color: var(--paper-teal-a400);
					--light-accent-color: var(--paper-teal-a200);
					--dark-accent-color: var(--paper-teal-a700);
				}
				[hidden] {
					display: none;
				}
				app-drawer {
					--app-drawer-scrim-background: rgba(0,0,0,.4);
					font-weight: 700;
					--app-drawer-content-container: {
						background-color: var(--primary-background-color);
						color: var(--secondary-text-color);
						@apply --shadow-elevation-12dp;
					}
				}
				.drawer-contents {
					height: 100%;
					overflow-y: auto;
					-webkit-overflow-scrolling: touch;
				}
				span.expand {
					width: calc(100% - 80px);
				}
				.category {
					border-top: 1px solid var(--light-primary-color);
				}
				iron-collapse {
					border-bottom: 1px solid var(--light-primary-color);
					background-color: var(--light-primary-color);
				}
				paper-listbox.listbox .iron-selected, paper-tabs .iron-selected {
					color: var(--accent-color);
				}
				app-header {
					background-color: var(--primary-background-color);
					color: var(--secondary-text-color);
					--app-header-shadow: {
						box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
					};
				}
				app-toolbar {
					padding: 0 8px;
				}
				.leftItem {
					display: none;
				}
				:host(:not([page=home])) .leftItem {
					display: block;
				}
				:host(:not([page=home])) [drawer-toggle] {
					display: none;
				}
				[main-title] {
					font-size: 32px;
					margin-left: -12px;
				}
				[condensed-title] {
					font-size: 24px;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-left: 12px;
				}
				.logo {
					color: #000;
				}
				paper-tabs {
					height: 100%;
				}
				paper-tab {
					font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
					text-transform: capitalize;
					font-size: 18px;
					font-weight: 700;
					padding: 0 16px;
				}
				paper-tab:hover {
					--paper-tab-content-unselected: {
						opacity: 1;
					}
				}
				paper-tab a {
					@apply --layout-horizontal;
					@apply --layout-center-center;
				}
				paper-tab iron-icon {
					margin-right: 8px;
				}
				.theme {
					background-color: var(--primary-background-color);
					color: var(--primary-text-color);
				}
				#pages {
					@apply --layout-flex;
					min-height: calc(100vh - 128px);
				}
				paper-progress {
					display: block;
					width: 100%;
				}
				paper-toast {
					@apply --layout-justified;
					font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
					background-color: var(--primary-text-color);
					color: var(--primary-background-color);
					border-radius: 8px;
					font-size: 18px;
				}
				paper-toast paper-button {
					color: var(--accent-color);
				}
				paper-toast#sharehome {
					@apply --layout-horizontal;
					@apply --layout-center;
					max-width: 320px;
				}
				.toast-button {
					margin: 8px;
				}
				#fab {
					position: fixed;
					z-index: 6;
					right: 20px;
					bottom: 20px;
					color: var(--primary-color);
				}
				footer {
					padding: 32px;
				}
				@media (max-width: 640px) {
					app-drawer {
						--app-drawer-width: 80%;
					}
					[main-title] {
						margin-left: -60px;
					}
					paper-toast {
						width: calc(100% - 24px);
					}
					paper-toast#sharehome {
						max-width: none;
					}
				}
			</style>
			<paper-dialog id="scrolling" with-backdrop>
				<h2>License</h2>
				<paper-dialog-scrollable>
					<code>
						<p>MIT License</p>
						<p>Copyright (c) 2019 Liyas Thomas</p>
						<p>Permission is hereby granted, free of charge, to any person obtaining a copy
						of this software and associated documentation files (the "Software"), to deal
						in the Software without restriction, including without limitation the rights
						to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
						copies of the Software, and to permit persons to whom the Software is
						furnished to do so, subject to the following conditions:</p>
						<p>The above copyright notice and this permission notice shall be included in all
						copies or substantial portions of the Software.</p>
						<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
						IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
						FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
						AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
						LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
						OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
						SOFTWARE.</p>
					</code>
				</paper-dialog-scrollable>
				<div class="buttons">
					<a class="link" dialog-confirm><paper-button aria-label="Ok" autofocus>Ok</paper-button></a>
				</div>
			</paper-dialog>
			<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
			</app-location>
			<app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}">
			</app-route>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<paper-toast id="updateToast" duration="0" text=" ">
				<div class="flex-center-center">
					<div class="flexchild">Update available!</div>
					<paper-button onclick="window.location.reload(true)" aria-label="Update">Update</paper-button>
				</div>
			</paper-toast>
			<paper-toast id="sharehome" duration="0">
				<div class="flex-vertical">
					<div class="flex-horizontal">
						<div class="flexchild">Share via</div>
						<paper-icon-button icon="my-icons:close" on-tap="openShare" aria-label="Close"></paper-icon-button>
					</div>
					<div on-tap="openShare">
						<template is="dom-repeat" items="[[social]]">
							<a href="{{item.link}}" target="_blank" rel="noopener">
								<paper-icon-button class="toast-button" src="../images/assets/social/{{item.icon}}.svg"	aria-label="Icon"></paper-icon-button>
							</a>
						</template>
						<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi," target="_blank" rel="noopener">
							<paper-icon-button class="toast-button" icon="my-icons:mail-outline" aria-label="Icon"></paper-icon-button>
						</a>
						<a href="tel:+919539653962" target="_blank" rel="noopener">
							<paper-icon-button class="toast-button" icon="my-icons:phone"	aria-label="Icon"></paper-icon-button>
						</a>
						<paper-icon-button id="shareButton" class="toast-button" icon="my-icons:more-horiz" aria-label="Icon" on-tap="moreShare"></paper-icon-button>
					</div>
				</div>
			</paper-toast>
			<app-drawer-layout fullbleed narrow="{{narrow}}" force-narrow>
				<!-- Drawer content -->
				<app-drawer id="drawer" slot="drawer" swipe-open="{{!wideLayout}}">
					<div class="drawer-contents">
					<paper-listbox selected="[[page]]" attr-for-selected="name" class="listbox" role="listbox">
						<a name="home" href="[[rootPath]]">
							<paper-icon-item>
								<iron-icon icon$="my-icons:home[[_getPageIcon('home',page)]]" slot="item-icon"></iron-icon>
								<span>Home</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<a name="projects">
							<paper-icon-item on-click="toggle" aria-expanded$="[[opened]]" aria-controls="collapse">
								<iron-icon icon$="my-icons:work[[_getPageIcon('projects',page)]]" slot="item-icon"></iron-icon>
								<span class="expand">Projects</span>
								<iron-icon icon$="my-icons:[[_getIcon(opened)]]"></iron-icon>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<iron-collapse id="collapse" opened="{{opened}}">
							<a name="projects" href="projects">
								<paper-icon-item class="category">
									<iron-icon icon="my-icons:lightbulb-outline" slot="item-icon"></iron-icon>
										<span class="expand">View all projects</span>
										<iron-icon icon="my-icons:input"></iron-icon>
									<paper-ripple></paper-ripple>
								</paper-icon-item>
							</a>
							<iron-ajax auto id="ajax" url="../data/projects.json" loading="{{loading}}" handle-as="json" progress="{{progress}}" last-response="{{ajaxResponse}}" last-error="{{error}}" debounce-duration="500"></iron-ajax>
							<template is="dom-if" if="{{loading}}">
								<div class="actions flex-center-center" hidden$="[[!loading]]">
									<paper-spinner-lite active$="[[loading]]"></paper-spinner-lite>
								</div>
							</template>
							<template is="dom-if" if="{{error}}">
								<template is="dom-if" if="{{!loading}}">
									<div class="error">
										<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
									</div>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.web]]" as="web">
								<a name="{{web.link}}" href="{{web.link}}">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[web.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{web.title}}</span>
										<iron-icon icon="my-icons:input"></iron-icon>
										<paper-ripple></paper-ripple>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[web.sub]]" as="sub">
									<a name="[[sub.link]]" href="[[sub.link]]">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.others]]" as="others">
								<a name="{{others.link}}" href="{{others.link}}">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[others.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{others.title}}</span>
										<iron-icon icon="my-icons:input"></iron-icon>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[others.sub]]" as="sub">
									<a name="[[sub.link]]" href="[[sub.link]]">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
						</iron-collapse>
						<a name="blog" href="https://liyasthomas.tumblr.com" target="_blank" rel="noopener">
							<paper-icon-item>
								<iron-icon icon$="my-icons:favorite[[_getPageIcon('blog',page)]]" slot="item-icon"></iron-icon>
								<span>Blog</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<a name="about" href="about">
							<paper-icon-item>
								<iron-icon icon$="my-icons:face[[_getPageIcon('about',page)]]" slot="item-icon"></iron-icon>
								<span>About</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
					</paper-listbox>
					</div>
				</app-drawer>
				<!-- Main content -->
				<app-header-layout class="theme">
					<app-header id="toolbar" class="toolbar" slot="header" fixed condenses effects="waterfall resize-snapped-title">
						<app-toolbar sticky>
							<paper-icon-button icon="my-icons:menu" drawer-toggle hidden$="{{wideLayout}}" aria-label="Toggle menu"></paper-icon-button>
							<paper-icon-button class="leftItem" hidden$="{{wideLayout}}" icon="my-icons:arrow-back" aria-label="Back" onclick="history.back()"></paper-icon-button>
							<div condensed-title class="logo">🦄</div>
							<div class="flexchild" style="text-align:center;">
								<div main-title class="logo">🦄</div>
							</div>
							<div class="flexchild"></div>
							<template is="dom-if" if="{{loading}}">
								<paper-progress value="{{progress}}" indeterminate active$="[[loading]]" top-item></paper-progress>
							</template>
						</app-toolbar>
						<app-toolbar>
							<div class="flexchild"></div>
							<paper-tabs selected="[[page]]" attr-for-selected="name" autoselect no-bar hidden$="{{!wideLayout}}" on-click="scrollTop">
								<paper-tab name="home">
									<a href="[[rootPath]]">
										<iron-icon icon$="my-icons:home[[_getPageIcon('home',page)]]"></iron-icon>
										Home
									</a>
								</paper-tab>
								<paper-tab name="projects">
									<a href="projects">
										<iron-icon icon$="my-icons:work[[_getPageIcon('projects',page)]]"></iron-icon>
										Projects
									</a>
								</paper-tab>
								<paper-tab name="blog" target="_blank" rel="noopener">
									<a href="https://liyasthomas.tumblr.com" target="_blank" rel="noopener">
										<iron-icon icon$="my-icons:favorite[[_getPageIcon('blog',page)]]"></iron-icon>
										Blog
									</a>
								</paper-tab>
								<paper-tab name="about">
									<a href="about">
										<iron-icon icon$="my-icons:face[[_getPageIcon('about',page)]]"></iron-icon>
										About
									</a>
								</paper-tab>
							</paper-tabs>
							<div class="flexchild" style="text-align:right;">
								<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,">
									<paper-icon-button icon="my-icons:mail-outline" aria-label="E-mail"></paper-icon-button>
								</a>
								<paper-menu-button vertical-align="top" horizontal-align="right" close-on-activate>
									<paper-icon-button icon="my-icons:more-vert" slot="dropdown-trigger" aria-label="More"></paper-icon-button>
									<paper-listbox slot="dropdown-content">
										<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi," target="_blank" rel="noopener">
											<paper-icon-item>
												<iron-icon icon="my-icons:alternate-email" slot="item-icon"></iron-icon>
												<span>Hire me</span>
												<paper-ripple></paper-ripple>
											</paper-icon-item>
										</a>
										<a href="https://paypal.me/liyascthomas" target="_blank" rel="noopener">
											<paper-icon-item>
												<iron-icon src="../images/assets/social/paypal.svg" slot="item-icon"></iron-icon>
												<span>Donate</span>
												<paper-ripple></paper-ripple>
											</paper-icon-item>
										</a>
										<a>
											<paper-icon-item on-tap="openShare">
												<iron-icon icon="my-icons:share" slot="item-icon"></iron-icon>
												<span>Share</span>
												<paper-ripple></paper-ripple>
											</paper-icon-item>
										</a>
										<a>
											<paper-icon-item on-tap="toggleDark">
												<paper-toggle-button checked={{mode}} on-tap="toggleDark" on-change="toggleDark" slot="item-icon"></paper-toggle-button>
												<span>Dark mode</span>
												<paper-ripple></paper-ripple>
											</paper-icon-item>
										</a>
									</paper-listbox>
								</paper-menu-button>
							</div>
						</app-toolbar>
					</app-header>
					<iron-pages id="pages" selected="[[page]]" attr-for-selected="name" role="main">
						<my-home name="home"></my-home>
						<my-projects name="projects"></my-projects>
						<my-about name="about"></my-about>
						<my-web name="web"></my-web>
						<my-others name="others" route="[[subroute]]"></my-others>
						<my-wallpapers name="wallpapers" route="[[subroute]]"></my-wallpapers>
						<my-art name="art" route="[[subroute]]"></my-art>
						<my-feedie name="feedie" route="[[subroute]]"></my-feedie>
						<my-hapsell name="hapsell" route="[[subroute]]"></my-hapsell>
						<my-konnect name="konnect" route="[[subroute]]"></my-konnect>
						<my-aeiou name="aeiou" route="[[subroute]]"></my-aeiou>
						<my-mnmlurl name="mnmlurl" route="[[subroute]]"></my-mnmlurl>
						<my-mnmlurlextension name="mnmlurlextension" route="[[subroute]]"></my-mnmlurlextension>
						<my-metadata name="metadata" route="[[subroute]]"></my-metadata>
						<my-marcdown name="marcdown" route="[[subroute]]"></my-marcdown>
						<my-colorbook name="colorbook" route="[[subroute]]"></my-colorbook>
						<my-books name="books" route="[[subroute]]"></my-books>
						<my-banner name="banner" route="[[subroute]]"></my-banner>
						<my-fuseorg name="fuseorg" route="[[subroute]]"></my-fuseorg>
						<my-lvr name="lvr" route="[[subroute]]"></my-lvr>
						<my-pineapplenotes name="pineapplenotes" route="[[subroute]]"></my-pineapplenotes>
						<my-materialthings name="materialthings" route="[[subroute]]"></my-materialthings>
						<my-saapshot name="saapshot" route="[[subroute]]"></my-saapshot>
						<my-view4 name="view4"></my-view4>
						<my-404 name="404"></my-404>
					</iron-pages>
					<footer>
						&copy; 2019 Liyas Thomas &middot; <a class="link" on-click="openModal">License</a>
					</footer>
					<paper-fab id="fab" icon="my-icons:arrow-upward" elevation="4" aria-label="Scroll top" on-click="scrollTop"></paper-fab>
				</app-header-layout>
			</app-drawer-layout>
		`;
	}
	static get properties() {
		return {
			wideLayout: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				observer: 'onLayoutChange'
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
			mode: {
				type: Boolean,
				value: localStorage.getItem('mode') == 'dark' ? true : false,
				reflectToAttribute: true
			},
			social: {
				type: Array,
				value: () => [{
						link: "https://www.facebook.com/liyasthomas",
						icon: "facebook"
					},
					{
						link: "https://twitter.com/liyasthomas",
						icon: "twitter"
					},
					{
						link: "https://instagram.com/liyasthomas",
						icon: "instagram"
					},
					{
						link: "https://liyasthomas.tumblr.com",
						icon: "tumblr"
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
						link: "https://in.pinterest.com/liyasthomas",
						icon: "pinterest"
					},
					{
						link: "https://www.dribbble.com/liyasthomas",
						icon: "dribbble"
					},
					{
						link: "https://api.whatsapp.com/send?phone=919539653962&text=Hi%20Liyas,",
						icon: "whatsapp"
					}
				]
			},
			routeData: Object,
			subroute: Object
		};
	}
	static get observers() {
		return [
			'_routePageChanged(routeData.page)'
		];
	}
	constructor() {
		super();
	}
	ready() {
		super.ready();
		// Custom elements polyfill safe way to indicate an element has been upgraded.
		this.removeAttribute('unresolved');
		// Listen for custom events
		this.addEventListener('announce', (e) => this._onAnnounce(e));
		// Listen for online/offline
		afterNextRender(this, () => {
			window.addEventListener('online', (e) => this._notifyNetworkStatus(e));
			window.addEventListener('offline', (e) => this._notifyNetworkStatus(e));
		});
	}
	_routePageChanged(page) {
		// Reset scroll position
		this.scrollTop();
		// Show the corresponding page according to the route.
		//
		// If no page was found in the route data, page will be an empty string.
		// Show 'home' in that case. And if the page doesn't exist, show '404'.
		if (!page) {
			this.page = 'home';
		} else if (['home', 'projects', 'about', 'web', 'others', 'wallpapers', 'art', 'feedie', 'hapsell', 'konnect', 'mnmlurl', 'mnmlurlextension', 'metadata', 'marcdown', 'colorbook', 'banner', 'books', 'aeiou', 'fuseorg', 'lvr', 'pineapplenotes', 'materialthings', 'saapshot', 'view4'].includes(page)) {
			this.page = page || 'home';
		} else {
			this.page = '404';
		}
		// Change page title
		document.title = `${this.page.charAt(0).toUpperCase() + this.page.slice(1)} · Liyas Thomas`;
		// Close a non-persistent drawer when the page & route are changed.
		if (!this.$.drawer.persistent) {
			this.$.drawer.close();
		}
		// Animations
		this.animate({
			opacity: [0, 1],
			transform: ['translateY(-32px)', 'translateY(0)']
		}, {
			duration: 600,
			easing: 'ease-in-out'
		});
		this.$.fab.animate({
			transform: ['scale(0)', 'scale(1)']
		}, {
			duration: 1000,
			easing: 'ease-in-out'
		});
	}
	_pageChanged(page, oldPage) {
		// Import the page component on demand.
		//
		// Note: `polymer build` doesn't like string concatenation in the import
		// statement, so break it up.
		if (page != null) {
			let cb = this._pageLoaded.bind(this, Boolean(oldPage));
			switch (page) {
				case 'home':
					import('./my-home.js').then(cb);
					break;
				case 'projects':
					import('./my-projects.js').then(cb);
					break;
				case 'about':
					import('./my-about.js').then(cb);
					break;
				case 'web':
					import('./my-web.js').then(cb);
					break;
				case 'others':
					import('./my-others.js').then(cb);
					break;
				case 'wallpapers':
					import('./my-wallpapers.js').then(cb);
					break;
				case 'art':
					import('./my-art.js').then(cb);
					break;
				case 'feedie':
					import('./my-feedie.js').then(cb);
					break;
				case 'hapsell':
					import('./my-hapsell.js').then(cb);
					break;
				case 'konnect':
					import('./my-konnect.js').then(cb);
					break;
				case 'aeiou':
					import('./my-aeiou.js').then(cb);
					break;
				case 'mnmlurl':
					import('./my-mnmlurl.js').then(cb);
					break;
				case 'mnmlurlextension':
					import('./my-mnmlurlextension.js').then(cb);
					break;
				case 'metadata':
					import('./my-metadata.js').then(cb);
					break;
				case 'marcdown':
					import('./my-marcdown.js').then(cb);
					break;
				case 'colorbook':
					import('./my-colorbook.js').then(cb);
					break;
				case 'books':
					import('./my-books.js').then(cb);
					break;
				case 'banner':
					import('./my-banner.js').then(cb);
					break;
				case 'fuseorg':
					import('./my-fuseorg.js').then(cb);
					break;
				case 'lvr':
					import('./my-lvr.js').then(cb);
					break;
				case 'pineapplenotes':
					import('./my-pineapplenotes.js').then(cb);
					break;
				case 'materialthings':
					import('./my-materialthings.js').then(cb);
					break;
				case 'saapshot':
					import('./my-saapshot.js').then(cb);
					break;
				case 'view4':
					import('./my-view4.js').then(cb);
					break;
				case '404':
					import('./my-404.js').then(cb);
					break;
				default:
					this._pageLoaded(Boolean(oldPage));
			}
		}
	}
	_pageLoaded(shouldResetLayout) {
		this._ensureLazyLoaded();
		if (shouldResetLayout) {
			// The size of the header depends on the page (e.g. on some pages the tabs
			// do not appear), so reset the header's layout only when switching pages.
			timeOut.run(() => {
				this.$.toolbar.resetLayout();
			}, 1);
		}
	}
	_ensureLazyLoaded() {
		// Load lazy resources after render and set `loadComplete` when done.
		if (!this.loadComplete) {
			afterNextRender(this, () => {
				import('./lazy-resources.js').then(() => {
					// Register service worker if supported.
					if ('serviceWorker' in navigator) {
						navigator.serviceWorker.register('service-worker.js', {
							scope: '/'
						});
					}
					this._notifyNetworkStatus();
					this.loadComplete = true;
				});
			});
		}
	}
	_notifyNetworkStatus() {
		let oldOffline = this.offline;
		this.offline = !navigator.onLine;
		// Show the snackbar if the user is offline when starting a new session
		// or if the network status changed.
		if (this.offline || (!this.offline && oldOffline === true)) {
			if (!this._networkSnackbar) {
				this._networkSnackbar = document.createElement('paper-toast');
				this.root.appendChild(this._networkSnackbar);
			}
			this._networkSnackbar.innerHTML = this.offline ? 'You are offline' : 'You are online';
			this._networkSnackbar.open();
		}
	}
	show() {
		this.$.toolbar.animate({
			transform: ['translateY(-100%)', 'translateY(0)']
		}, {
			duration: 500,
			easing: 'ease-in-out'
		});
		this.$.fab.animate({
			transform: ['scale(0)', 'scale(1)']
		}, {
			delay: 500,
			duration: 1000,
			easing: 'ease-in-out'
		});
	}
	tryAgain() {
		this.$.ajax.generateRequest();
	}
	onLayoutChange(wide) {
		const drawer = this.$.drawer;
		if (wide && drawer.opened) {
			drawer.opened = false;
		}
	}
	update(worker) {
		this.$.updateToast.toggle();
	}
	toggle() {
		this.$.collapse.toggle();
	}
	openShare() {
		this.$.sharehome.toggle();
	}
	openModal() {
		this.$.scrolling.open();
	}
	_getIcon(opened) {
		return opened ? 'expand-less' : 'expand-more';
	}
	_getPageIcon(e, page) {
		if (e == page)
			return '-filled'
		else
			return '';
	}
	scrollTop() {
		const scrollDuration = 200;
		const scrollStep = -window.scrollY / (scrollDuration / 10);
		const scrollInterval = setInterval(() => {
			if (window.scrollY != 0) {
				window.scrollBy(0, scrollStep);
			} else clearInterval(scrollInterval)
		}, 10);
	}
	toggleDark() {
		localStorage.setItem('mode', localStorage.getItem('mode') == 'dark' ? 'light' : 'dark');
		if (localStorage.getItem('mode') == 'dark') {
			document.querySelector("meta[name=theme-color]").setAttribute("content", "#212121");
			this.mode = true;
		} else {
			document.querySelector("meta[name=theme-color]").setAttribute("content", "#ffffff");
			this.mode = false;
		}
		let theme = document.querySelectorAll('.theme');
		theme.forEach(({
			classList
		}) => {
			localStorage.getItem('mode') == 'dark' ? classList.add('dark') : classList.remove('dark');
		});
	}
	async moreShare() {
		try {
			await navigator.share({
				title: document.title,
				url: window.location.href
			});
		} catch (err) {
			console.log("Share failed:", err.message);
		}
	}
}
window.customElements.define('my-app', MyApp);
