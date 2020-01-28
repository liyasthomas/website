import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";
import "@polymer/app-layout/app-grid/app-grid-style.js";
class MyThreejs extends PolymerElement {
  static get template() {
    return html`
      <style include="app-grid-style"></style>
      <style include="shared-styles">
        @media all and (min-width: 961px) {
          :host {
            --app-grid-columns: 2;
            --app-grid-expandible-item-columns: 2;
          }
        }
      </style>
      <iron-media-query
        query="min-width: 641px"
        query-matches="{{wideLayout}}"
      ></iron-media-query>
      <paper-dialog
        id="lightbox"
        class="lightboxdialog"
        on-click="toggleLightbox"
      ></paper-dialog>
      <div class="banner flexchild flex-vertical">
        <iron-image
          preload
          fade
          sizing="contain"
          src="../images/assets/projects/threejs.svg"
          alt="Banner"
        ></iron-image>
      </div>
      <div class$="[[getUIType(UI)]] content">
        <div class="title">threeJS Demos</div>
        <div class="description">3D demos</div>
        <p>
          Three.js is a cross-browser JavaScript library and Application
          Programming Interface used to create and display animated 3D computer
          graphics in a web browser. Three.js uses WebGL.
        </p>
        <p>
          The aim of the project is to create an easy to use, lightweight, 3D
          library with a default WebGL renderer. The library also provides
          Canvas 2D, SVG and CSS3D renderers in the examples.
        </p>
      </div>
      <div class$="[[getUIType(UI)]] actions flex-center-center">
        <a
          href="https://liyasthomas.github.io/threejs"
          target="_blank"
          rel="noopener"
        >
          <paper-button class="secondary" raised aria-label="View all"
            >View project<iron-icon icon="my-icons:arrow-forward"></iron-icon
          ></paper-button>
        </a>
        <a
          href="https://github.com/liyasthomas/threejs"
          target="_blank"
          rel="noopener"
        >
          <paper-button class="primary" aria-label="GitHub"
            >GitHub<iron-icon
              src="../images/assets/social/github.svg"
            ></iron-icon
          ></paper-button>
        </a>
      </div>
      <iron-ajax
        auto
        url="../data/threejs_feeds.json"
        id="ajax0"
        loading="{{loading0}}"
        handle-as="json"
        last-error="{{error0}}"
        last-response="{{ajaxResponse0}}"
      >
      </iron-ajax>
      <template is="dom-if" if="{{loading0}}">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center"
          hidden$="[[!loading0]]"
        >
          <paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
        </div>
      </template>
      <template is="dom-if" if="{{error0}}">
        <template is="dom-if" if="{{!loading0}}">
          <div class$="[[getUIType(UI)]] error">
            <paper-button on-click="tryAgain" aria-label="Try again"
              >Try again<iron-icon icon="my-icons:refresh"></iron-icon
            ></paper-button>
          </div>
        </template>
      </template>
      <template
        is="dom-repeat"
        items="[[ajaxResponse0.section1]]"
        as="section1"
      >
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{section1.title}}
          </div>
          <paper-icon-button
            class="link"
            hidden$="{{!wideLayout}}"
            toggles
            active="{{UI}}"
            icon$="my-icons:[[getUIIcon(UI)]]"
            aria-label="Icon"
          >
          </paper-icon-button>
        </div>
        <div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
          <template is="dom-repeat" items="[[section1.sub]]" as="sub">
            <div
              class$="[[_computeTileClass(sub.color)]] item"
              on-click="toggleLightbox"
            >
              <div class="container">
                <div class="flexchild flex-vertical">
                  <iron-image
                    class="bg"
                    preload
                    fade
                    sizing="contain"
                    src="{{sub.img}}"
                    alt="{{sub.title}}"
                  ></iron-image>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <a
                        href="{{sub.img}}"
                        download="{{sub.img}}"
                        target="_blank"
                        rel="noopener"
                        ><paper-icon-button
                          icon="my-icons:{{sub.icon}}"
                        ></paper-icon-button
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </div>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{section1.link}}" target="_blank" rel="noopener">
            <paper-button class="secondary" raised aria-label="View all"
              >View project<iron-icon icon="my-icons:arrow-forward"></iron-icon
            ></paper-button>
          </a>
          <a
            href="https://github.com/liyasthomas/threejs"
            target="_blank"
            rel="noopener"
          >
            <paper-button class="primary" aria-label="GitHub"
              >GitHub<iron-icon
                src="../images/assets/social/github.svg"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <div class$="[[getUIType(UI)]] content">
        <p>This project is a work in progress.</p>
      </div>
      <template is="dom-if" if="{{loading0}}">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center"
          hidden$="[[!loading0]]"
        >
          <paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
        </div>
      </template>
      <template is="dom-if" if="{{error0}}">
        <template is="dom-if" if="{{!loading0}}">
          <div class$="[[getUIType(UI)]] error">
            <paper-button on-click="tryAgain" aria-label="Try again"
              >Try again<iron-icon icon="my-icons:refresh"></iron-icon
            ></paper-button>
          </div>
        </template>
      </template>
      <template
        is="dom-repeat"
        items="[[ajaxResponse0.section2]]"
        as="section2"
      >
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{section2.title}}
          </div>
          <paper-icon-button
            class="link"
            hidden$="{{!wideLayout}}"
            toggles
            active="{{UI}}"
            icon$="my-icons:[[getUIIcon(UI)]]"
            aria-label="Icon"
          >
          </paper-icon-button>
        </div>
        <div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
          <template is="dom-repeat" items="[[section2.sub]]" as="sub">
            <div
              class$="[[_computeTileClass(sub.color)]] item"
              on-click="toggleLightbox"
            >
              <div class="container">
                <div class="flexchild flex-vertical">
                  <iron-image
                    class="bg"
                    preload
                    fade
                    sizing="contain"
                    src="{{sub.img}}"
                    alt="{{sub.title}}"
                  ></iron-image>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <a
                        href="{{sub.img}}"
                        download="{{sub.img}}"
                        target="_blank"
                        rel="noopener"
                        ><paper-icon-button
                          icon="my-icons:{{sub.icon}}"
                        ></paper-icon-button
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </div>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{section2.link}}" target="_blank" rel="noopener">
            <paper-button class="secondary" raised aria-label="View all"
              >View project<iron-icon icon="my-icons:arrow-forward"></iron-icon
            ></paper-button>
          </a>
          <a
            href="https://github.com/liyasthomas/threejs"
            target="_blank"
            rel="noopener"
          >
            <paper-button class="primary" aria-label="GitHub"
              >GitHub<iron-icon
                src="../images/assets/social/github.svg"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <div class$="[[getUIType(UI)]] content">
        <p>More examples will be added in future.</p>
      </div>
      <template is="dom-if" if="{{loading0}}">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center"
          hidden$="[[!loading0]]"
        >
          <paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
        </div>
      </template>
      <template is="dom-if" if="{{error0}}">
        <template is="dom-if" if="{{!loading0}}">
          <div class$="[[getUIType(UI)]] error">
            <paper-button on-click="tryAgain" aria-label="Try again"
              >Try again<iron-icon icon="my-icons:refresh"></iron-icon
            ></paper-button>
          </div>
        </template>
      </template>
      <template
        is="dom-repeat"
        items="[[ajaxResponse0.section3]]"
        as="section3"
      >
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{section3.title}}
          </div>
          <paper-icon-button
            class="link"
            hidden$="{{!wideLayout}}"
            toggles
            active="{{UI}}"
            icon$="my-icons:[[getUIIcon(UI)]]"
            aria-label="Icon"
          >
          </paper-icon-button>
        </div>
        <div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
          <template is="dom-repeat" items="[[section3.sub]]" as="sub">
            <div
              class$="[[_computeTileClass(sub.color)]] item"
              on-click="toggleLightbox"
            >
              <div class="container">
                <div class="flexchild flex-vertical">
                  <iron-image
                    class="bg"
                    preload
                    fade
                    sizing="contain"
                    src="{{sub.img}}"
                    alt="{{sub.title}}"
                  ></iron-image>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <a
                        href="{{sub.img}}"
                        download="{{sub.img}}"
                        target="_blank"
                        rel="noopener"
                        ><paper-icon-button
                          icon="my-icons:{{sub.icon}}"
                        ></paper-icon-button
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </div>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{section3.link}}" target="_blank" rel="noopener">
            <paper-button class="secondary" raised aria-label="View all"
              >View project<iron-icon icon="my-icons:arrow-forward"></iron-icon
            ></paper-button>
          </a>
          <a
            href="https://github.com/liyasthomas/threejs"
            target="_blank"
            rel="noopener"
          >
            <paper-button class="primary" aria-label="GitHub"
              >GitHub<iron-icon
                src="../images/assets/social/github.svg"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <div class$="[[getUIType(UI)]] content">
        <p>Stay tuned in for more updates.</p>
      </div>
      <template is="dom-if" if="{{loading0}}">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center"
          hidden$="[[!loading0]]"
        >
          <paper-spinner-lite active$="[[loading0]]"></paper-spinner-lite>
        </div>
      </template>
      <template is="dom-if" if="{{error0}}">
        <template is="dom-if" if="{{!loading0}}">
          <div class$="[[getUIType(UI)]] error">
            <paper-button on-click="tryAgain" aria-label="Try again"
              >Try again<iron-icon icon="my-icons:refresh"></iron-icon
            ></paper-button>
          </div>
        </template>
      </template>
      <template is="dom-repeat" items="[[ajaxResponse0.similar]]" as="similar">
        <div class$="[[getUIType(UI)]] actions">
          <div class="title">
            {{similar.title}}
          </div>
        </div>
        <div class$="[[getUIType(UI)]] app-grid" has-aspect-ratio>
          <template is="dom-repeat" items="[[similar.sub]]" as="sub">
            <a
              href="{{sub.link}}"
              class$="[[_computeTileClass(sub.color)]] item"
            >
              <div class="container">
                <div class="block top">
                  <div class="title">{{sub.title}}</div>
                </div>
                <div class="block mid">
                  <div class="description">{{sub.description}}</div>
                </div>
                <div class="flexchild flex-vertical">
                  <iron-image
                    class="bg"
                    preload
                    fade
                    sizing="contain"
                    src="{{sub.img}}"
                    alt="{{sub.title}}"
                  ></iron-image>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <iron-icon icon="my-icons:{{sub.icon}}"></iron-icon>
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
            <paper-button class="secondary" raised aria-label="View all"
              >View all {{similar.title}} projects<iron-icon
                icon="my-icons:arrow-forward"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
    `;
  }
  attached() {
    this._updateGridStyles =
      this._updateGridStyles ||
      (() => {
        this.updateStyles();
      });
    window.addEventListener("resize", this._updateGridStyles);
  }
  detached() {
    window.removeEventListener("resize", this._updateGridStyles);
  }
  tryAgain() {
    this.$.ajax0.generateRequest();
  }
  getUIType(UI) {
    return UI ? "list" : "grid";
  }
  getUIIcon(icon) {
    return icon ? "dashboard" : "view-agenda";
  }
  _computeTileClass(color) {
    return `${color}-bg`;
  }
  toggleLightbox(event) {
    this.$.lightbox.toggle();
    let model = this.$.lightbox.opened
      ? `
<iron-image class="lightbox" preload fade sizing="contain" src="` +
        event.model.__data.sub.img +
        `" alt="Banner"></iron-image>
			`
      : `
Something went wrong!
			`;
    this.$.lightbox.innerHTML = model;
  }
}
window.customElements.define("my-threejs", MyThreejs);
