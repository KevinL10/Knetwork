from libzim.reader import Archive
from libzim.search import Query, Searcher
from libzim.suggestion import SuggestionSearcher
from config import zim, DATA_PATH
from transformers import pipeline
import os

classifier = pipeline("zero-shot-classification")


def find_topic_articles(topic):
    
    articles = []

    # query = Query().set_query(topic)
    # searcher = Searcher(zim)
    # search = searcher.search(query)
    # count = search.getEstimatedMatches()
    # for page in search.getResults(0, count):
    #     entry = zim.get_entry_by_path(page)
    #     articles.append(str(entry))
    # return articles

    for article in os.listdir(os.path.join(DATA_PATH, "articles")):
        path = f"data/articles/{article}"
        with open(path, "r") as f:
            content = f.read()

        if len(content) < 50:
            continue

        # score the relevance of the article
        result = classifier(content[:100], [topic])

        if result["scores"][0] > 0.85:
            articles.append(article.replace("~", "/"))

    return articles

