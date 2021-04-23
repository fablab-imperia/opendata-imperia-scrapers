from ckanapi import RemoteCKAN

class CkanClient:
    def __init__(self, url: str, apikey: str):
        self.ckan = RemoteCKAN(url, apikey)

    def get_dataset(self, name):
        return self.ckan.call_action('package_show', {'id': name})

    def create_dataset(self, dataset_params, fields_definition, primary_key):
        pkg = self.ckan.call_action('package_create', dataset_params)
        newdataset = self.ckan.call_action('datastore_create', 
        {
            'resource': { 'package_id': pkg['id'], 'resource_type': 'datastore', 'name': dataset_params['name'] },
            'fields': fields_definition,
            'primary_key': primary_key
        } )
        return newdataset

    def upsert_dataset(self, resource_id, records):
        self.ckan.call_action('datastore_upsert', 
        {
            'resource_id':resource_id,
            'records': records
        })
    
    def delete_dataset(self, name):
        self.ckan.call_action('dataset_purge', 
        {
            'id': name
        })