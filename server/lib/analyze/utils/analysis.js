const g = require('gramophone');
const s = require('sentiment');

const analyze = {
  keywords: article => {
    keywords = g.extract(article.content, { score: true, limit: 5 });
    if(keywords.length === 0) {
      console.log('\nNo keywords found');
      console.log('Debug');
      console.log(' => word count:', article.wordCount);
      console.log(' => success:', article.success + '\n');
    }
    return keywords;
  },
  sentiment: article => {
    return s(article.content).comparative;
  }
};

module.exports = analyze;