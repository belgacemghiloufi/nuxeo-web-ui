import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import { I18nBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior';
import '@nuxeo/nuxeo-ui-elements/widgets/nuxeo-input.js';

Polymer({
  _template: html`
    <style include="nuxeo-styles"></style>
    <template is="dom-if" if="[[editable]]">
      <nuxeo-input
        label="[[i18n('label.ui.schema.dc.title')]]"
        name="title"
        value="{{document.properties.dc:title}}"
        required$="[[required]]"
      >
    </template>
    <template is="dom-if" if="[[!editable]]">
      <label>[[i18n('label.ui.schema.dc.title')]]</label>
      <div name="title">[[document.properties.dc:title]]</div>
    </template>
    </nuxeo-input>
  `,
  is: 'nuxeo-dc-title',
  behaviors: [I18nBehavior],
  properties: {
    document: Object,
    editable: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
    },
    required: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
    },
  },
});
