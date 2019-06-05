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
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
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
					--accent-color: var(--paper-blue-a400);
					--light-accent-color: var(--paper-blue-a200);
					--dark-accent-color: var(--paper-blue-a700);
					--primary-text-color: rgba(0, 0, 0, .87);
					--secondary-text-color: rgba(0, 0, 0, .54);
					--divider-text-color: rgba(0, 0, 0, .38);
					--light-text-color: rgba(0, 0, 0, .12);
					--paper-tabs-selection-bar-color: var(--accent-color);
					--paper-tab-ink: var(--light-text-color);
					--paper-fab-keyboard-focus-background: var(--accent-color);
					--paper-progress-active-color: var(--accent-color);
					--paper-spinner-color: var(--accent-color);
//					--paper-progress-secondary-color: var(--dark-accent-color);
					--paper-progress-container-color: var(--light-text-color);
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
				span.expand {
					width: calc(100% - 80px);
				}
				.category {
					border-top: 1px solid var(--paper-grey-100);
				}
				iron-collapse {
					border-bottom: 1px solid var(--paper-grey-100);
					background-color: var(--paper-grey-50);
				}
				#home.iron-selected, #projects.iron-selected, #about.iron-selected {
					color: var(--accent-color);
				}
				app-header {
					background-color: #fff;
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
					font-size: 16px;
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
				#pages {
					@apply --layout-flex;
					min-height: calc(100vh - 219px);
				}
				paper-progress {
					display: block;
					width: 100%;
				}
				paper-toast {
					font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
					@apply --layout-horizontal;
					@apply --layout-center;
					@apply --layout-justified;
					background-color: #fff !important;
					color: var(--secondary-text-color);
					border-radius: 8px;
					max-width: 320px;
				}
				.toast-button {
					margin: 8px;
				}
				#fab {
					@apply --shadow-elevation-4dp;
					position: fixed;
					z-index: 6;
					right: 20px;
					bottom: 20px;
				}
				footer {
					padding: 32px;
				}
				@media (max-width: 640px) {
					app-drawer {
						--app-drawer-width: 80%;
					}
					paper-toast {
						max-width: none;
						width: calc(100% - 24px);
					}
					[main-title] {
						margin-left: -60px;
					}
					#sharehome {
						max-width: none;
					}
				}
			</style>
			<paper-dialog id="scrolling" modal>
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
					<paper-button class="primary" aria-label="View all" dialog-dismiss>Cancel</paper-button>
					<paper-button class="secondary" aria-label="View all" dialog-confirm autofocus>Ok</paper-button>
				</div>
			</paper-dialog>
			<app-location route="{{route}}" url-space-regex="^[[rootPath]]">
			</app-location>
			<app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
			</app-route>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<paper-toast id="updateToast" duration="0" text="New update is here!">
				<paper-button class="secondary" onclick="window.location.reload(true)" aria-label="Update">Update</paper-button>
			</paper-toast>
			<paper-toast id="sharehome" duration="0">
				<div class="flex-vertical">
					<div class="flex-horizontal">
						<div class="flexchild">Connect via</div>
						<paper-icon-button icon="my-icons:close" on-tap="openShare" aria-label="Close"></paper-icon-button>
					</div>
					<div on-tap="openShare">
						<template is="dom-repeat" items="[[social]]">
							<a href="{{item.link}}" target="_blank" rel="noopener">
								<paper-icon-button class="toast-button" src="../images/assets/social/{{item.icon}}.svg"	aria-label="Icon"></paper-icon-button>
							</a>
						</template>
						<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,">
							<paper-icon-button class="toast-button" icon="my-icons:mail-outline"	aria-label="Icon"></paper-icon-button>
						</a>
						<a href="tel:+919539653962">
							<paper-icon-button class="toast-button" icon="my-icons:phone"	aria-label="Icon"></paper-icon-button>
						</a>
						<a href="about">
							<paper-icon-button class="toast-button" icon="my-icons:more-horiz"	aria-label="Icon"></paper-icon-button>
						</a>
					</div>
				</div>
			</paper-toast>
			<app-drawer-layout fullbleed narrow="{{narrow}}" force-narrow>
				<!-- Drawer content -->
				<app-drawer id="drawer" slot="drawer" swipe-open="{{!wideLayout}}">
					<div class="drawer-contents">
					<paper-listbox selected="[[page]]" attr-for-selected="id" class="listbox" role="listbox">
						<a id="home" href="[[rootPath]]">
							<paper-icon-item>
								<iron-icon icon="my-icons:home" slot="item-icon"></iron-icon>
								<span>Home</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<a id="projects">
							<paper-icon-item on-click="toggle" aria-expanded$="[[opened]]" aria-controls="collapse">
								<iron-icon icon="my-icons:work" slot="item-icon"></iron-icon>
								<span class="expand">Projects</span>
								<iron-icon icon="my-icons:[[_getIcon(opened)]]"></iron-icon>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<iron-collapse id="collapse" opened="{{opened}}">
							<a href="projects">
								<paper-icon-item class="category">
									<iron-icon icon="my-icons:lightbulb-outline" slot="item-icon"></iron-icon>
										<span class="expand">View all projects</span>
										<iron-icon icon="my-icons:input"></iron-icon>
									<paper-ripple></paper-ripple>
								</paper-icon-item>
							</a>
							<iron-ajax auto id="ajax" url="../data/projects.json" loading="{{loading}}" handle-as="json" progress="{{progress}}" last-response="{{ajaxResponse}}" last-error="{{error}}" debounce-duration="500"></iron-ajax>
							<template is="dom-if" if="{{loading}}">
								<div class$="[[getUIType(UI)]] actions flex-center-center" hidden$="[[!loading]]">
									<paper-spinner-lite active$="[[loading]]"></paper-spinner-lite>
								</div>
							</template>
							<template is="dom-if" if="{{error}}">
								<template is="dom-if" if="{{!loading}}">
									<div class$="[[getUIType(UI)]] error">
										<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
									</div>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.web]]" as="web">
								<a href="{{web.link}}">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[web.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{web.title}}</span>
										<iron-icon icon="my-icons:input"></iron-icon>
										<paper-ripple></paper-ripple>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[web.sub]]" as="sub">
									<a href="[[sub.link]]">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
							<template is="dom-repeat" items="[[ajaxResponse.others]]" as="others">
								<a href="{{others.link}}">
									<paper-icon-item class="category">
										<iron-icon icon="my-icons:[[others.icon]]" slot="item-icon"></iron-icon>
										<span class="expand">{{others.title}}</span>
										<iron-icon icon="my-icons:input"></iron-icon>
									</paper-icon-item>
								</a>
								<template is="dom-repeat" items="[[others.sub]]" as="sub">
									<a href="[[sub.link]]">
										<paper-icon-item>
											<iron-icon icon="my-icons:[[sub.icon]]" slot="item-icon"></iron-icon>
											<span>{{sub.title}}</span>
											<paper-ripple></paper-ripple>
										</paper-icon-item>
									</a>
								</template>
							</template>
						</iron-collapse>
						<a id="blog" href="https://liyasthomas.tumblr.com" target="_blank" rel="noopener">
							<paper-icon-item>
								<iron-icon icon="my-icons:favorite" slot="item-icon"></iron-icon>
								<span>Blog</span>
								<paper-ripple></paper-ripple>
							</paper-icon-item>
						</a>
						<a id="about" href="about">
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
							<paper-tabs selected="[[page]]" attr-for-selected="id" autoselect no-bar hidden$="{{!wideLayout}}" on-click="scrollTop">
								<paper-tab id="home">
									<a href="[[rootPath]]">
										Home
									</a>
								</paper-tab>
								<paper-tab id="projects">
									<a href="projects">
										Projects
									</a>
								</paper-tab>
								<paper-tab id="blog" target="_blank" rel="noopener">
									<a href="https://liyasthomas.tumblr.com" target="_blank" rel="noopener">
										Blog
									</a>
								</paper-tab>
								<paper-tab id="about">
									<a href="about">
										About
									</a>
								</paper-tab>
							</paper-tabs>
							<div class="flexchild" style="text-align:right;">
								<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,">
									<paper-icon-button icon="my-icons:mail-outline" aria-label="E-mail"></paper-icon-button>
								</a>
								<paper-icon-button icon="my-icons:share" on-tap="openShare" aria-label="Share"></paper-icon-button>
								<paper-menu-button vertical-align="top" horizontal-align="right">
									<paper-icon-button icon="my-icons:more-vert" slot="dropdown-trigger"></paper-icon-button>
									<paper-listbox class="listbox" slot="dropdown-content">
										<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,">
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
						<my-others name="others"></my-others>
						<my-wallpapers name="wallpapers"></my-wallpapers>
						<my-art name="art"></my-art>
						<my-feedie name="feedie"></my-feedie>
						<my-hapsell name="hapsell"></my-hapsell>
						<my-konnect name="konnect"></my-konnect>
						<my-aeiou name="aeiou"></my-aeiou>
						<my-mnmlurl name="mnmlurl"></my-mnmlurl>
						<my-mnmlurlextension name="mnmlurlextension"></my-mnmlurlextension>
						<my-metadata name="metadata"></my-metadata>
						<my-marcdown name="marcdown"></my-marcdown>
						<my-colorbook name="colorbook"></my-colorbook>
						<my-books name="books"></my-books>
						<my-banner name="banner"></my-banner>
						<my-fuseorg name="fuseorg"></my-fuseorg>
						<my-lvr name="lvr"></my-lvr>
						<my-pineapplenotes name="pineapplenotes"></my-pineapplenotes>
						<my-materialthings name="materialthings"></my-materialthings>
						<my-saapshot name="saapshot"></my-saapshot>
						<my-view4 name="view4"></my-view4>
						<my-404 name="404"></my-404>
					</iron-pages>
					<footer>
						&copy; 2019 Liyas Thomas &middot; <a class="link" on-click="openModal">License</a>
					</footer>
					<paper-fab id="fab" icon="my-icons:arrow-upward" aria-label="Scroll top" on-click="scrollTop"></paper-fab>
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
				}
			},
			routeData: Object,
			subroute: Object
		};
	}

	show() {
		this.$.toolbar.animate({
			transform: ['translateY(-100%)', 'translateY(0)']
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

	tryAgain() {
		this.$.ajax.generateRequest();
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

	openModal() {
		this.$.scrolling.open();
	}

	_getIcon(opened) {
		return opened ? 'expand-less' : 'expand-more';
	}

	scrollTop() {
		var scrollDuration = 200;
		var scrollStep = -window.scrollY / (scrollDuration / 10),
			scrollInterval = setInterval(function () {
				if (window.scrollY != 0) {
					window.scrollBy(0, scrollStep);
				} else clearInterval(scrollInterval);
			}, 10);
	}

	static get observers() {
		return [
			'_routePageChanged(routeData.page)'
		];
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
		} else if (['home', 'projects', 'about', 'web', 'others', 'wallpapers', 'art', 'feedie', 'hapsell', 'konnect', 'mnmlurl', 'mnmlurlextension', 'metadata', 'marcdown', 'colorbook', 'banner', 'books', 'aeiou', 'fuseorg', 'lvr', 'pineapplenotes', 'materialthings', 'saapshot', 'view4'].indexOf(page) !== -1) {
			this.page = page;
		} else {
			this.page = '404';
		}

		// Change page title
		document.title = this.page.charAt(0).toUpperCase() + this.page.slice(1) + ' · Liyas Thomas';

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
			case 'web':
				import('./my-web.js');
				break;
			case 'others':
				import('./my-others.js');
				break;
			case 'wallpapers':
				import('./my-wallpapers.js');
				break;
			case 'art':
				import('./my-art.js');
				break;
			case 'feedie':
				import('./my-feedie.js');
				break;
			case 'hapsell':
				import('./my-hapsell.js');
				break;
			case 'konnect':
				import('./my-konnect.js');
				break;
			case 'aeiou':
				import('./my-aeiou.js');
				break;
			case 'mnmlurl':
				import('./my-mnmlurl.js');
				break;
			case 'mnmlurlextension':
				import('./my-mnmlurlextension.js');
				break;
			case 'metadata':
				import('./my-metadata.js');
				break;
			case 'marcdown':
				import('./my-marcdown.js');
				break;
			case 'colorbook':
				import('./my-colorbook.js');
				break;
			case 'books':
				import('./my-books.js');
				break;
			case 'banner':
				import('./my-banner.js');
				break;
			case 'fuseorg':
				import('./my-fuseorg.js');
				break;
			case 'lvr':
				import('./my-lvr.js');
				break;
			case 'pineapplenotes':
				import('./my-pineapplenotes.js');
				break;
			case 'materialthings':
				import('./my-materialthings.js');
				break;
			case 'saapshot':
				import('./my-saapshot.js');
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
