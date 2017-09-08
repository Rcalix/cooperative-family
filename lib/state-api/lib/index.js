class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
    };
    
  this.subscriptions = {};
  this.lastSubscriptionId = 0;
  }
  
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }

  lookupAuthor = (authordId) => {
    return this.data.authors[authordId];
  }

  getState = () => {
    return this.data;
  }
  subscribe = cb => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = subscriptionId => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach(cb => cb());
  };

  mergeWithState = stateChange => {
    this.data = {
      ...this.data,
      ...stateChange,
    };
    this.notifySubscribers();
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({
      searchTerm,
    });
  };
}

export default StateApi; 