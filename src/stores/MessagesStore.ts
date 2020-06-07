import {action, computed, observable} from 'mobx';
import {messagesData} from '../data/dataSource';

export class MessagesStore {
  @observable isLoading = false;
  @action setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
  @observable searchText = '';
  @action setSearchText(text: string) {
    this.searchText = text;
  }
  @observable messages = [];
  @action setMessages(payload: any) {
    this.messages = payload;
  }
  @action fetchData() {
    this.setMessages(messagesData);
  }

  @computed get getMessages() {
    return this.messages;
  }
}
export const messagesStore = new MessagesStore();
