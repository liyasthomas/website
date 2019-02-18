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
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				white-space: nowrap;
				font-weight: normal;
				cursor: pointer;
				--paper-item-focused: {
					color: var(--accent-color);
				};
				--paper-item-focused-before: {
					opacity: 0;
				};
			}
			paper-menu-button {
				padding: 0;
			}
			paper-icon-button {
				margin: 0 4px;
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
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				text-transform: none;
				transition: all .1s ease;
				border-radius: 8px;
			}
			paper-button.primary {
				background-color: #fff;
				color: var(--accent-color);
				border: 1px solid var(--light-text-color);
				--paper-button-raised-keyboard-focus: {
					color: var(--dark-accent-color);
				};
			}
			paper-button.primary:hover {
				color: var(--dark-accent-color);
			}
			paper-button.secondary {
				background-color: var(--accent-color);
				color: #fff;
				--paper-button-raised-keyboard-focus: {
					background-color: var(--dark-accent-color);
				};
			}
			paper-button.secondary:hover {
				background-color: var(--dark-accent-color);
			}
			paper-button iron-icon {
				margin-left: 8px;
			}
			paper-progress {
				display: block;
				width: 100%;
			}
			paper-input.searchInput {
				background-color: rgba(0,0,0,.04);
				border-radius: 32px;
				--paper-input-container: {
					padding: 4px;
				};
				--paper-input-container-underline: {
					display: none;
					height: 0;
				};
				--paper-input-container-underline-focus: {
					display: none;
				};
				--paper-input-container-input: {
					padding: 4px;
					font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				};
				--paper-input-container-input-focus: {
				}
			}
			paper-input.searchInput[focused] {
				background-color: var(--light-primary-color);
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
				height: 30vh;
			}
			.actions {
				@apply --layout-horizontal;
				padding: 32px;
			}
			.actions .title,
			.content .title {
				font-size: 28px;
				color: var(--primary-text-color);
				text-transform: capitalize;
			}
			.actions paper-icon-button {
				color: var(--divider-text-color);
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
				text-align: center;
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
				--app-grid-item-height: 25vw;
			}
			.app-grid {
				margin: 0 auto;
				padding-top: 0;
				padding-bottom: 0;
			}
			.item {
				transition: all .1s ease;
				border-radius: 8px;
				border-radius: 8px;
				background-color: #fff;
//				@apply --shadow-elevation-2dp;
			}
			.item:hover {
//				@apply --shadow-elevation-4dp;
			}
			.container {
				@apply --layout-flex;
				@apply --layout-vertical;
				height: 100%;
			}
			.bg {
				@apply --layout-flex;
				transition: all .1s ease;
				border-left: 1px solid var(--light-text-color);
				border-right: 1px solid var(--light-text-color);
				--iron-image-placeholder: {
					background-color: #fff;
				}
			}
			.block {
				@apply --layout-horizontal;
			}
			.top {
				padding: 32px 32px 4px 32px;
				border-radius: 8px 8px 0 0;
				border-top: 1px solid var(--light-text-color);
				border-left: 1px solid var(--light-text-color);
				border-right: 1px solid var(--light-text-color);
			}
			.mid {
				padding: 4px 32px 16px 32px;
				border-left: 1px solid var(--light-text-color);
				border-right: 1px solid var(--light-text-color);
			}
			.bottom {
				padding: 16px;
				border-radius: 0 0 8px 8px;
				border-left: 1px solid var(--light-text-color);
				border-right: 1px solid var(--light-text-color);
				border-bottom: 1px solid var(--light-text-color);
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
				-webkit-line-clamp: 3;
				color: var(--secondary-text-color);
				font-size: 20px;
				line-height: 1.2;
			}
			.info {
				@apply --layout-flex;
				@apply --layout-horizontal;
				@apply --layout-center;
				color: var(--accent-color);
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
				.actions, .content {
					padding: 16px;
				}
			}
			.white-bg {
				background-color: #fff;
				color: var(--paper-grey-800);
			}
			.black-bg {
				background-color: var(--paper-grey-800);
				color: #fff;
			}
			.grey-bg {
				background-color: var(--paper-grey-200);
				color: var(--paper-grey-800);
			}
			.purple-bg {
				background-color: var(--paper-purple-a400);
				color: #fff;
			}
			.deep-purple-bg {
				background-color: var(--paper-deep-purple-a400);
				color: #fff;
			}
			.red-bg {
				background-color: var(--paper-red-a400);
				color: #fff;
			}
			.pink-bg {
				background-color: var(--paper-pink-a400);
				color: #fff;
			}
			.orange-bg {
				background-color: var(--paper-orange-a400);
				color: #fff;
			}
			.deep-orange-bg {
				background-color: var(--paper-deep-orange-a400);
				color: #fff;
			}
			.cyan-bg {
				background-color: var(--paper-cyan-a400);
				color: #fff;
			}
			.green-bg {
				background-color: var(--paper-green-a400);
				color: #fff;
			}
			.yellow-bg {
				background-color: var(--paper-yellow-a400);
				color: var(--paper-grey-900);
			}
			.blue-bg {
				background-color: var(--paper-blue-a400);
				color: #fff;
			}
			.light-blue-bg {
				background-color: var(--paper-light-blue-a400);
				color: #fff;
			}
			.teal-bg {
				background-color: var(--paper-teal-a400);
				color: #fff;
			}
			.indigo-bg {
				background-color: var(--paper-indigo-a400);
				color: #fff;
			}
			.blue-grey-bg {
				background-color: var(--paper-blue-grey-700);
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
				color: var(--paper-yellow-a700);
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
