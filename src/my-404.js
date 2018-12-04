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

class My404 extends PolymerElement {
	static get template() {
		return html `
      <style>
				:host {
					display: flex;
					text-align: center;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 32px;
					height: calc(100vh - 128px);
				}
				h1 {
					font-size: 3em;
				}
      </style>
			<h1>4😕4</h1>
			<div><a href="[[rootPath]]"><paper-fab icon="my-icons:arrow-back" aria-label="Back"></paper-fab></a></div>
    `;
	}
}

window.customElements.define('my-404', My404);
