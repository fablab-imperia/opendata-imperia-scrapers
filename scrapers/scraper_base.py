import abc

class Dataset:
    parameters: dict[str,str]
    fields: dict
    primary_key: list[str]
    records: list[dict]

    
class ScraperBase(abc.ABC):
    @abc.abstractmethod
    def scrape() -> Dataset:
        pass