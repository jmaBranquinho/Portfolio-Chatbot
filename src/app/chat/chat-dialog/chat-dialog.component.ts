import { SuggestionCluster } from './../chat.service';
import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs';
import { scan, defaultIfEmpty, map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  firstInteraction: boolean;
  messages: Observable<Message[]>;
  formValue: string;
  suggestions: SuggestionCluster;
  subscription: any;

  constructor(public chat: ChatService) {
    this.subscription = this.chat.getOnNewSuggestionEmitter().subscribe(suggestions => this.newSuggestions(suggestions));
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
    this.firstInteraction = false;
  }

  sendMessage() {
    if (this.formValue.length > 0) {
      this.firstInteraction = true;
      this.suggestions = new SuggestionCluster([]);
      this.chat.converse(this.formValue);
      this.formValue = '';
    }
  }

  isTypeTextMessage(message): boolean {
    return message.constructor.name === 'TextMessage';
  }

  isSuggestionAvailable(): boolean {
    if (this.suggestions && this.suggestions.content) {
      return this.suggestions.content.length > 0;
    }
    return false;
  }

  newSuggestions(suggestions: SuggestionCluster) {
    this.suggestions = suggestions;
  }

  autoReply(event) {
    this.suggestions = new SuggestionCluster([]);
    this.chat.converse(event);
  }

}
