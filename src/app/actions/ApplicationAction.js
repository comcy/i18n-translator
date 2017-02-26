import AbstractAction from './../../core/abstracts/AbstractAction';
// lib
import Constants from './../constants';

class ApplicationAction extends AbstractAction {

  toggleScreen (type) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.TOGGLE_SCREEN,
      data: type
    });
  }

  addLanguage (langkey, json) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.ADD_LANGUAGE,
      data: [langkey, json]
    });
  }

  updateValue (data) {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.UPDATE_VALUE,
      data
    });
  }

  exportDiffChanges () {
    this.getDispatcher().dispatch({
      type: Constants.FLUX.EXPORT_DIFF_CHANGES
    });
  }

}

export default ApplicationAction;
