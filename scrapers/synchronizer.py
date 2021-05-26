from scraper_base import ScraperBase
from ckan import CkanClient

class DatasetsSynchronizer:

    def __init__(self,url: str, apikey: str, scrapers: list[ScraperBase]):
        self.scraper = scraper
        self.availableScrapers = scrapers
        self.ckan = CkanClient(url, apikey)

    def synchronizeWithCkan(self):
        for scraper in self.availableScrapers:
            dataset = scraper.scrape()
            try:
                dst = self.ckan.get_dataset(dataset.parameters['name'])
            except:
                dst =  self.ckan.create_dataset(dataset.parameters, dataset.fields, dataset.primary_key)
            self.ckan.upsert_dataset(dst['resources'][0]['id'], dataset.records)
            


