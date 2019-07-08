import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
class MyIly extends PolymerElement {
	static get template() {
		return html `
			<style include="app-grid-style">
			</style>
			<style include="shared-styles">
				@media all and (min-width: 961px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-expandible-item-columns: 2;
					}
				}
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
      <paper-dialog id="lightbox" class="lightboxdialog" on-click="toggleLightbox"></paper-dialog>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/projects/ily.svg" alt="Banner"></iron-image>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">Ily</div>
				<div class="description">Sharing is better than getting Likes</div>
				<p>Your social network is owned by advertisers.</p>
				<p>Every post you share, every friend you make and every link you follow is tracked, recorded and converted into data.</p>
				<p>You are the product that’s bought and sold.</p>
				<p>We believe there is a better way.</p>
				<p>We believe in audacity.</p>
				<p>We believe in beauty, simplicity and transparency.</p>
				<p>We believe that the people who make things and the people who use them should be in partnership. We believe a social network can be a tool for empowerment. Not a tool to deceive, coerce and manipulate — but a place to connect, create and celebrate life. You are not a product.</p>
			</div>
			<div class$="[[getUIType(UI)]] actions flex-center-center">
				<a href="https://ily-chat.firebaseapp.com" target="_blank" rel="noopener">
					<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
				</a>
				<a href="https://github.com/liyasthomas/ily" target="_blank" rel="noopener">
					<paper-button class="primary" aria-label="GitHub">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
				</a>
			</div>
			<iron-ajax auto url="../data/ily_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
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
					<a href="{{section1.link}}" target="_blank" rel="noopener">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
					<a href="https://github.com/liyasthomas/ily" target="_blank" rel="noopener">
						<paper-button class="primary" aria-label="GitHub">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Your social network has colors.</p>
				<p>What's the point of those? Deceit.
				<p>Your social network has other people and not just the two weird guys who told you to join and some tech journalist who posts about nothing but the death of Facebook. Who could ask for more than that? Trust us, this is not going to be as depressing as Google+ all over again.</p>
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
					<a href="{{section2.link}}" target="_blank" rel="noopener">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
					<a href="https://github.com/liyasthomas/ily" target="_blank" rel="noopener">
						<paper-button class="primary" aria-label="GitHub">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Your social network has advertisers who pay for the social network to continue operating. You are the product that is bought and sold to pay for servers. To pay for coders. To pay for Vietnamese takeout on Fridays.</p>
				<p>We believe there is a better way. An empty social network with no ads. A social network that keeps costs low by not using a lot of bandwidth on graphics. We believe in a social network that looks like a text file. One with circles and no sense of design. A social network you will join and then never look at again. But not like Google+, seriously.</p>
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
					<a href="{{section3.link}}" target="_blank" rel="noopener">
						<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
					<a href="https://github.com/liyasthomas/ily" target="_blank" rel="noopener">
						<paper-button class="primary" aria-label="GitHub">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>We believe in audacity. We believe in beauty, simplicity, and patching in privacy settings because we accidentally gave away the full names of all our users. We believe in a partnership between the social network and the users who are going to be complaining any time we inevitably try to make any money off this thing.</p>
				<p>We believe a social network can be a tool for empowerment. Like fire or the wheel, only it lets you share pictures of cats and make vague, self-pitying posts about how hard your day was. It lets you rediscover friends who told you to join Ello on Facebook. It lets you be smug because you were an early adopter with a name like @beef or @jim and not like those late adopters like @roastbeef and @james.</p>
				<p>You are not a product. You're a sort of apelike creature that likes to post pictures of what you are having for dinner and talk about your kids to nobody.</p>
				<p>It may be another hollow experience. Another desperate scream into the digital abyss that will go unanswered.</p>
				<p>But goddamn it, there aren't ads.</p>
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
window.customElements.define('my-ily', MyIly);
