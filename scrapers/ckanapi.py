from ckanapi import RemoteCKAN

class CkanClient:
    def __init__(self, url: str, apikey: str, organization: str):
        self.ckan = RemoteCKAN(url, apikey)

    def get_dataset(self, name):
        return self.ckan.call_action('package_show', {id: name})

    def upsert_dataset(self, name, fields, records):
        pass
        
# {'author': 'Fablab Imperia', 'author_email': 'info@fablabimperia.org', 'creator_user_id': 'c678b1ef-2bfa-4e21-9b5e-801e8bc124b4', 
# 'id': '5807e145-2164-4023-ae4a-1e20213e663e'