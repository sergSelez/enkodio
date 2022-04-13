import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiActiveZoneModule,
    TuiFocusableModule,
    TuiFocusVisibleModule,
    TuiRepeatTimesModule,
} from '@taiga-ui/cdk';
import {TuiFormatNumberPipeModule, TuiPluralizePipeModule} from './pipes';
import {TuiSliderComponent} from './slider.component';

@NgModule({
    imports: [
        CommonModule,
        TuiRepeatTimesModule,
        TuiFocusableModule,
        TuiFocusVisibleModule,
        TuiActiveZoneModule,
        TuiPluralizePipeModule,
        TuiFormatNumberPipeModule,
    ],
    declarations: [TuiSliderComponent],
    exports: [TuiSliderComponent],
})
export class TuiSliderModule {}