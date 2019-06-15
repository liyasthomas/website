import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
class MyBanner extends PolymerElement {
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
						--app-grid-item-height: 110vw;
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
						--app-grid-item-height: 100vw;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 641px) and (max-width: 960px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-gutter: 24px;
						--app-grid-item-height: 60vw;
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
						--app-grid-columns: 3;
						--app-grid-gutter: 24px;
						--app-grid-item-height: 30vw;
						--app-grid-expandible-item-columns: 3;
					}
					.list {
						width: 50vw;
					}
				}
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/projects/banner.svg" alt="Banner"></iron-image>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">Banner</div>
				<div class="description">Faculty feedback system</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsum. Alias facilis illo, consequatur perspiciatis! Itaque ex dicta similique iste nostrum veritatis fugiat cupiditate magnam asperiores, laudantium sint vitae esse!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rem neque saepe ut minus nostrum non eligendi iusto, inventore, nam, repellat! Facilis veniam eius, magnam dolore pariatur soluta corrupti quibusdam?</p>
			</div>
			<div class$="[[getUIType(UI)]] actions flex-center-center">
				<a href="https://github.com/liyasthomas/banner">
					<paper-button class="secondary" aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
				</a>
			</div>
			<iron-ajax auto url="../data/banner_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class$="[[getUIType(UI)]] actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class$="[[getUIType(UI)]] error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.section1]]" as="section1">
				<div class$="[[getUIType(UI)]] actions flex-justified">
					<div class="title">
						{{section1.title}}
					</div>
					<paper-icon-button
							class="link"
							hidden$="{{!wideLayout}}"
							toggles
							active="{{UI}}"
							icon$="my-icons:[[getUIIcon(UI)]]"
							aria-label="Icon">
					</paper-icon-button>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[section1.sub]]" as="sub">
						<a href="{{sub.link}}" class="item">
							<div class="container">
								<div class="block top">
									<div class=" title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<iron-icon icon="my-icons:{{sub.icon}}"></iron-icon>
										</div>
									</div>
								</div>
							</div>
						</a>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section1.link}}">
						<paper-button class="secondary" aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsum. Alias facilis illo, consequatur perspiciatis! Itaque ex dicta similique iste nostrum veritatis fugiat cupiditate magnam asperiores, laudantium sint vitae esse!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rem neque saepe ut minus nostrum non eligendi iusto, inventore, nam, repellat! Facilis veniam eius, magnam dolore pariatur soluta corrupti quibusdam?</p>
			</div>
			<template is="dom-if" if="{{loading0}}">
				<div class$="[[getUIType(UI)]] actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class$="[[getUIType(UI)]] error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.section2]]" as="section2">
				<div class$="[[getUIType(UI)]] actions flex-justified">
					<div class="title">
						{{section2.title}}
					</div>
					<paper-icon-button
							class="link"
							hidden$="{{!wideLayout}}"
							toggles
							active="{{UI}}"
							icon$="my-icons:[[getUIIcon(UI)]]"
							aria-label="Icon">
					</paper-icon-button>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[section2.sub]]" as="sub">
						<a href="{{sub.link}}" class="item">
							<div class="container">
								<div class="block top">
									<div class=" title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<iron-icon icon="my-icons:{{sub.icon}}"></iron-icon>
										</div>
									</div>
								</div>
							</div>
						</a>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section2.link}}">
						<paper-button class="secondary" aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsum. Alias facilis illo, consequatur perspiciatis! Itaque ex dicta similique iste nostrum veritatis fugiat cupiditate magnam asperiores, laudantium sint vitae esse!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rem neque saepe ut minus nostrum non eligendi iusto, inventore, nam, repellat! Facilis veniam eius, magnam dolore pariatur soluta corrupti quibusdam?</p>
			</div>
			<template is="dom-if" if="{{loading0}}">
				<div class$="[[getUIType(UI)]] actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class$="[[getUIType(UI)]] error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.section3]]" as="section3">
				<div class$="[[getUIType(UI)]] actions flex-justified">
					<div class="title">
						{{section3.title}}
					</div>
					<paper-icon-button
							class="link"
							hidden$="{{!wideLayout}}"
							toggles
							active="{{UI}}"
							icon$="my-icons:[[getUIIcon(UI)]]"
							aria-label="Icon">
					</paper-icon-button>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[section3.sub]]" as="sub">
						<a href="{{sub.link}}" class="item">
							<div class="container">
								<div class="block top">
									<div class=" title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<iron-icon icon="my-icons:{{sub.icon}}"></iron-icon>
										</div>
									</div>
								</div>
							</div>
						</a>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section3.link}}">
						<paper-button class="secondary" aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, ipsum. Alias facilis illo, consequatur perspiciatis! Itaque ex dicta similique iste nostrum veritatis fugiat cupiditate magnam asperiores, laudantium sint vitae esse!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis rem neque saepe ut minus nostrum non eligendi iusto, inventore, nam, repellat! Facilis veniam eius, magnam dolore pariatur soluta corrupti quibusdam?</p>
			</div>
			<template is="dom-if" if="{{loading0}}">
				<div class$="[[getUIType(UI)]] actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<template is="dom-if" if="{{!loading0}}">
					<div class$="[[getUIType(UI)]] error">
						<paper-button on-click="tryAgain" aria-label="Try again">Try again<iron-icon icon="my-icons:refresh"></iron-icon></paper-button>
					</div>
				</template>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.similar]]" as="similar">
				<div class$="[[getUIType(UI)]] actions">
					<div class="title">
						{{similar.title}}
					</div>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[similar.sub]]" as="sub">
						<a href="{{sub.link}}" class="item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<iron-icon icon="my-icons:{{sub.icon}}"></iron-icon>
										</div>
									</div>
								</div>
							</div>
						</a>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{similar.link}}">
						<paper-button class="secondary" aria-label="View all">View all {{similar.title}} projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
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
}
window.customElements.define('my-banner', MyBanner);
