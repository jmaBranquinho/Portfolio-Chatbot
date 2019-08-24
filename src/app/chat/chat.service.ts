import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export class Message {
  constructor(public sentBy: string) { }
}

export class SuggestionCluster {
  constructor(public content: string[]) {
  }
}

export class TextMessage extends Message {
  constructor(public content: string, public sentBy: string) {
    super(sentBy);
  }
}

export class Card extends Message {
  constructor(public title: string, public imageUrl: string) {
    super('bot');
  }
}


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.portfolioGuardian;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);
  onNewSuggestion: EventEmitter<SuggestionCluster> = new EventEmitter<SuggestionCluster>();

  constructor() { }

  update(msgs: Array<Message>) {
    for (const msg of msgs) {
      this.conversation.next([msg]);
    }
  }

  extractTextMessage(speech: any): TextMessage {
    return new TextMessage(speech, 'bot');
  }

  extractSuggestions(suggestions: any): SuggestionCluster {
    return new SuggestionCluster(suggestions);
  }

  extractDataFromResponse(dialog: any): Array<Message> {
    const agentResponse: Array<Message> = [];
    if (dialog.result.fulfillment) {
      if (dialog.result.fulfillment.speech) {
        agentResponse.push(this.extractTextMessage(dialog.result.fulfillment.speech));
      } else {
        if (dialog.result.fulfillment.messages) {
          if (dialog.result.fulfillment.messages[0] && dialog.result.fulfillment.messages[0].speech) {
            agentResponse.push(this.extractTextMessage(dialog.result.fulfillment.messages[0].speech));
          }
          if (dialog.result.fulfillment.messages[1] && dialog.result.fulfillment.messages[1].replies) {
           this.newSuggestions(this.extractSuggestions(dialog.result.fulfillment.messages[1].replies));
          }
        }
      }
    }
    return agentResponse;
  }

  converse(msg: string) {
    const userMessage = new TextMessage(msg, 'user');
    this.update([userMessage]);

    return this.client.textRequest(msg)
      .then((res: any) => {
        this.update(this.extractDataFromResponse(res));
      });
  }

  newSuggestions(suggestions: SuggestionCluster) {
    this.onNewSuggestion.emit(suggestions);
  }

  getOnNewSuggestionEmitter(): EventEmitter<SuggestionCluster> {
    return this.onNewSuggestion;
  }

}
