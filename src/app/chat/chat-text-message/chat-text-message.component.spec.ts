import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTextMessageComponent } from './chat-text-message.component';

describe('ChatTextMessageComponent', () => {
  let component: ChatTextMessageComponent;
  let fixture: ComponentFixture<ChatTextMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTextMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTextMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
