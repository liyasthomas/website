/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
			*,
			*:focus,
			*::before,
			*::after {
				box-sizing: border-box;
				outline: 0;
			}
			[hidden] {
				display: none;
			}
			a {
				text-decoration: none;
				color: inherit;
			}
			a.link {
				color: var(--accent-color);
			}
			a.link:hover {
				color: var(--dark-accent-color);
			}
			a iron-icon {
				margin-left: 8px;
			}
			p {
				margin: 16px 0;
			}
			ul {
				margin: 0;
				padding: 0;
				list-style: none;
			}
			h1,
			h2,
			h3,
			h4 {
				font-weight: normal;
				margin: 0;
			}
			.listbox {
				background: none;
				color: inherit;
			}
			paper-item,
			paper-icon-item {
        font-family: "Product Sans", "Roboto", "Noto", sans-serif;
				--paper-item-focused-before: {
					opacity: 0;
				};
			}
			paper-icon-button.link {
				margin: 4px;
			}
			paper-icon-button.link {
				color: var(--secondary-text-color);
			}
			paper-icon-button.link:hover {
				color: var(--secondary-text-color);
			}
			paper-button {
				margin: 4px;
				padding: .6em 1.2em;
        font-family: "Product Sans", "Roboto", "Noto", sans-serif;
				font-weight: 700;
				text-transform: none;
				transition: all .1s ease;
				border-radius: 32px;
			}
			paper-button.secondary {
				background-color: #fff;
				color: var(--secondary-text-color);
				--paper-button-raised-keyboard-focus: {
					color: var(--accent-color);
				};
			}
			paper-button.secondary:hover {
				color: var(--accent-color);
			}
			paper-button iron-icon {
				margin-left: 8px;
			}
			paper-progress {
				display: block;
				width: 100%;
			}
			iron-collapse {
				outline: none;
			}
			.flexchild {
				@apply --layout-flex;
			}
			.flex-vertical {
				@apply --layout-vertical;
			}
			.flex-horizontal {
				@apply --layout-horizontal;
			}
			.flex-center-center {
				@apply --layout-horizontal;
				@apply --layout-center-center;
			}
			.flex-end-align {
				@apply --layout-horizontal;
				@apply --layout-end;
				height: 100%
			}
			.flex-justified {
				@apply --layout-justified;
			}
			.banner {
				height: calc(100vh - 128px);
			}
			.actions {
				@apply --layout-horizontal;
				padding: 32px;
			}
			.actions:nth-child(even) {
				margin-bottom: 16px;
			}
			.actions .title,
			.content .title {
				font-size: 28px;
				color: var(--primary-text-color);
			}
			.actions paper-icon-button {
				color: var(--secondary-text-color);
			}
			.content {
				background-color: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				padding: 32px;
			}
			.error {
				padding: 32px;
				font-family: "Roboto Mono", Consolas, Menlo, Monaco, monospace;
				font-size: 14px;
				font-weight: 700;
				color: var(--secondary-text-color);
			}
			.grid {
				width: 90%;
			}
			.grid, .list {
				margin: 0 auto;
				transition: all .1s ease;
			}
			.list .item {
				@apply(--app-grid-expandible-item);
				--app-grid-item-height: 35vw;
			}
			.app-grid {
				margin: 0 auto;
				padding-top: 0;
				padding-bottom: 0;
			}
			.item {
				border: 1px solid var(--light-text-color);
				transition: all .1s ease;
				border-radius: 8px;
				border-radius: 8px;
			}
			.item:hover {
//				@apply --shadow-elevation-4dp;
			}
			.lightbox {
				width: 100%;
				height: 100%;
			}
			.container {
      	@apply --layout-flex;
      	@apply --layout-vertical;
			}
			.bg {
				@apply --layout-flex;
				--iron-image-placeholder: {
					background-color: #fff;
				}
				transition: all .1s ease;
			}
			.block {
      	@apply --layout-horizontal;
				background-color: #fff;
			}
			.top {
				padding: 16px 16px 4px 16px;
				border-radius: 8px 8px 0 0;
			}
			.mid {
				padding: 4px 16px 16px 16px;
			}
			.bottom {
				padding: 8px 16px 8px 8px;
				border-radius: 0 0 8px 8px;
			}
			.title {
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				font-size: 24px;
				line-height: 1.25;
				font-weight: 700;
			}
			.title span {
				color: var(--secondary-text-color);
			}
			iron-icon.big {
				margin-right: 16px;
				--iron-icon-height: 32px;
				--iron-icon-width: 32px;
			}
			.description {
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				font-size: 20px;
				font-weight: 700;
				line-height: 1.2;
				color: var(--secondary-text-color);
			}
			.info {
				@apply --layout-flex;
				@apply --layout-horizontal;
				@apply --layout-center;
				font-weight: 700;
				text-overflow: ellipsis;
			}
			@media (max-width: 640px) {
				.title {
					font-size: 20px;
				}
				.description {
					font-size: 18px;
				}
				.grid {
					width: 100%;
				}
				.list .item {
					--app-grid-item-height: 100vw;
				}
			}
			.white-bg {
				background-color: #fff;
				color: var(--paper-grey-800);
			}
			.black-bg {
				background-color: var(--paper-grey-700);
				color: #fff;
			}
			.grey-bg {
				background-color: var(--paper-grey-200);
				color: var(--paper-grey-800);
			}
			.purple-bg {
				background-color: var(--paper-purple-a400);
				background-image: linear-gradient(315deg, var(--paper-purple-a200), var(--paper-purple-a400), var(--paper-purple-a700));
				color: #fff;
			}
			.deep-purple-bg {
				background-color: var(--paper-deep-purple-a400);
				background-image: linear-gradient(315deg, var(--paper-deep-purple-a200), var(--paper-deep-purple-a400), var(--paper-deep-purple-a700));
				color: #fff;
			}
			.red-bg {
				background-color: var(--paper-red-a400);
				background-image: linear-gradient(315deg, var(--paper-red-a200), var(--paper-red-a400), var(--paper-red-a700));
				color: #fff;
			}
			.pink-bg {
				background-color: var(--paper-pink-a400);
				background-image: linear-gradient(315deg, var(--paper-pink-a200), var(--paper-pink-a400), var(--paper-pink-a700));
				color: #fff;
			}
			.orange-bg {
				background-color: var(--paper-orange-a400);
				background-image: linear-gradient(315deg, var(--paper-orange-a200), var(--paper-orange-a400), var(--paper-orange-a700));
				color: #fff;
			}
			.deep-orange-bg {
				background-color: var(--paper-deep-orange-a400);
				background-image: linear-gradient(315deg, var(--paper-deep-orange-a200), var(--paper-deep-orange-a400), var(--paper-deep-orange-a700));
				color: #fff;
			}
			.cyan-bg {
				background-color: var(--paper-cyan-a400);
				background-image: linear-gradient(315deg, var(--paper-cyan-a200), var(--paper-cyan-a400), var(--paper-cyan-a700));
				color: #fff;
			}
			.green-bg {
				background-color: var(--paper-green-a400);
				background-image: linear-gradient(315deg, var(--paper-green-a200), var(--paper-green-a400), var(--paper-green-a700));
				color: #fff;
			}
			.yellow-bg {
				background-color: var(--paper-yellow-a400);
				background-image: linear-gradient(315deg, var(--paper-yellow-a200), var(--paper-yellow-a400), var(--paper-yellow-a700));
				color: var(--paper-grey-900);
			}
			.blue-bg {
				background-color: var(--paper-blue-a400);
				background-image: linear-gradient(315deg, var(--paper-blue-a200), var(--paper-blue-a400), var(--paper-blue-a700));
				color: #fff;
			}
			.light-blue-bg {
				background-color: var(--paper-light-blue-a400);
				background-image: linear-gradient(315deg, var(--paper-light-blue-a200), var(--paper-light-blue-a400), var(--paper-light-blue-a700));
				color: #fff;
			}
			.teal-bg {
				background-color: var(--paper-teal-a400);
				background-image: linear-gradient(315deg, var(--paper-teal-a200), var(--paper-teal-a400), var(--paper-teal-a700));
				color: var(--paper-teal-a400);
			}
			.indigo-bg {
				background-color: var(--paper-indigo-a400);
				background-image: linear-gradient(315deg, var(--paper-indigo-a200), var(--paper-indigo-a400), var(--paper-indigo-a700));
				color: #fff;
			}
			.blue-grey-bg {
				background-color: var(--paper-blue-grey-500);
				background-image: linear-gradient(315deg, var(--paper-blue-grey-500), var(--paper-blue-grey-600), var(--paper-blue-grey-700));
				color: #fff;
			}

			.white-fg {
				color: var(--paper-grey-800);
			}
			.grey-fg {
				color: var(--paper-grey-800);
			}
			.black-fg {
				color: var(--paper-grey-900);
			}
			.purple-fg {
				color: var(--paper-purple-a400);
			}
			.deep-purple-fg {
				color: var(--paper-deep-purple-a400);
			}
			.red-fg {
				color: var(--paper-red-a400);
			}
			.pink-fg {
				color: var(--paper-pink-a400);
			}
			.yellow-fg {
				color: var(--paper-yellow-a400);
			}
			.cyan-fg {
				color: var(--paper-cyan-a400);
			}
			.green-fg {
				color: var(--paper-green-a400);
			}
			.orange-fg {
				color: var(--paper-orange-a400);
			}
			.deep-orange-fg {
				color: var(--paper-deep-orange-a400);
			}
			.blue-fg {
				color: var(--paper-blue-a400);
			}
			.blue-grey-fg {
				color: var(--paper-blue-grey-500);
			}
			.light-blue-fg {
				color: var(--paper-light-blue-a400);
			}
			.teal-fg {
				color: var(--paper-teal-a400);
			}
			.indigo-fg {
				color: var(--paper-indigo-a400);
			}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
