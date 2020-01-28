import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";
import "@polymer/app-layout/app-grid/app-grid-style.js";
class MyPineapplenotes extends PolymerElement {
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
          src="../images/assets/projects/pineapplenotes.svg"
          alt="Banner"
        ></iron-image>
      </div>
      <div class$="[[getUIType(UI)]] content">
        <div class="title">Pineapple notes</div>
        <div class="description">A simple, clean note app</div>
        <p>
          Pineapple notes is an easy way to keep notes, lists, ideas and more.
          Your notes stay in sync with all of your devices for free.
        </p>
        <p>
          The experience is all about speed and efficiency. Open it, write some
          thoughts, and you're done. As your collection of notes grows, you can
          search them instantly and keep them organized with tags and pins.
        </p>
      </div>
      <div class$="[[getUIType(UI)]] actions flex-center-center">
        <a
          href="https://pineapple-notes.firebaseapp.com"
          target="_blank"
          rel="noopener"
        >
          <paper-button class="secondary" raised aria-label="View all"
            >View project<iron-icon icon="my-icons:arrow-forward"></iron-icon
          ></paper-button>
        </a>
        <a
          href="https://github.com/liyasthomas/pineapple-notes"
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
        url="../data/pineapplenotes_feeds.json"
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
            href="https://github.com/liyasthomas/pineapple-notes"
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
        <p>
          Help you in whatever area of your life that needs to be kept organized
          – and it does so in a way that is efficient and easy to understand.
        </p>
        <p>
          If you have multiple devices, Pineapple notes will sync across all
          devices automatically, so you can download it everywhere and always
          use the same account. It is also available directly on the web, which
          can be great if you need to access it on a device that isn’t your own.
        </p>
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
            href="https://github.com/liyasthomas/pineapple-notes"
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
        <p>
          Pineapple notes’s features are light and minimal. This is done
          intentionally in order to give you a powerful and good quality
          experience without all the complications. Keeping things in order
          doesn’t have to be complex and Pineapple notes aims to make it easy
          for you.
        </p>
        <p>
          Every writer has a different process, a different method of research,
          different note-taking preferences, and the list goes on. There are
          programs out there to suit the differing and ever-changing needs of
          all writers. Pineapple notes caters to the type of writer whose
          planning and outlining process is more minimalistic. Pineapple notes
          doesn’t have a lot of bells and whistles, it can’t do 12 different
          things at once, and this is just right for some writers.
        </p>
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
            href="https://github.com/liyasthomas/pineapple-notes"
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
        <p>
          Pineapple notes is so light-weight, clean, and minimal – but it
          provides tremendous quality and practical help for its users. Whether
          it be to research a novel, write an essay, organize your life, keep
          track of school assignments, or manage a business, Pineapple notes
          makes it easy. With no extravagant features or excessive lists of
          options, everything is streamlined. Notes can be searched and
          everything is accessible with just a click or two.
        </p>
        <p>
          The best part is that Pineapple notes is completely free. You can
          download it on all of your devices, and you don’t have to pay a thing
          for any of them. So, what are you waiting for? Let Pineapple notes
          simplify your life, and give yourself more free time for everything
          else you need to do!
        </p>
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
window.customElements.define("my-pineapplenotes", MyPineapplenotes);
