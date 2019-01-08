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
					--accent-color: var(--paper-grey-700);
					--light-accent-color: var(--paper-grey-400);
					--dark-accent-color: var(--paper-grey-800);
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
				paper-icon-item {
					font-weight: 700;
					font-size: 16px;
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
				#home.iron-selected, #projects.iron-selected, #blog.iron-selected, #about.iron-selected {
					color: var(--accent-color);
				}
				app-header {
					color: var(--secondary-text-color);
					--app-header-background-front-layer: {
						background-color: transparent;
					};
					--app-header-background-rear-layer: {
						background-color: #fff;
					};
					--app-header-shadow: {
						box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
					};
				}
				app-toolbar paper-icon-button {
					margin: 0 4px;
				}
				app-toolbar paper-menu-button {
					padding: 0;
				}
				[main-title] {
					font-size: 44px;
					font-weight: 700;
					margin-left: 12px;
				}
				[condensed-title] {
					font-size: 24px;
					overflow: hidden;
					text-overflow: ellipsis;
					font-weight: 700;
					margin-left: 16px;
				}
				.logo {
        	font-family: "Lobster", "Roboto", "Noto", sans-serif;
					color: #000;
				}
				paper-tabs {
					height: 100%;
				}
				paper-tab:hover {
					--paper-tab-content-unselected: {
						opacity: 1;
					}
				}
				paper-tab {
					text-transform: capitalize;
					padding: 0;
					font-size: 16px;
					font-weight: 700;
					padding: 0 16px;
				}
				paper-tab a {
					@apply --layout-horizontal;
					@apply --layout-center-center;
				}
				paper-tab span {
					margin-left: 8px;
				}
				#pages {
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
					border-radius: 8px;
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
				#sharehome {
					max-width: 320px;
					background-color: #fff !important;
					color: var(--secondary-text-color);
				}
				footer {
					padding: 32px;
					text-align: center;
					color: var(--secondary-text-color);
				}
				@media (max-width: 640px) {
					app-drawer {
						--app-drawer-width: 80%;
					}
					paper-toast {
						max-width: none;
						width: calc(100% - 24px);
					}
					#sharehome {
						max-width: none;
					}
				}
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<paper-toast id="updateToast" duration="0" text="New update is here!">
				<paper-button class="primary" onclick="window.location.reload(true)" aria-label="Update">Update</paper-button>
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
								<paper-icon-button class="toast-button" src="../images/assets/social/{{item.icon}}.svg"  aria-label="Icon"></paper-icon-button>
							</a>
						</template>
						<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,">
							<paper-icon-button class="toast-button" icon="my-icons:mail-outline"  aria-label="Icon"></paper-icon-button>
						</a>
						<a href="tel:+919539653962">
							<paper-icon-button class="toast-button" icon="my-icons:phone"  aria-label="Icon"></paper-icon-button>
						</a>
						<a href="about">
							<paper-icon-button class="toast-button" icon="my-icons:more-horiz"  aria-label="Icon"></paper-icon-button>
						</a>
					</div>
				</div>
			</paper-toast>
      <app-drawer-layout fullbleed narrow="{{narrow}}" force-narrow>
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="{{!wideLayout}}">
					<div class="drawer-contents">
          <app-toolbar><span class="logo">Liyas Thomas</span></app-toolbar>
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
						<a id="blog" href="blog">
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
          <app-header id="toolbar" class="toolbar" slot="header" fixed condenses effects="waterfall resize-title blend-background parallax-background">
            <app-toolbar sticky>
              <paper-icon-button icon="my-icons:menu" drawer-toggle hidden$="{{wideLayout}}" aria-label="Toggle menu"></paper-icon-button>
              <div condensed-title><span class="logo">Liyas Thomas</span></div>
							<template is="dom-if" if="{{loading}}">
								<paper-progress value="{{progress}}" indeterminate active$="[[loading]]" top-item></paper-progress>
							</template>
            </app-toolbar>
            <app-toolbar>
              <div main-title><span class="logo">Liyas Thomas</span></div>
							<paper-tabs selected="[[page]]" attr-for-selected="id" autoselect no-bar hidden$="{{!wideLayout}}" on-click="scrollTop">
								<paper-tab id="home">
									<a href="[[rootPath]]">
										<iron-icon icon="my-icons:home"></iron-icon>
										<span>Home</span>
									</a>
								</paper-tab>
								<paper-tab id="projects">
									<a href="projects">
										<iron-icon icon="my-icons:work"></iron-icon>
										<span>Projects</span>
									</a>
								</paper-tab>
								<paper-tab id="blog">
									<a href="blog">
										<iron-icon icon="my-icons:favorite"></iron-icon>
										<span>Blog</span>
									</a>
								</paper-tab>
								<paper-tab id="about">
									<a href="about">
										<iron-icon icon="my-icons:face"></iron-icon>
										<span>About</span>
									</a>
								</paper-tab>
							</paper-tabs>
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
            </app-toolbar>
          </app-header>
					<iron-pages id="pages" selected="[[page]]" attr-for-selected="name" role="main">
						<my-home name="home"></my-home>
						<my-projects name="projects"></my-projects>
						<my-blog name="blog"></my-blog>
						<my-about name="about"></my-about>
						<my-web name="web"></my-web>
						<my-others name="others"></my-others>
						<my-wallpapers name="wallpapers"></my-wallpapers>
						<my-feedie name="feedie"></my-feedie>
						<my-view4 name="view4"></my-view4>
						<my-404 name="404"></my-404>
					</iron-pages>
					<paper-fab id="fab" icon="my-icons:arrow-upward" aria-label="Scroll top" on-click="scrollTop"></paper-fab>
					<footer>
						<iron-icon class="red-fg" icon="my-icons:favorite"></iron-icon>
					</footer>
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
							link: "https://plus.google.com/liyasthomas",
							icon: "google-plus"
						},
						{
							link: "https://liyasthomas.tumblr.com",
							icon: "tumblr"
						},
						{
							link: "https://www.linkedin.com/in/liyasthomas",
							icon: "linkedin"
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
		} else if (['home', 'projects', 'blog', 'about', 'web', 'others', 'wallpapers', 'feedie', 'view4'].indexOf(page) !== -1) {
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
			case 'blog':
				import('./my-blog.js');
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
			case 'feedie':
				import('./my-feedie.js');
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
