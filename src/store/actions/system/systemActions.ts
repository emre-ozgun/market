// Copyright (c) 2022-present Onur Pamuk. All Rights Reserved.

import { SystemActionTypes } from "@store/types";

const showLoader = () => ({
  type: SystemActionTypes.SHOW_LOADER
}),

  hideLoader = () => ({
    type: SystemActionTypes.HIDE_LOADER
  });

export const SystemActions = {
  showLoader,
  hideLoader
}

