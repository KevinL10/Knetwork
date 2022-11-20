from libzim.reader import Archive
from libzim.search import Query, Searcher
from libzim.suggestion import SuggestionSearcher
from bs4 import BeautifulSoup
import shutil
import os

IGNORE = [".js", ".css", ".html", ".png", ".jpg", ".gif", ".ttf", ".svg", "favicon"]

# returns all of the text content on an HTML5 page
def extract_content(html):
    soup = BeautifulSoup(html, "html.parser")

    return [para.get_text() for para in soup.find_all("p")]


# saves the content of a .zim file to a folder with the same name
def unwrap(filename):
    zim = Archive(filename)
    print(f"Main entry is at {zim.main_entry.get_item().path}")

    prefix = filename.split("/")[-1].split("\\")[-1].split(".zim")[0]
    if os.path.exists(prefix):
        shutil.rmtree(prefix)
    os.mkdir(prefix)

    # download the first 100 for testing;; you can use zim.entry_count-1 for everything
    for index in range(100):
        entry = zim._get_entry_by_id(index)
        path = entry.path.replace("/", "_")
        if any([k in path for k in IGNORE]):
            continue

        content = extract_content(bytes(entry.get_item().content).decode("UTF-8"))
        print(f"[x] Writing article {entry.title} to {path}")
        with open(f"{prefix}/{path}", "w") as f:
            f.write("\n".join(content))


unwrap("wiki_100.zim")
