import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyAbout extends PolymerElement {
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
						--app-grid-item-height: 25vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 60vw;
					}
					.item:nth-child(5n+1) {
						@apply --app-grid-expandible-item;
					}
					.item:nth-child(5n+2) {
						@apply --app-grid-expandible-item;
					}
					.item:nth-child(5n+4) {
						@apply --app-grid-expandible-item;
					}
				}
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/projects/banner.svg" alt="Banner"></iron-image>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">
					about me
				</div>
				<div class="description">
					Hi, my name is Liyas Thomas, I'm a designer, developer, and an entrepreneur.
				</div>
				<p>I'm a front end web designer/developer and 3D visualiser, skilled in HTML, CSS and CMS integration. I create clean, professional, functional websites.</p>
				<p>I've been designing websites professionally for over six years. And still loves every second of it.</p>
				<p>
					<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,"><paper-button class="secondary" aria-label="Say hello!">Say hello<iron-icon icon="my-icons:mail-outline"></iron-icon></paper-button></a>
					<a href="https://github.com/liyasthomas/liyasthomas/raw/master/data/Liyas%20Thomas%20-%20Resume.pdf"><paper-button class="primary" aria-label="Download my resume">Download my resume</paper-button></a>
				</p>
				<p>At first I intended to be an artist and started creating art works.</p>
				<p>In high school, I was that kid that seemed to never be paying attention. Seemingly in my own world of doodles and drawings. I've had a pencil in my hand since I was in diapers. Things never change... I'm no longer in diapers though.</p>
				<p>
					<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,"><paper-button class="secondary" aria-label="Hire me">Hire me<iron-icon icon="my-icons:alternate-email"></iron-icon></paper-button></a>
					<a href="projects"><paper-button class="primary" aria-label="My projects">My projects</paper-button></a>
				</p>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">
					buy me a coffee!
				</div>
				<div class="description">
					appreciate my works by making a donation.
				</div>
				<p>
					<a href="https://paypal.me/liyascthomas" target="_blank" rel="noopener"><paper-button class="primary" aria-label="PayPal">PayPal<iron-icon src="../images/assets/social/paypal.svg"></iron-icon></paper-button></a>
				</p>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">
					open source projects
				</div>
				<div class="description">
					open sourcing our projects, or part of it, can help inspire other coders.
				</div>
				<p>
					<a href="projects"><paper-button class="primary" aria-label="My projects">My projects</paper-button></a>
					<a href="https://dribbble.com/liyasthomas"><paper-button class="primary" aria-label="Dribbble">Dribbble<iron-icon src="../images/assets/social/dribbble.svg"></iron-icon></paper-button></a>
					<a href="https://github.com/liyasthomas"><paper-button class="primary" aria-label="GitHub">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button></a>
				</p>
			</div>
			<iron-ajax auto url="../data/about_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
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
			<template is="dom-repeat" items="[[ajaxResponse0.social]]" as="social">
				<div class$="[[getUIType(UI)]] content">
					<div class="title">
						{{social.title}}
					</div>
					<div class="description">
						follow me on
					</div>
					<p>
						<template is="dom-repeat" items="[[social.sub]]" as="sub">
							<a href="{{sub.link}}"><paper-icon-button src="../images/assets/social/{{sub.icon}}.svg" aria-label="Icon"></paper-icon-button></a>
						</template>
					</p>
					<p><a href="https://🏹.to/👦💻" target="_blank">🏹.to/👦💻</a></p>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.gallery]]" as="gallery">
				<div class$="[[getUIType(UI)]] actions flex-justified">
					<div class="title">
						{{gallery.title}}
					</div>
					<paper-icon-button
							hidden$="{{!wideLayout}}"
							toggles
							active="{{UI}}"
							icon$="my-icons:[[getUIIcon(UI)]]">
					</paper-icon-button>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[gallery.sub]]" as="sub">
						<div class="item">
							<div class="container">
								<div class="block top">
									<div class=" title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="cover" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button aria-label="Info">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<a href="{{sub.link}}"><paper-icon-button src="../images/assets/social/{{sub.icon}}.svg" aria-label="Icon"></paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
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

window.customElements.define('my-about', MyAbout);
