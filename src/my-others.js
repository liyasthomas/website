import {
	PolymerElement,
	html
} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/paper-input/paper-input.js';
class MyOthers extends PolymerElement {
	static get template() {
		return html `
			<style include="app-grid-style">
			</style>
			<style include="shared-styles">
			</style>
			<iron-media-query query="min-width: 341px" query-matches="{{wideLayout}}"></iron-media-query>
			<div class="banner flexchild flex-vertical">
				<iron-image preload fade sizing="contain" src="../images/assets/feeds/others.svg" alt="Banner"></iron-image>
			</div>
			<iron-ajax auto url="../data/others_feeds.json" id="ajax0" loading="{{loading0}}" handle-as="json" last-error="{{error0}}" on-response="_handleResponse" last-response="{{ajaxResponse0}}">
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
			<template is="dom-repeat" items="[[ajaxResponse0.others]]" as="others">
				<div class$="[[getUIType(UI)]] content flex-justified">
					<paper-input class="searchInput" value="{{filterVal}}" placeholder="Search other projects" no-label-float>
						<paper-icon-button icon="my-icons:search" slot="prefix" aria-label="Icon"></paper-icon-button>
						<paper-icon-button slot="suffix" on-click="clearInput" icon="my-icons:close" alt="clear" title="clear" hidden$="{{!filterVal}}" aria-label="Icon"></paper-icon-button>
					</paper-input>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center flex-justified">
					<div class="title">
						{{others.title}} <span>({{renderedCount}})</span>
					</div>
					<div>
						<paper-menu-button horizontal-align="right">
 							<paper-icon-button class="link" icon="my-icons:sort" slot="dropdown-trigger" aria-label="Icon"></paper-icon-button>
							<paper-listbox slot="dropdown-content" class="listbox" attr-for-selected="name" selected="{{sortVal}}">
								<paper-icon-item name="date"><iron-icon icon="my-icons:date-range" slot="item-icon"></iron-icon>Date<paper-ripple></paper-ripple></paper-icon-item>
								<paper-icon-item name="title"><iron-icon icon="my-icons:sort-by-alpha" slot="item-icon"></iron-icon>Alphabet<paper-ripple></paper-ripple></paper-icon-item>
							</paper-listbox>
						</paper-menu-button>
						<paper-icon-button
								class="link"
								hidden$="{{!wideLayout}}"
								toggles
								active="{{UI}}"
								icon$="my-icons:[[getUIIcon(UI)]]"
								aria-label="Icon">
						</paper-icon-button>
					</div>
				</div>
				<div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
					<template is="dom-repeat" items="[[filteredResults]]" as="sub" filter="{{_filter(filterVal)}}" sort="{{_sort(sortVal)}}" rendered-item-count="{{renderedCount}}">
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
											<iron-icon icon="my-icons:{{sub.icon}}" aria-label="Icon"></iron-icon>
										</div>
									</div>
								</div>
							</div>
							<paper-ripple></paper-ripple>
						</a>
					</template>
					<template is="dom-if" if="{{!renderedCount}}">
						Nothing found for '{{filterVal}}'
					</template>
				</div>
				<div class$="[[getUIType(UI)]] actions flex-center-center flex-justified">
					<paper-fab icon="my-icons:arrow-back" mini disabled="[[isPrevDisabled]]" aria-label="Prev" on-click="_getAllResults">Prev</paper-fab>
					<a href="{{others.link}}">
						<paper-button class="secondary" raised aria-label="View all">Back to all projects<iron-icon icon="my-icons:arrow-forward"></iron-icon></paper-button>
					</a>
					<paper-fab icon="my-icons:arrow-forward" mini disabled="[[isNextDisabled]]" aria-label="Next" on-click="_getAllResults">Next</paper-fab>
				</div>
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
											<iron-icon icon="my-icons:{{sub.icon}}" aria-label="Icon"></iron-icon>
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
	static get properties() {
		return {
			sortVal: {
				type: String,
				value: "none",
				reflectToAttribute: true
			},
			pageNumber: {
				type: Number,
				value: 0
			}
		};
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
	_filter(val) {
		return function (sub) {
			if (!val) return true;
			if (!sub) return false;
			return (sub.title && ~sub.title.toLowerCase().indexOf(val.toLowerCase())) ||
				(sub.description && ~sub.description.toLowerCase().indexOf(val.toLowerCase()));
		};
	}
	_sort(val) {
		switch (val) {
			case 'title':
				return function (a, b) {
					if (a.title.toLowerCase() === b.title.toLowerCase()) return 0;
					return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
				};
		}
	}
	clearInput() {
		this.filterVal = null;
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
	_handleResponse(e) {
		this.data = e.detail.response;
		this._getAllResults();
	}
	_getAllResults(event) {
		this.resData = this.data.others[0].sub;
		this.isPrevDisabled = true;
		this.isNextDisabled = false;
		let start;
		let end;
		start = 0;
		end = start + 3;
		if (event) {
			switch (event.target.innerHTML) {
				case 'Next':
					this.pageNumber++;
					start = this.pageNumber * 3;
					end = start + 3;
					this.isPrevDisabled = false;
					this.isNextDisabled = end > this.resData.length - 1 ? true : false;
					break;
				case 'Prev':
					this.pageNumber--;
					start = this.pageNumber * 3;
					end = start + 3;
					this.isPrevDisabled = this.pageNumber === 0 ? true : false;
					this.isNextDisabled = false;
					break;
				default:
					start = 0;
					end = start + 3;
					break;
			}
		}
		this.filteredResults = this.resData.slice(start, end);
	}
}
window.customElements.define('my-others', MyOthers);
