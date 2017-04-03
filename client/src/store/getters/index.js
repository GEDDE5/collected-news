import * as articles from './articles'
import * as keywords from './keywords'
import * as lunr from './lunr'
import * as sources from './sources'
import * as trends from './trends'

module.exports = {
  ...articles,
  ...keywords,
  ...lunr,
  ...sources,
  ...trends,
};