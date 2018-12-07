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

class MyBlog extends PolymerElement {
	static get template() {
		return html `
      <style include="shared-styles">
        :host {
          display: block;
        }
      </style>
			<iron-media-query query="min-width: 641px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical pink-bg">
				<iron-image class="bg" preload fade sizing="contain" src="../images/assets/projects/banner.svg"  alt="Banner"></iron-image>
			</div>

Blog

    `;
	}
}

window.customElements.define('my-blog', MyBlog);
