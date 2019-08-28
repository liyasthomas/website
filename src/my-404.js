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
				}
				h2 {
					font-size: 2em;
					margin: 0;
				}
				h3 {
					font-size: 1em;
					margin: 16px 0;
					color: #b2b2b2;
				}
				paper-fab {
					color: var(--primary-color);
				}
			</style>
			<h2>404</h2>
			<h3>Page not found!</h3>
			<div><a href="/"><paper-fab icon="my-icons:arrow-back" aria-label="Back"></paper-fab></a></div>
		`;
	}
}
window.customElements.define('my-404', My404);
