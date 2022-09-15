// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import ConfigStore from "@store/ConfigStore"
import { SystemActions } from "@store/actions"

class SystemActionCreators {

  static showLoader = () => {
    return ConfigStore.dispatch(SystemActions.showLoader());
  }

  static hideLoader = () => {
    return ConfigStore.dispatch(SystemActions.hideLoader());
  }
}

export default SystemActionCreators;