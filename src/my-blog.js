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
import './shared-styles.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';
import '@polymer/iron-list/iron-list.js';

class MyBlog extends PolymerElement {
	static get template() {
		return html `
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical deep-purple-bg">
				<iron-image class="bg" preload fade sizing="contain" src="../images/assets/projects/banner.svg"  alt="Banner"></iron-image>
			</div>
			<iron-ajax auto url="../data/test.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" on-response="ajaxResponse0">
			</iron-ajax>
			<template is="dom-if" if="{{loading0}}">
				<div class\$="[[getUIType(UI)]] actions flex-center-center" hidden\$="[[!loading0]]">
					<paper-spinner-lite active\$="[[loading0]]"></paper-spinner-lite>
				</div>
			</template>
			<template is="dom-if" if="{{error0}}">
				<div class\$="[[getUIType(UI)]] error">
					<iron-icon icon="my-icons:sentiment-dissatisfied"></iron-icon>
					<p>Try again<paper-icon-button icon="my-icons:refresh" on-click="_load"></paper-icon-button></p>
				</div>
			</template>
      <template is="dom-repeat" id="list" items="[]" as="blog" scroll-target="document">
				<a href="[[blog.post_url]]">View post ([[blog.post_url]])</p>
				<p>[[blog.title]]</p>
				<p>[[blog.body]]</p>
      </template>
      <iron-scroll-threshold id="scrollTheshold"
				lower-threshold="50"
				on-lower-threshold="_load"
				scroll-target="document">
			</iron-scroll-threshold>
    `;
	}

	_load() {
		this.$.ajax0.generateRequest();
	}

	ajaxResponse0(e) {
		var blogs = e.detail.response.response.posts;
		blogs.forEach(function (blog) {
			this.$.list.push('items', blog);
		}, this);
		this.$.scrollTheshold.clearTriggers();
	}

}

window.customElements.define('my-blog', MyBlog);
