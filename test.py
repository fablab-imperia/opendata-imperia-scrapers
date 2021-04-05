
from ckanapi import RemoteCKAN

client = RemoteCKAN('http://localhost:5000','c59ccfa4-10d2-451b-8601-6f554cd15c83')
pkg = client.call_action('package_create', { 'name': 'test-dict6',
                        'author': 'Fablab Imperia', 
                        'author_email': 'info@fablabimperia.org', 
                        'mantainer': 'Fablab Imperia', 'mantainer_email': 'info@fablabimperia.org', 
                        'owner_org': 'fablab-imperia'})


print(pkg['id'])

#newdataset = client.call_action('datastore_create', 
#{
#    'resource': { 'package_id': '5807e145-2164-4023-ae4a-1e20213e663e', 'resource_type': 'datastore', 'name': 'test-resource' },
#    'fields': [{ 'id': 'first_col', 'type': 'text'}, {'id': 'second_col', 'type': 'text', 'info': {'label': 'The second Coluumn'}}],
#    'records': [{'first_col': 'Test 1', 'second_col': 'Test 2'}, {'first_col': 'Test 3', 'second_col': 'Test 4'}, {'first_col': 'Test 5', 'second_col': 'Test 6'}],
#    'primary_key': ['first_col']
#} )

#dst = client.call_action('datastore_upsert', 
#{
#    'resource_id': '3d47bcc8-4d33-49d3-83bd-1e6929b32406',
#    'records': [{'first_col': 'Test 1', 'second_col': 'Test 22'}, {'first_col': 'Test 3', 'second_col': 'Test 444'}, {'first_col': 'Test 7', 'second_col': 'Test 99'}]
#}) 
#try:
    # dst = client.call_action('package_show', {'id':'test-dict'})
 
#except NotFound:
#    print("Not existing")

