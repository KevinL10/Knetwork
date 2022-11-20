import random
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")
PROBLEMS_PER_ARTICLE = 1


def query(text):
    prompt = """
Generate a question and answer from the following text.

Q: What is the capital of the United States?
A: Washington, D.C.

Q: What is 1+1?
A: 2

{}""".format(text)
    response = openai.Completion.create(
        model="text-davinci-002",
        max_tokens=1000,
        prompt=prompt,
        temperature=0.6,
    )

    print(response)
    return response["choices"][0]["text"]


# return a list of problem/answers for a given text
def generate_questions(path):

    with open(path, "r") as f:
        content = f.readlines()

    lines = list(filter(lambda l: len(l.split(' ')) >= 50 and len(l.split(' ')) <= 200, content))

    if len(lines) == 0:
        print(f"[x] Not enough information for article {path}")
        return []

    indices = random.sample(range(0, len(lines)), PROBLEMS_PER_ARTICLE)
    problems = [query(lines[i]).strip() for i in indices]

    return problems



print(generate_questions("wiki_100/A_AP_diameter"))