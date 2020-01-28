import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "./shared-styles.js";
import "@polymer/app-layout/app-grid/app-grid-style.js";
class MyHome extends PolymerElement {
  static get template() {
    return html`
      <style include="app-grid-style"></style>
      <style include="shared-styles"></style>
      <iron-media-query
        query="min-width: 641px"
        query-matches="{{wideLayout}}"
      ></iron-media-query>
      <div class="banner flexchild flex-vertical">
        <iron-image
          preload
          fade
          sizing="contain"
          src="../images/assets/home/banner.svg"
          alt="Banner"
        ></iron-image>
      </div>
      <iron-ajax
        auto
        url="../data/home_feeds.json"
        id="ajax0"
        loading="{{loading0}}"
        handle-as="json"
        last-error="{{error0}}"
        on-response="_handleResponse"
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
      <template is="dom-repeat" items="[[ajaxResponse0.recent]]" as="recent">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{recent.title}}
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
          <template is="dom-repeat" items="[[recent.sub]]" as="sub">
            <a
              href="{{sub.link}}"
              class$="[[_computeTileClass(sub.color)]] item"
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
                <div class="block top">
                  <div class="title">{{sub.title}}</div>
                </div>
                <div class="block mid">
                  <div class="description">{{sub.description}}</div>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <iron-icon
                        icon="my-icons:{{sub.icon}}"
                        aria-label="Icon"
                      ></iron-icon>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </a>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{recent.link}}">
            <paper-button class="secondary" raised aria-label="View all"
              >View all {{recent.title}}<iron-icon
                icon="my-icons:arrow-forward"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <template is="dom-repeat" items="[[ajaxResponse0.popular]]" as="popular">
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{popular.title}}
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
          <template is="dom-repeat" items="[[popular.sub]]" as="sub">
            <a
              href="{{sub.link}}"
              class$="[[_computeTileClass(sub.color)]] item"
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
                <div class="block top">
                  <div class="title">{{sub.title}}</div>
                </div>
                <div class="block mid">
                  <div class="description">{{sub.description}}</div>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <iron-icon
                        icon="my-icons:{{sub.icon}}"
                        aria-label="Icon"
                      ></iron-icon>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </a>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{popular.link}}">
            <paper-button class="secondary" raised aria-label="View all"
              >View all {{popular.title}}<iron-icon
                icon="my-icons:arrow-forward"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <template
        is="dom-repeat"
        items="[[ajaxResponse0.projects]]"
        as="projects"
      >
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{projects.title}}
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
          <template is="dom-repeat" items="[[projects.sub]]" as="sub">
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
                      <iron-icon
                        icon="my-icons:{{sub.icon}}"
                        aria-label="Icon"
                      ></iron-icon>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </a>
          </template>
        </div>
        <div class$="[[getUIType(UI)]] actions flex-center-center">
          <a href="{{projects.link}}">
            <paper-button class="secondary" raised aria-label="View all"
              >View all {{projects.title}}<iron-icon
                icon="my-icons:arrow-forward"
              ></iron-icon
            ></paper-button>
          </a>
        </div>
      </template>
      <template
        is="dom-repeat"
        items="[[ajaxResponse0.testimonials]]"
        as="testimonials"
      >
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <div class="title">
            {{testimonials.title}}
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
          <template is="dom-repeat" items="[[filteredResults]]" as="sub">
            <a
              href="{{sub.link}}"
              class$="[[_computeTileClass(sub.color)]] item"
              target="_blank"
              rel="noopener"
            >
              <div class="container">
                <div class="block top flexchild flex-vertical">
                  <div class="title">{{sub.title}}</div>
                </div>
                <div class="block mid">
                  <div class="description">{{sub.description}}</div>
                </div>
                <div class="block bottom">
                  <div class="info">
                    <div class="flexchild">
                      {{sub.info}}
                    </div>
                    <div>
                      <iron-icon
                        icon="my-icons:{{sub.icon}}"
                        aria-label="Icon"
                      ></iron-icon>
                    </div>
                  </div>
                </div>
              </div>
              <paper-ripple></paper-ripple>
            </a>
          </template>
        </div>
        <div
          class$="[[getUIType(UI)]] actions flex-center-center flex-justified"
        >
          <paper-fab
            icon="my-icons:arrow-back"
            mini
            disabled="[[isPrevDisabled]]"
            aria-label="Prev"
            on-click="_getAllResults"
            >Prev</paper-fab
          >
          <a
            href="mailto:liyascthomas@gmail.com?&subject=Hello Liyas!&body=Hi,"
          >
            <paper-button class="secondary" raised aria-label="Say hello!"
              >Say hello<iron-icon icon="my-icons:mail-outline"></iron-icon
            ></paper-button>
          </a>
          <paper-fab
            icon="my-icons:arrow-forward"
            mini
            disabled="[[isNextDisabled]]"
            aria-label="Next"
            on-click="_getAllResults"
            >Next</paper-fab
          >
        </div>
      </template>
    `;
  }
  static get properties() {
    return {
      pageNumber: {
        type: Number,
        value: 0
      }
    };
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
  _handleResponse({ detail }) {
    this.data = detail.response;
    this._getAllResults();
  }
  _getAllResults(event) {
    this.resData = this.data.testimonials[0].sub;
    this.isPrevDisabled = true;
    this.isNextDisabled = false;
    let start;
    let end;
    start = 0;
    end = start + 3;
    if (event) {
      switch (event.target.innerHTML) {
        case "Next":
          this.pageNumber++;
          start = this.pageNumber * 3;
          end = start + 3;
          this.isPrevDisabled = false;
          this.isNextDisabled = end > this.resData.length - 1 ? true : false;
          break;
        case "Prev":
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
window.customElements.define("my-home", MyHome);
