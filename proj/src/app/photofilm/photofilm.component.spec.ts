import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotofilmComponent } from './photofilm.component';

describe('PhotofilmComponent', () => {
  let component: PhotofilmComponent;
  let fixture: ComponentFixture<PhotofilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotofilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotofilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
