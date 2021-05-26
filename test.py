
from scrapers.ckan import CkanClient

api = CkanClient('http://localhost:5000', 'c59ccfa4-10d2-451b-8601-6f554cd15c83')
dataset_params = { 'name': 'test-dict10',
                        'author': 'Fablab Imperia', 
                        'author_email': 'info@fablabimperia.org', 
                        'mantainer': 'Fablab Imperia', 'mantainer_email': 'info@fablabimperia.org', 
                        'owner_org': 'fablab-imperia'}
fields = [{'id': 'col1', 'type': 'text', 'info': {'label': 'The first column'}}, {'id': 'second_col', 'type': 'text', 'info': {'label': 'The second Coluumn'}}]
primary_key = ['col1']
api.create_dataset(dataset_params,fields,primary_key)

dataset = api.get_dataset('test-dict11')
print(dataset)
api.upsert_dataset(dataset['resources'][0]['id'], [{'col1': 'value1','second_col': 'value3'}])
api.delete_dataset('test-dict10')