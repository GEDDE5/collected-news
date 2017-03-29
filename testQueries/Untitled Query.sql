SELECT "Articles".id AS "articleId", "Keywords".id AS "keywordId", "Articles".title, "ArticleKeywords".frequency, "Articles".sentiment FROM "Articles" JOIN "ArticleKeywords" ON "ArticleKeywords"."articleId" = "Articles".id JOIN "Keywords" ON "Keywords".id = "ArticleKeywords"."keywordId" ORDER BY "ArticleKeywords".frequency, "Articles".id