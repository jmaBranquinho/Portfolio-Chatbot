import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { ChatSuggestionComponent } from './chat-suggestion/chat-suggestion.component';
import { ChatTextMessageComponent } from './chat-text-message/chat-text-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ChatDialogComponent, ChatSuggestionComponent, ChatTextMessageComponent],
  exports: [ ChatDialogComponent ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
