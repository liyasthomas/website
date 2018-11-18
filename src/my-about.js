/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';

class MyAbout extends PolymerElement {
  static get template() {
    return html`
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
						--app-grid-item-height: 120vw;
						--app-grid-expandible-item-columns: 1;
					}
					.list {
						width: 100%;
					}
				}
				@media all and (min-width: 361px) and (max-width: 640px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-gutter: 16px;
						--app-grid-item-height: 80vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 100%;
					}
					.item:nth-child(3n+1) {
						@apply --app-grid-expandible-item;
					}
				}
				@media all and (min-width: 641px) and (max-width: 960px) {
					:host {
						--app-grid-columns: 2;
						--app-grid-gutter: 32px;
						--app-grid-item-height: 70vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 80vw;
					}
					.item:nth-child(5n+1) {
						@apply --app-grid-expandible-item;
					}
				}
				@media all and (min-width: 961px) {
					:host {
						--app-grid-columns: 4;
						--app-grid-gutter: 32px;
						--app-grid-item-height: 40vw;
						--app-grid-expandible-item-columns: 2;
					}
					.list {
						width: 60vw;
					}
					.item:nth-child(7n+2) {
						@apply --app-grid-expandible-item;
					}
				}
      </style>
			<div class="content">
				<div class="title">
					About&nbsp;<span>me</span>
				</div>
				<div class="description">
					Hi, My name is Liyas Thomas - a designer, developer, and an entrepreneur.
				</div>
				<p>I'm a front end web designer/developer and 3D visualiser, skilled in HTML, CSS and CMS integration. I create clean, professional, functional websites.</p>
				<p>I've been designing websites professionally for over six years. And still loves every second of it.</p>
				<p>
					<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,"><paper-button raised class="primary">Say hello!<iron-icon icon="my-icons:mail"></iron-icon></paper-button></a>
				</p>
				<p>At first I intended to be an artist and started creating art works.</p>
				<p>In high school, I was that kid that seemed to never be paying attention. Seemingly in my own world of doodles and drawings. I've had a pencil in my hand since I was in diapers. Things never change... I'm no longer in diapers though.</p>
				<p>
					<a href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,"><paper-button raised class="primary">Hire me<iron-icon icon="my-icons:flash-on"></iron-icon></paper-button></a>
					<a href="projects"><paper-button raised class="secondary">My projects<iron-icon icon="my-icons:work"></iron-icon></paper-button></a>
				</p>
			</div>
			<div class="content">
				<div class="title">
					Buy me a&nbsp;<span>coffee!</span>
				</div>
				<div class="description">
					Appreciate my works by making a donation.
				</div>
				<p>
					<a href="https://paypal.me/liyascthomas/50" target="_blank"><paper-button raised class="secondary">PayPal<iron-icon src="../images/assets/social/paypal.svg"></iron-icon></paper-button></a>
				</p>
			</div>
			<div class="content">
				<div class="title">
					<span>Open source</span>&nbsp;projects
				</div>
				<div class="description">
					Open sourcing our projects, or part of it, can help inspire other coders.
				</div>
				<p>
					<a href="projects"><paper-button raised class="secondary">My projects<iron-icon icon="my-icons:work"></iron-icon></paper-button></a>
					<a href="https://dribbble.com/liyasthomas"><paper-button class="secondary">Dribbble<iron-icon src="../images/assets/social/dribbble.svg"></iron-icon></paper-button></a>
					<a href="https://github.com/liyasthomas"><paper-button class="secondary">GitHub<iron-icon src="../images/assets/social/github.svg"></iron-icon></paper-button></a>
				</p>
			</div>
			<iron-ajax auto url="data/about_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" last-response="{{ajaxResponse0}}">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class="actions flex-center-center" hidden$="[[!loading0]]">
					<paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<div class="error">
					<div>Failed to load feeds.</div>
					<div>Make sure you're connected to internet.</div>
					<a href="javascript:location.reload();"><paper-icon-button icon="my-icons:refresh"></paper-icon-button></a>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.social]]" as="social">
				<div class="content">
					<template is="dom-if" if="{{!error0}}">
						<div class="title">
							I'm&nbsp;<span>{{social.title}}</span>
						</div>
						<div class="description">
							Follow me on:
						</div>
					</template>
					<p>
						<template is="dom-repeat" items="[[social.sub]]" as="sub">
							<a href="{{sub.link}}"><paper-icon-button src="../images/assets/social/{{sub.icon}}.svg"></paper-icon-button></a>
						</template>
					</p>
					<p><a href="🏹.to/👦💻">🏹.to/👦💻</a></p>
				</div>
			</template>
			<template is="dom-repeat" items="[[ajaxResponse0.gallery]]" as="gallery">
				<template is="dom-if" if="{{!error0}}">
					<div class="content">
						<div class="title">
							<span>{{gallery.title}}</span>
						</div>
					</div>
				</template>
				<div class="app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[gallery.sub]]" as="sub">
						<div class="item">
							<div class="container">
								<div class="block top">
									<div class="title">{{sub.title}}</div>
								</div>
								<div class="block mid">
									<div class="description">{{sub.description}}</div>
								</div>
								<div class$="[[_computeBgClass(sub.color)]] flexchild">
									<iron-image class="bg" preload fade sizing="cover" src="{{sub.img}}"  alt="{{sub.title}}"></iron-image>
								</div>
								<div class="block bottom">
									<div class="info">
										<div class="flexchild">
											<a href="{{sub.link}}"><paper-button class$="[[_computeFgClass(sub.color)]]">{{sub.info}}</paper-button></a>
										</div>
										<div>
											<iron-icon src="../images/assets/social/{{sub.icon}}.svg"></iron-icon>
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

	_computeBgClass(color) {
		return color + '-bg';
	}

	_computeFgClass(color) {
		return color + '-fg';
	}
}

window.customElements.define('my-about', MyAbout);
