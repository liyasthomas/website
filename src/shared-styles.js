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
				cursor: pointer;
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
				font-weight: 700;
				margin: 0;
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
			}
			.listbox {
				background: none;
				color: inherit;
			}
			paper-item,
			paper-icon-item {
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				font-size: 18px;
				white-space: nowrap;
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
				transition: all .2s ease;
			}
			paper-icon-button.link {
				color: var(--secondary-text-color);
			}
			paper-icon-button.link:hover {
				color: var(--primary-text-color);
			}
			paper-button {
				margin: 4px;
				padding: 16px 32px;
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				text-transform: none;
				transition: all .2s ease;
				border-radius: 32px;
			}
			paper-button:hover {
				color: var(--dark-accent-color);
			}
			paper-button.primary {
				color: var(--accent-color);
				border: 1px solid var(--divider-color);
				--paper-button-raised-keyboard-focus: {
					color: var(--dark-accent-color);
				};
			}
			paper-button.primary:hover {
				color: var(--dark-accent-color);
			}
			paper-button.secondary {
				background-color: var(--accent-color);
				color: var(--primary-background-color);
				--paper-button-raised-keyboard-focus: {
					background-color: var(--dark-accent-color);
				};
			}
			paper-button.secondary:hover, paper-fab:hover {
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
				color: var(--primary-text-color);
				border: 1px solid var(--divider-color);
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
			}
			paper-input.searchInput[focused] {
				background-color: var(--primary-background-color);
			}
			paper-dialog {
				border-radius: 16px;
				max-width: 360px;
				max-width: 600px;
				font-family: 'Product Sans', 'Roboto', 'Noto', sans-serif;
				line-height: 1.25;
			}
			paper-dialog h2 {
				padding: 24px 24px 0;
			}
			code {
				font-family: 'Roboto Mono', monospace;
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
				height: 100%;
			}
			.flex-justified {
				@apply --layout-justified;
			}
			.banner {
				height: calc(100vh - 192px);
				vertical-align: middle;
				padding: 32px;
			}
			.actions {
				@apply --layout-horizontal;
				padding: 24px;
			}
			.actions .title,
			.content .title {
				font-size: 32px;
				text-transform: capitalize;
			}
			.content {
				background-color: none;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				padding: 24px;
			}
			.error {
				padding: 24px;
				text-align: center;
				color: var(--error-color);
			}
			.grid {
				width: 90%;
			}
			.grid, .list {
				margin: 0 auto;
				transition: all .2s ease;
			}
			.list .item {
				@apply(--app-grid-expandible-item);
				--app-grid-item-height: 30vw;
			}
			.item {
				border-radius: 8px;
				background-color: var(--light-primary-color);
//				@apply --shadow-elevation-2dp;
			}
			.item:hover {
//				@apply --shadow-elevation-4dp;
			}
			.item:hover .title {
				color: var(--accent-color);
			}
			.container {
				@apply --layout-flex;
				@apply --layout-vertical;
				height: 100%;
			}
			iron-image {
				@apply --layout-flex;
				--iron-image-placeholder: {
					background-color: var(--light-primary-color);
					border-radius: 8px;
				}
			}
			.bg {
				border-left: 1px solid var(--divider-color);
				border-right: 1px solid var(--divider-color);
			}
			.block {
				@apply --layout-horizontal;
			}
			.top {
				padding: 24px 24px 4px 24px;
				border-radius: 8px 8px 0 0;
				border-top: 1px solid var(--divider-color);
				border-left: 1px solid var(--divider-color);
				border-right: 1px solid var(--divider-color);
			}
			.mid {
				padding: 4px 24px 4px 24px;
				border-left: 1px solid var(--divider-color);
				border-right: 1px solid var(--divider-color);
			}
			.bottom {
				padding: 4px 24px 24px 24px;
				border-radius: 0 0 8px 8px;
				border-left: 1px solid var(--divider-color);
				border-right: 1px solid var(--divider-color);
				border-bottom: 1px solid var(--divider-color);
			}
			.title {
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				font-size: 28px;
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
				font-size: 24px;
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
				.banner {
					height: calc(100vh - 160px);
				}
				.title {
					font-size: 24px;
				}
				.description {
					font-size: 20px;
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
		</style>
	</template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);
