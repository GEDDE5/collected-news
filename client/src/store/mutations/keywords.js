/*
 *  Mutations for top articles by keyword freq. (home view)
 */


export const setTopArticles = (state, articles) => {
  let count = 0
  articles.forEach(article =>{
    state.topArticles.results.push(article)
    count++
  })
}

export const incrementKeywordPage = state => {
  state.topArticles.pagination++
}

export const toggleInfinitScroll = state => {
  state.topArticles.busy = !state.topArticles.busy
}

export const clearResults = (state) => {
  state.keywordSearch.results = []
}
