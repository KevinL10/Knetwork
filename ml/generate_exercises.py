import random
import openai
import os
from json import dumps

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

    return response["choices"][0]["text"]


# return a list of problem/answers for a given text
def generate_questions(path):

    with open(path, "r") as f:
        content = f.readlines()

    lines = list(filter(lambda l: len(l.split(' ')) >= 50 and len(l.split(' ')) <= 200, content))

    if len(lines) < PROBLEMS_PER_ARTICLE:
        print(f"[x] Not enough information for article {path}")
        return []

    try:
        indices = random.sample(range(0, len(lines)), PROBLEMS_PER_ARTICLE)

        problems = [query(lines[i]).strip() for i in indices]

        parsed = []
        for p in problems:
            question, answer = p.splitlines()
            question = question.strip()
            answer = answer.strip()

            print(question)
            print(answer)

            if question.startswith("Q: "):
                question = question[3:]

            if answer.startswith("A: "):
                answer = answer[3:]

            parsed.append({"question":question, "answer": answer, "reference": path.replace("~", "/")})

        print(f"[x] Generated problems for article {path}")
    except:
        print(f"[x] Error occured for article {path}")
        return []       
    return parsed

PROBLEMS_FOLDER = "problems"
FOLDER = "wiki_100"
files = os.listdir(FOLDER)
print(files)
problems = []

for file in os.listdir(FOLDER)[:100]:
    f = os.path.join(FOLDER, file)
    problems += generate_questions(f)

with open(os.path.join(PROBLEMS_FOLDER, FOLDER+".json"), "w") as f:
    f.write(dumps(problems))
