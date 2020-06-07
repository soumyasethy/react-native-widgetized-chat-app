import {action, computed, observable} from 'mobx';
import {chatData} from '../data/dataSource';

export class ChatStore {
  @observable isLoading = false;
  @action setLoading = (bool: boolean) => {
    this.isLoading = bool;
  };
  @observable chat = [];
  @action setChat(payload: any) {
    this.chat = payload;
  }
  @action fetchData() {
    this.setChat(chatData);
  }

  @computed get getChat() {
    return this.chat;
  }
}
export const chatStore = new ChatStore();
