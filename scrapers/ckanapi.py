from ckanapi import RemoteCKAN

class CkanClient:
    def __init__(self, url: str, apikey: str, organization: str):
        self.ckan = RemoteCKAN(url, apikey)

    def get_dataset(self, name):
        return self.ckan.call_action('package_show', {id: name})

    def create_dataset(self, dataset_params, fields_definition, primary_key):
        pass
    #    pkg = client.call_action('package_create', { 'name': 'test-dict6',
    #                    'author': 'Fablab Imperia', 
    #                    'author_email': 'info@fablabimperia.org', 
    #                   'mantainer': 'Fablab Imperia', 'mantainer_email': 'info@fablabimperia.org', 
    #                    'owner_org': 'fablab-imperia'})
    #    return self.ckan.create_dataset(dataset)
            #newdataset = client.call_action('datastore_create', 
    #{
    #    'resource': { 'package_id': '5807e145-2164-4023-ae4a-1e20213e663e', 'resource_type': 'datastore', 'name': 'test-resource' },
    #    'fields': [{ 'id': 'first_col', 'type': 'text'}, {'id': 'second_col', 'type': 'text', 'info': {'label': 'The second Coluumn'}}],
    #    'records': [{'first_col': 'Test 1', 'second_col': 'Test 2'}, {'first_col': 'Test 3', 'second_col': 'Test 4'}, {'first_col': 'Test 5', 'second_col': 'Test 6'}],
    #    'primary_key': ['first_col']
    #} )

    def upsert_dataset(self, name, records):
        pass
    #       try:
    # dst = client.call_action('package_show', {'id':'test-dict'})
    #        dst = self.get_dataset(name)
    #    except NotFound:
    #        client.create_dataset({ 'name': name,
    #                    'author': 'Fablab Imperia', 
    #                    'author_email': 'info@fablabimperia.org', 
    #                    'mantainer': 'Fablab Imperia', 'mantainer_email': 'info@fablabimperia.org', 
    #                    'owner_org': 'fablab-imperia'})
    #   
    #    print(dst)
        
# {'author': 'Fablab Imperia', 'author_email': 'info@fablabimperia.org', 'creator_user_id': 'c678b1ef-2bfa-4e21-9b5e-801e8bc124b4', 
# 'id': '5807e145-2164-4023-ae4a-1e20213e663e'