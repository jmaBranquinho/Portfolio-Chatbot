import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'chat-suggestion',
  templateUrl: './chat-suggestion.component.html',
  styleUrls: ['./chat-suggestion.component.css']
})
export class ChatSuggestionComponent implements OnInit {

  @Input() suggestions: string[];
  @Output() autoReply: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  suggestionSelected(i) {
    this.autoReply.emit(this.suggestions[i]);
  }

}
