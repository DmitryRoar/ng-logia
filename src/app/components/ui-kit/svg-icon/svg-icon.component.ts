import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IconNameType } from './icon-name.type';

@Component({
  selector: 'svg-icon',
  template: `
    <svg [attr.height]="size" [attr.width]="size" style="display: inline-block">
      <use
        attr.xlink:href="{{ path }}/{{ spriteType }}-sprite.svg#{{ icon }}"
      ></use>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  @Input() icon!: IconNameType;
  @Input() spriteType: string = 'gen';
  @Input() size!: string;

  path = '/assets/icons/sprites';

  constructor() {}
}
