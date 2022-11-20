from json import dumps


q1 = {
    "_id": "11234",
    "question": "What is 1+1?",
    "answer": "The answer is 2",
    "reference": "hxxp://q1.com",
}
q2 = {
    "_id": "2512",
    "question": "What do yellow and blue make?",
    "answer": "They make green",
    "reference": "hxxp://q2.com",
}
q3 = {
    "_id": "41s3",
    "question": "How old is the Earth",
    "answer": "The Earth is 4.5 billion years old",
    "reference": "hxxp://q3.com",
}


with open("data/problems.json", "w") as f:
    f.write(dumps([q1, q2, q3]))
