 /*
 *  Source Actions
 */

import axios from 'axios'
import FetchStatus from '../constants/fetch-status'
import Hosts from '../constants/hosts'


export const setSources = ({ commit, state }) =>
  new Promise((resolve, reject) => {
    state.sources.status = FetchStatus.LOADING
    axios.get(`${Hosts.ACTIVE}/api/sources`)
      .then(function (response) {
        let sources = []
        response.data.forEach(source => {
          const entry = state.sources.results.find(entry => {
            return entry.id === source.id
          })
          if (!entry) {
            sources.push(source)
          }
        })
        state.sources.status = FetchStatus.COMPLETE
        resolve(commit('setSources', sources))
      })
      .catch(function (error) {
        console.log(error)
      })
  })

export const updateSourcePage = ({ commit, state }, pageNum) => {
  commit('updateSourcePage', pageNum)
}

export const setSourceOrder = ({ commit, state }, order) => {
  if (order === state.sources.order) {
    return commit('toggleSourceSort')
  }
  commit('setSourceOrder', order)
}

export const toggleSourceFilter = ({commit, state }, sourceId) => {
  commit('toggleSourceFilter', sourceId)
}
