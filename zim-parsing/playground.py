from libzim.reader import Archive
from libzim.search import Query, Searcher
from libzim.suggestion import SuggestionSearcher

zim = Archive("bitcoin.zim")
print(f"Main entry is at {zim.main_entry.get_item().path}")


entry = zim.get_entry_by_path("A/Main_Page")
print(f"Entry {entry.title} at {entry.path} is {entry.get_item().size}b.")

# download the first 100 for testing;; you can use zim.entry_count-1 for everything
for index in range(0, 100):
    entry = zim._get_entry_by_id(index)

    path = entry.path.replace("/", "_")
    print(f"[x] Writing article {entry.title} to {path}")
    with open(f"articles/{path}", "w") as f:
        try:
            f.write(bytes(entry.get_item().content).decode("UTF-8"))
        except:
            print(f"[!] Could not save {entry.title}")
    # assert entry.path.startswith("A/")
    
search_string = "cryptography"
suggestion_searcher = SuggestionSearcher(zim)
suggestion = suggestion_searcher.suggest(search_string)
suggestion_count = suggestion.getEstimatedMatches()
print(f"there are {suggestion_count} matches for {search_string}")
print(list(suggestion.getResults(0, suggestion_count)))
