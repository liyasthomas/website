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
					background-color: #aaa;
					margin-top: -128px;
					height: 100vh;
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
