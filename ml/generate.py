import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")
# 

prompt = """
Generate a question and answer from the following text.

The Hundred Years' War was one of the most significant conflicts of the Middle Ages. For 116 years, interrupted by several truces, five generations of kings from two rival dynasties fought for the throne of the dominant kingdom in Western Europe. The war's effect on European history was lasting. Both sides produced innovations in military technology and tactics, including professional standing armies and artillery, that permanently changed warfare in Europe; chivalry, which had reached its height during the conflict, subsequently declined. Stronger national identities took root in both countries, which became more centralised and gradually rose as global powers.[1]
"""

response = openai.Completion.create(
    model="text-ada-001",
    max_tokens=1000,
    prompt=prompt,
    temperature=0.6,
)


"\nWhat was the main cause of the Hundred Years' War?\n\nThe Hundred Years' War was a conflict between France and England that lasted for 116 years."
print(response)