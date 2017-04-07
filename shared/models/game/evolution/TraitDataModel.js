import {Record} from 'immutable';
import * as traitData from './traitData'

export class TraitDataModel extends Record({
  type: null
  , food: 0
  , targetType: null
  , cooldownPlace: null
  , cooldownCost: null
  , cooldownLink: null
  , disableLastRound: false
  , action: null
  , checkAction: null
  , checkTarget: null
}) {
  static new(traitType) {
    console.log('new TraitDataModel('+traitType+')')
    return new TraitDataModel({
      ...traitData[traitType]
    });
  }
}