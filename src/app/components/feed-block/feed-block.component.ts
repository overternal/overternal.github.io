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
      min-height: 50vh;
      display: grid;
      position: relative;
    }

    .block-bg {
      height: 100%;
      padding: 3px;
      background: var(--gradient-triple);
      animation: 5s infinite linear bg-rotate;
      box-shadow: 0px 0px 30px -8px black;
    }

    .block-content {
      height: 100%;
      padding: var(--p-main);
      background-color: var(--c-bg);
    }

    .bg {
      pointer-events: none;
      position: absolute;
      height: 100%;
      width: 100%;
      background-position: center;
      background-size: cover;
      z-index: 1;
      height: calc(100% - (var(--p-main) / 2));
      width: calc(100% - (var(--p-main) / 2));
      opacity: 0.1;
    }

    @keyframes bg-rotate {
      0% {
        background-position: 0px;
      }

      50% {
        background-position: calc(var(--w-main) / 2 - (var(--p-main) * 2));
      }

      100% {
        background-position: calc(var(--w-main) - (var(--p-main) * 2));
      }
}
  `]
})
export class FeedBlockComponent {

  @Input('bgUrl') bgUrl = '';

}
