import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
class MyMetadata extends PolymerElement {
	static get template() {
		return html `
			<style include="app-grid-style">
			</style>
			<style include="shared-styles">
			</style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
      <paper-dialog id="lightbox" class="lightboxdialog" on-click="toggleLightbox"></paper-dialog>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/projects/metadata.svg" alt="Banner"></iron-image>
			</div>
			<div class$="[[getUIType(UI)]] content">
				<div class="title">Metadata</div>
				<div class="description">File metadata viewer made in Electron</div>
				<p>Metadata will show you all hidden metadata info of audio, video, document, ebook & image files.</p>
				<p>Just drag & drop or upload an image, document, video, audio or even e-book file. We will show you all metadata hidden inside the file!</p>
			</div>
			<div class$="[[getUIType(UI)]] actions flex-center-center">
				<a href="https://github.com/liyasthomas/metadata">
					<paper-button class="secondary" raised aria-label="View all">View project<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
				</a>
				<a href="https://github.com/liyasthomas/metadata">
					<paper-button class="primary" aria-label="View all">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
				</a>
			</div>
			<iron-ajax auto url="../data/metadata_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
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
					<a href="https://github.com/liyasthomas/metadata">
						<paper-button class="primary" aria-label="View all">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Many files contain extra or even hidden data other than the visual data you see at first glance. E-books, photographs, movies, music and even documents can contain data that you don’t see at first glance.</p>
				<p>Photos contain exif data that can give you useful information about the picture. Information such as shutter speed and focal length are stored inside an image. Likewise, you can find out where the photo was taken by looking at the location information.</p>
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
					<a href="https://github.com/liyasthomas/metadata">
						<paper-button class="primary" aria-label="View all">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Similar to photos, videos contain metadata info about the location where the video was shot. Likewise, container formats like AVI and MP4 contain meta information about codecs, video and audio streams and more.</p>
				<p>Documents can contain metadata too. They include information such as file size and date of creation, but also information about the author of a document and the software used to create it.</p>
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
					<a href="https://github.com/liyasthomas/metadata">
						<paper-button class="primary" aria-label="View all">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button>
					</a>
				</div>
			</template>
			<div class$="[[getUIType(UI)]] content">
				<p>Metadata reveals information of your files you may not be aware of.</p>
				<p>Of course we handle your files 100% secure!</p>
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
window.customElements.define('my-metadata', MyMetadata);
