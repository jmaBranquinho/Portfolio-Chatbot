import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSuggestionComponent } from './chat-suggestion.component';

describe('ChatSuggestionComponent', () => {
  let component: ChatSuggestionComponent;
  let fixture: ComponentFixture<ChatSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
