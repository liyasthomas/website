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
			[disabled] {
				opacity: .2;
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
				font-family: 'Poppins', 'Roboto', 'Noto', sans-serif;
			}
			:host {
				--app-grid-item-height: 100%;
			}
			@media all and (max-width: 360px) {
				:host {
					--app-grid-columns: 1;
					--app-grid-gutter: 16px;
					--app-grid-item-height: 100vw;
					--app-grid-expandible-item-columns: 1;
				}
				.list {
					width: 100%;
				}
			}
			@media all and (min-width: 361px) and (max-width: 640px) {
				:host {
					--app-grid-columns: 1;
					--app-grid-gutter: 16px;
					--app-grid-item-height: 75vw;
					--app-grid-expandible-item-columns: 1;
				}
				.list {
					width: 100%;
				}
			}
			@media all and (min-width: 641px) and (max-width: 960px) {
				:host {
					--app-grid-columns: 2;
					--app-grid-gutter: 24px;
					--app-grid-item-height: 40vw;
					--app-grid-expandible-item-columns: 2;
				}
				.list {
					width: 90vw;
				}
				.item:nth-child(5n+3) {
					@apply --app-grid-expandible-item;
				}
			}
			@media all and (min-width: 961px) {
				:host {
					--app-grid-columns: 3;
					--app-grid-gutter: 24px;
					--app-grid-item-height: 25vw;
					--app-grid-expandible-item-columns: 3;
				}
				.list {
					width: 50vw;
				}
			}
			paper-item,
			paper-icon-item {
				font-family: 'Poppins', 'Roboto', 'Noto', sans-serif;
				font-size: 18px;
				font-weight: 700;
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
				font-family: 'Poppins', 'Roboto', 'Noto', sans-serif;
				font-weight: 700;
				text-transform: none;
				transition: all .2s ease;
				border-radius: 32px;
			}
			paper-button:hover {
				color: var(--dark-accent-color);
			}
			paper-button.primary {
				color: var(--accent-color);
				--paper-button-raised-keyboard-focus: {
					color: var(--dark-accent-color);
				};
			}
			paper-button.primary:hover {
				color: var(--dark-accent-color);
			}
			paper-fab,
			paper-button.secondary {
				background-color: var(--accent-color);
				color: var(--primary-background-color);
				--paper-button-raised-keyboard-focus: {
					background-color: var(--dark-accent-color);
				};
			}
			paper-button.secondary:hover,
			paper-fab:hover {
				background-color: var(--dark-accent-color);
			}
			paper-button iron-icon {
				margin-left: 8px;
			}
			paper-progress {
				width: 100%;
			}
			paper-input.searchInput {
				background-color: rgba(0, 0, 0, .04);
				color: var(--primary-text-color);
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
					font-family: 'Poppins', 'Roboto', 'Noto', sans-serif;
				};
			}
			paper-input.searchInput[focused] {
				background-color: var(--primary-background-color);
				@apply --shadow-elevation-2dp;
			}
			paper-dialog {
				border-radius: 16px;
				max-width: 360px;
				max-width: 600px;
				font-family: 'Poppins', 'Roboto', 'Noto', sans-serif;
				line-height: 1.2;
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
				height: 100%;
				@apply --layout-horizontal;
				@apply --layout-end;
			}
			.flex-justified {
				@apply --layout-justified;
			}
			.banner {
				height: calc(100vh - 128px);
				vertical-align: middle;
				padding: 32px;
			}
			.actions {
				padding: 24px;
				@apply --layout-horizontal;
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
			.grid,
			.list {
				margin: 0 auto;
				transition: all .2s ease;
			}
			.list .item {
				@apply(--app-grid-expandible-item);
				--app-grid-item-height: 30vw;
			}
			.item {
				border-radius: 8px;
				transition: all .2s ease;
				transform: scale(0);
				animation: scale .6s;
				cursor: pointer;
				animation-fill-mode: forwards;
				@apply --shadow-elevation-2dp;
			}
			@keyframes scale {
				from {
					transform: scale(0);
				}
				to {
					transform: scale(1);
				}
			}
			.item:hover {
				@apply --shadow-elevation-8dp;
			}
			.container {
				height: 100%;
				@apply --layout-flex;
				@apply --layout-vertical;
			}
			.bg {
				margin: 24px 24px 4px 24px;
			}
			iron-image {
				@apply --layout-flex;
				--iron-image-placeholder: {
					background-color: var(--light-primary-color);
					border-radius: 8px;
				}
			}
			.block {
				@apply --layout-horizontal;
			}
			.top {
				padding: 24px 24px 4px 24px;
				border-radius: 8px 8px 0 0;
			}
			.mid {
				padding: 4px 24px 4px 24px;
			}
			.bottom {
				padding: 4px 24px 24px 24px;
				border-radius: 0 0 8px 8px;
			}
			.title {
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				font-size: 28px;
				line-height: 1.2;
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
				font-size: 24px;
				line-height: 1.2;
				opacity: .54;
			}
			.info {
				font-weight: 700;
				text-overflow: ellipsis;
				@apply --layout-flex;
				@apply --layout-horizontal;
				@apply --layout-center;
			}
			.lightbox {
				height: 100%;
				width: auto;
			}
			.lightboxdialog {
				@apply --layout-flex;
				@apply --layout-horizontal;
				@apply --layout-center;
				height: 100vh;
				min-width: 100vw;
				border-radius: 0;
				background: var(--dark-primary-color);
				box-shadow: none;
				margin: 0;
				padding: 0;
			}
			@media (max-width: 640px) {
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
				.actions,
				.content {
					padding: 16px;
				}
			}
			.listbox {
				background: none;
				color: inherit;
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
				background-color: var(--paper-purple-a100);
				color: #fff;
			}
			.deep-purple-bg {
				background-color: var(--paper-deep-purple-a100);
				color: #fff;
			}
			.red-bg {
				background-color: var(--paper-red-a100);
				color: #fff;
			}
			.pink-bg {
				background-color: var(--paper-pink-a100);
				color: #fff;
			}
			.orange-bg {
				background-color: var(--paper-orange-a100);
				color: var(--paper-grey-800);
			}
			.deep-orange-bg {
				background-color: var(--paper-deep-orange-a100);
				color: #fff;
			}
			.cyan-bg {
				background-color: var(--paper-cyan-a100);
				color: var(--paper-grey-800);
			}
			.green-bg {
				background-color: var(--paper-green-a100);
				color: var(--paper-grey-800);
			}
			.yellow-bg {
				background-color: var(--paper-yellow-a100);
				color: var(--paper-grey-800);
			}
			.blue-bg {
				background-color: var(--paper-blue-a100);
				color: #fff;
			}
			.light-blue-bg {
				background-color: var(--paper-light-blue-a100);
				color: #fff;
			}
			.teal-bg {
				background-color: var(--paper-teal-a100);
				color: var(--paper-grey-800);
			}
			.indigo-bg {
				background-color: var(--paper-indigo-a100);
				color: #fff;
			}
			.blue-grey-bg {
				background-color: var(--paper-blue-grey-500);
				color: #fff;
			}
		</style>
	</template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);
