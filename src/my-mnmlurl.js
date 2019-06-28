import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
class MyMnmlurl extends PolymerElement {
	static get template() {
		return html `
			<style include="app-grid-style">
			</style>
			<style include="shared-styles">
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
      <paper-dialog id="lightbox" class="lightboxdialog" on-click="toggleLightbox"></paper-dialog>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/projects/mnmlurl.svg" alt="Banner"></iron-image>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">MNMLURL</div>
				<div class="description">Minimal URL is a modern URL shortener with support for custom alias</div>
				<p>The goal was to build a simple URL Shortener which can be hosted with GitHub Pages and doesn't need any costly server to host it, I knew it was not gonna be Super Secure because everything was done in client side.</p>
				<p>Minimal URL is a modern URL shortener with support for custom alias</p>
				<p>- Free and open source.</p>
				<p>- Custom domain support.</p>
				<p>- Custom URLs for shortened links.</p>
				<p>What mnmlurl isn't</p>
				<p>- Super Turbo Nitro Fascinating Amazing Dazzling Fast</p>
				<p>- Most Secure URL Shortener of the universe</p>
			</div>
			<div class$="[[getUIType(UI)]] actions flex-center-center">
				<a href="https://github.com/liyasthomas/mnmlurl">
					<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
				</a>
			</div>
			<iron-ajax auto url="../data/mnmlurl_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
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
				<div class$="[[getUIType(UI)]] actions flex-center-center flex-justified">
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
						<div class$="[[_computeTileClass(sub.color)]] item" on-click="toggleLightbox">
							<div class="container">
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<a href="{{sub.img}}" download="{{sub.img}}" target="_blank" rel="noopener"><paper-icon-button icon="my-icons:{{sub.icon}}"></paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
							<paper-ripple></paper-ripple>
						</div>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section1.link}}">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Completely open source and free. You can host it on your own server.</p>
				<p>As we all know, some social media sites such as Twitter have a character limit that doesn’t allow users to post long URLs. Therefore, the post must be relevant and concise. Best create short url tool is the one that makes a shorter web address having the more accurate information about the content that you want to share instead of having a tweet with a very long URL and misleading content. Moreover, it is recommended to brand a URL created with link compressor so that you know when it is shared.</p>
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
				<div class$="[[getUIType(UI)]] actions flex-center-center flex-justified">
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
						<div class$="[[_computeTileClass(sub.color)]] item" on-click="toggleLightbox">
							<div class="container">
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<a href="{{sub.img}}" download="{{sub.img}}" target="_blank" rel="noopener"><paper-icon-button icon="my-icons:{{sub.icon}}"></paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
							<paper-ripple></paper-ripple>
						</div>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section2.link}}">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>- Shareable, user-friendly URLs.</p>
				<p>- Short links using your brand or custom domain.</p>
				<p>- Custom option for making personalized URLs.</p>
				<p>- High volume commercial URL platforms for applications such as SMS text, email, advertising or social media campaigns.</p>
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
				<div class$="[[getUIType(UI)]] actions flex-center-center flex-justified">
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
						<div class$="[[_computeTileClass(sub.color)]] item" on-click="toggleLightbox">
							<div class="container">
								<div class="flexchild flex-vertical">
									<iron-image class="bg" preload fade sizing="contain" src="{{sub.img}}" alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											{{sub.info}}
										</div>
										<div>
											<a href="{{sub.img}}" download="{{sub.img}}" target="_blank" rel="noopener"><paper-icon-button icon="my-icons:{{sub.icon}}"></paper-icon-button></a>
										</div>
									</div>
								</div>
							</div>
							<paper-ripple></paper-ripple>
						</div>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{section3.link}}">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Insert URLs into email or Skype and never have issues with the links wrapping or breaking. Ideal for blogs, forums, social networks. Used in ebooks, online magazines, newspapers and journals. Archival uses in schools and universities.</p>
				<p>Or anytime you run into a ridiculously long URL that just won't fit the spot mnmlurl can make your address short, plus meaningful!</p>
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
						<a href="project/{{sub.link}}" class$="[[_computeTileClass(sub.color)]] item">
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
							<paper-ripple></paper-ripple>
						</a>
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center">
					<a href="{{similar.link}}">
						<paper-button class="secondary" raised aria-label="View all">View all {{similar.title}} projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
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
	_computeTileClass(color) {
		return color + '-bg';
	}
	toggleLightbox(event) {
		this.$.lightbox.toggle();
		let model = (this.$.lightbox.opened) ?
			`
<iron-image class="lightbox" preload fade sizing="contain" src="`+event.model.__data.sub.img+`" alt="Banner"></iron-image>
			` :
			`
Something went wrong!
			`;
		this.$.lightbox.innerHTML = model;
	}
}
window.customElements.define('my-mnmlurl', MyMnmlurl);
