import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feed-block',
  template: `
    <div class="block-wrap">
      <div class="block-bg">
        <div [ngStyle]="{'background-image': 'url(' + bgUrl + ')'}" class="bg"></div>
        <div class="block-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .block-wrap {
      min-height: 40vh;
      display: grid;
      position: relative;
    }

    .block-bg {
      height: 100%;
      padding: 5px;
      background: linear-gradient(45deg, var(--c-primary), var(--c-secondary), var(--c-primary));
      animation: 2s infinite linear bg-rotate;
      box-shadow: 0px 0px 30px -3px black;
    }

    .block-content {
      height: 100%;
      padding: 20px;
      background-color: var(--c-bg);
    }

    .bg {
      position: absolute;
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
      z-index: 1;
      height: calc(100% - 10px);
      width: calc(100% - 10px);
      opacity: 0.2;
    }

    @keyframes bg-rotate {
      0% {
        background-position: 0px;
      }

      50% {
        background-position: 540px;
      }

      100% {
        background-position: 1080px;
      }
}
  `]
})
export class FeedBlockComponent {

  @Input('bgUrl') bgUrl = '';

}
