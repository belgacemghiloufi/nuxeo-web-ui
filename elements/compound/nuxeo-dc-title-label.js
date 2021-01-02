import '@polymer/polymer/polymer-legacy.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import { I18nBehavior } from '@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior';

Polymer({
  _template: html`
    <style include="nuxeo-styles"></style>
    <label>[[i18n('label.ui.schema.dc.title')]]</label>
    <div name="title">[[document.properties.dc:title]]</div>
  `,
  is: 'nuxeo-dc-title-label',
  behaviors: [I18nBehavior],
  properties: {
    document: Object,
  },
});
